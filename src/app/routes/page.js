'use client';

import Link from 'next/link';
import React from 'react';

export default function Routes() {
  return (
    <section className="section-wrap">
      <header>
        <span className="section-label">React Lesson</span>
        <h1 className="section-title">Routes</h1>
      </header>

      <div className="style-demo">
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)', fontSize: 'var(--fs-md)' }}>
          Next.js routing uses the file system. Each file in the <code style={{ fontFamily: 'var(--font-mono)', background: 'var(--bg-card)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>app</code> directory automatically becomes a route.
        </p>

        <hr style={{ borderTop: '1px solid var(--border-subtle)', margin: 'var(--space-lg) 0' }} />

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 'var(--space-md)' }}>File-Based Routes</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)', fontSize: 'var(--fs-md)' }}>
          Click these links to navigate to nested routes:
        </p>

        <div className="card-ds" style={{ paddingLeft: 'var(--space-lg)' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ marginBottom: 'var(--space-md)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 'var(--space-md)' }}>
              <Link
                href="my-folder/new-route"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--cyan)',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--lime)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cyan)'; }}
              >
                <span>→</span>
                <span>/my-folder/new-route</span>
              </Link>
              <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)', marginTop: '0.5rem', margin: '0.5rem 0 0 0' }}>
                Static nested route
              </p>
            </li>

            <li style={{ marginBottom: 'var(--space-md)' }}>
              <Link
                href="/my-folder/dynamic-route"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--lime)',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cyan)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--lime)'; }}
              >
                <span>→</span>
                <span>/my-folder/dynamic-route</span>
              </Link>
              <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)', marginTop: '0.5rem', margin: '0.5rem 0 0 0' }}>
                Dynamic route (uses [dynamicKey] parameter)
              </p>
            </li>
          </ul>
        </div>

        <hr style={{ borderTop: '1px solid var(--border-subtle)', margin: 'var(--space-lg) 0' }} />

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 'var(--space-md)' }}>How It Works</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)', fontSize: 'var(--fs-md)' }}>
          When you click a link, check the address bar to see how the URL changes. Open the file structure to see how files in <code style={{ fontFamily: 'var(--font-mono)', background: 'var(--bg-card)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>src/app</code> map to routes:
        </p>

        <div className="card-ds" style={{ paddingLeft: 'var(--space-lg)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)' }}>
          <code style={{ color: 'var(--cyan)' }}>src/app/my-folder/new-route/page.js</code>
          <span style={{ color: 'var(--text-muted)' }}> → </span>
          <code style={{ color: 'var(--lime)' }}>/my-folder/new-route</code>
        </div>
      </div>
    </section>
  );
}
