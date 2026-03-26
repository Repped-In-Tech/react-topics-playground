'use client';

import { useEffect, useState } from 'react';
import styles from './AccessibilityPanel.module.css';

export default function AccessibilityPanel() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 'md',
    spacing: 'normal',
    contrast: 'standard',
    dyslexia: 'off',
    motion: 'full',
  });

  const applySettings = (newSettings) => {
    const html = document.documentElement;
    html.setAttribute('data-font-size', newSettings.fontSize);
    html.setAttribute('data-spacing', newSettings.spacing);
    html.setAttribute('data-contrast', newSettings.contrast);
    html.setAttribute('data-dyslexia', newSettings.dyslexia);
    html.setAttribute('data-motion', newSettings.motion);
  };

  // Initialize from localStorage
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('a11y-settings');
    if (stored) {
      try {
        const savedSettings = JSON.parse(stored);
        setSettings(savedSettings);
        applySettings(savedSettings);
      } catch (e) {
        console.error('Failed to load accessibility settings:', e);
      }
    }
  }, []);

  const handleChange = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('a11y-settings', JSON.stringify(newSettings));
  };

  const handleReset = () => {
    const defaults = {
      fontSize: 'md',
      spacing: 'normal',
      contrast: 'standard',
      dyslexia: 'off',
      motion: 'full',
    };
    setSettings(defaults);
    applySettings(defaults);
    localStorage.setItem('a11y-settings', JSON.stringify(defaults));
  };

  if (!mounted) return null;

  return (
    <div className={styles.panel} role="complementary" aria-label="Accessibility Controls">
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="a11y-controls"
        title="Toggle Accessibility Controls"
      >
        <span>♿</span>
      </button>

      {isOpen && (
        <div id="a11y-controls" className={styles.controls}>
          <h3 className={styles.title}>Accessibility</h3>

          <div className={styles.control}>
            <label htmlFor="font-size" className={styles.label}>
              Font Size
            </label>
            <select
              id="font-size"
              value={settings.fontSize}
              onChange={(e) => handleChange('fontSize', e.target.value)}
              className={styles.select}
            >
              <option value="xs">Extra Small (11px)</option>
              <option value="sm">Small (13px)</option>
              <option value="md">Medium (17px)</option>
              <option value="lg">Large (22px)</option>
              <option value="xl">Extra Large (26px)</option>
            </select>
          </div>

          <div className={styles.control}>
            <label htmlFor="spacing" className={styles.label}>
              Spacing
            </label>
            <select
              id="spacing"
              value={settings.spacing}
              onChange={(e) => handleChange('spacing', e.target.value)}
              className={styles.select}
            >
              <option value="compact">Compact</option>
              <option value="normal">Normal</option>
              <option value="relaxed">Relaxed</option>
            </select>
          </div>

          <div className={styles.control}>
            <label htmlFor="contrast" className={styles.label}>
              Contrast
            </label>
            <select
              id="contrast"
              value={settings.contrast}
              onChange={(e) => handleChange('contrast', e.target.value)}
              className={styles.select}
            >
              <option value="standard">Standard</option>
              <option value="high">High Contrast</option>
            </select>
          </div>

          <div className={styles.control}>
            <label htmlFor="dyslexia" className={styles.label}>
              Dyslexia-Friendly Font
            </label>
            <select
              id="dyslexia"
              value={settings.dyslexia}
              onChange={(e) => handleChange('dyslexia', e.target.value)}
              className={styles.select}
            >
              <option value="off">Off</option>
              <option value="on">On (OpenDyslexic)</option>
            </select>
          </div>

          <div className={styles.control}>
            <label htmlFor="motion" className={styles.label}>
              Motion
            </label>
            <select
              id="motion"
              value={settings.motion}
              onChange={(e) => handleChange('motion', e.target.value)}
              className={styles.select}
            >
              <option value="full">Full (Animations Enabled)</option>
              <option value="reduced">Reduced (Animations Disabled)</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className={styles.resetBtn}
            aria-label="Reset accessibility settings to defaults"
          >
            Reset to Defaults
          </button>
        </div>
      )}
    </div>
  );
}
