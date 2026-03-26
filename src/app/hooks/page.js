"use client";

// 'use client' is required because useState and useEffect are browser-side hooks.
// Without it, Next.js would try to run this as a server component and throw an error.

import React, { useEffect, useState } from 'react';

export default function Hooks() {
  // useState works the same as in the Events lesson — initial value, returns [value, setter].
  const [stateHook, setStateHook] = useState('State Hook Default Value');
  const [effectTrigger, setEffectTrigger] = useState(0);

  // useEffect runs AFTER the component renders (not during).
  // Think of it as: "once the page is painted, then do this side effect."
  //
  // The empty array [] is the dependency array.
  // [] = run this effect only once, when the component first mounts.
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateHook('The useEffect Loaded Me! ✨');
    }, 2000);

    // The return function is the CLEANUP.
    // It runs when the component unmounts (is removed from the page).
    // Without this, the timeout could try to update state on an unmounted component — a memory leak.
    return () => clearTimeout(timer);
    // When you add a variable here (e.g. [stateHook]), the effect would re-run whenever that value changes.
  }, []);

  const handleTriggerEffect = () => {
    setStateHook('Effect triggered manually!');
    setEffectTrigger(effectTrigger + 1);
  };

  return (
    <section className="section-wrap">
      <header>
        <span className="section-label">React Lesson</span>
        <h1 className="section-title">Hooks</h1>
      </header>

      <div className="style-demo">
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)', fontSize: 'var(--fs-md)' }}>
          Hooks let you use React features in functional components. <strong style={{ color: 'var(--cyan)' }}>useState</strong> manages state, and <strong style={{ color: 'var(--lime)' }}>useEffect</strong> handles side effects.
        </p>

        <div className="card-ds" style={{ marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ color: 'var(--cyan)', margin: 0, textAlign: 'center', fontSize: 'var(--fs-lg)' }}>
            {stateHook}
          </h3>
        </div>

        <hr style={{ borderTop: '1px solid var(--border-subtle)', margin: 'var(--space-lg) 0' }} />

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 'var(--space-md)' }}>useEffect Hook</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)', fontSize: 'var(--fs-md)' }}>
          useEffect runs AFTER the component renders. The effect below runs once when the page loads, after 2 seconds.
        </p>
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)', fontSize: 'var(--fs-sm)', fontStyle: 'italic' }}>
          👉 Refresh the page to see the effect trigger!
        </p>

        <hr style={{ borderTop: '1px solid var(--border-subtle)', margin: 'var(--space-lg) 0' }} />

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 'var(--space-md)' }}>useState Hook</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)', fontSize: 'var(--fs-md)' }}>
          useState lets you add state to functional components. Trigger the effect manually:
        </p>
        <button type="button" className="btn btn-lime" onClick={handleTriggerEffect}>
          Trigger useEffect
        </button>
        <p style={{ color: 'var(--text-muted)', marginTop: 'var(--space-md)', fontSize: 'var(--fs-sm)' }}>
          Effect triggered: <strong style={{ color: 'var(--lime)' }}>{effectTrigger}</strong> times
        </p>
      </div>
    </section>
  );
}
