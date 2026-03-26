"use client";

import PropTypes from 'prop-types';
import Link from 'next/link';

// you may only have one dynamic file per directory

export default function DynamicRoute({ params }) {

  return (
    <section className="section-wrap">
      <header>
        <span className="section-label">Dynamic Route</span>
        <h1 className="section-title">Dynamic Route Demo</h1>
      </header>

      <div className="style-demo">
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)', fontSize: 'var(--fs-md)' }}>
          This is a <strong style={{ color: 'var(--lime)' }}>dynamic route</strong> that changes based on the URL parameter. The file is:
        </p>

        <div className="card-ds" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', color: 'var(--lime)', marginBottom: 'var(--space-lg)' }}>
          <code>src/app/my-folder/[dynamicKey]/page.js</code>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 'var(--space-md)' }}>URL Parameter</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)', fontSize: 'var(--fs-md)' }}>
          The dynamic key from the URL:
        </p>

        <div className="card-ds" style={{ padding: 'var(--space-lg)', textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
          <p style={{ color: 'var(--cyan)', fontSize: 'var(--fs-xl)', fontWeight: 700, margin: 0 }}>
            {params.dynamicKey}
          </p>
        </div>

        <hr style={{ borderTop: '1px solid var(--border-subtle)', margin: 'var(--space-lg) 0' }} />

        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)', fontSize: 'var(--fs-md)' }}>
          Try changing the URL to see how the parameter changes:
        </p>

        <div className="button-group" style={{ marginBottom: 'var(--space-lg)' }}>
          <Link href="/my-folder/hello" className="btn btn-cyan">
            /my-folder/hello
          </Link>
          <Link href="/my-folder/world" className="btn btn-lime">
            /my-folder/world
          </Link>
          <Link href="/my-folder/react" className="btn btn-pink">
            /my-folder/react
          </Link>
        </div>

        <Link href="/routes" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
          ← Back to Routes
        </Link>
      </div>
    </section>
  );
}

DynamicRoute.propTypes = {
  // params is an object, not a string — it contains one key per dynamic segment in the URL
  params: PropTypes.shape({
    dynamicKey: PropTypes.string,
  }).isRequired,
}
