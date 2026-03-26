import React from 'react';
import Link from 'next/link';

export default function NewRoute() {
  return (
    <section className="section-wrap">
      <header>
        <span className="section-label">Nested Route</span>
        <h1 className="section-title">New Route</h1>
      </header>

      <div className="style-demo">
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)', fontSize: 'var(--fs-md)' }}>
          You{"'"}re viewing a <strong style={{ color: 'var(--cyan)' }}>static nested route</strong>. This route is created by the file:
        </p>

        <div className="card-ds" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', color: 'var(--lime)' }}>
          <code>src/app/my-folder/new-route/page.js</code>
        </div>

        <p style={{ color: 'var(--text-muted)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-lg)', fontSize: 'var(--fs-md)' }}>
          Static routes have a fixed path. Try exploring the dynamic route too:
        </p>

        <Link href="/my-folder/dynamic-route" className="btn btn-cyan">
          Go to Dynamic Route
        </Link>
      </div>
    </section>
  );
}
