import React from 'react';
import Loading from '@/components/Loading';

// LESSON: PROPS
// Props let you pass data INTO a component — the same way you pass arguments into a function.
// The component decides what to do with them; the parent decides what values to send.
//
// This is a SERVER COMPONENT (no 'use client' at the top).
// Server components run on the server and have no access to browser APIs or hooks.
// Props work the same in both server and client components.

export default function Props() {
  return (
    <section className="section-wrap">
      <header>
        <span className="section-label">React Lesson</span>
        <h1 className="section-title">Props</h1>
      </header>

      <div className="style-demo">
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)', fontSize: 'var(--fs-md)' }}>
          Props let you pass data into a component — like arguments into a function. The component receives and renders based on those props.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}>
          <div className="card-ds" style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: 'var(--fs-sm)' }}>Default (no props)</p>
            <Loading />
          </div>

          <div className="card-ds" style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <p style={{ color: 'var(--lime)', marginBottom: '1rem', fontSize: 'var(--fs-sm)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{'color="lime"'}</p>
            <Loading color="lime" />
          </div>

          <div className="card-ds" style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <p style={{ color: 'var(--cyan)', marginBottom: '1rem', fontSize: 'var(--fs-sm)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{'color="cyan"'}</p>
            <Loading color="cyan" />
          </div>

          <div className="card-ds" style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <p style={{ color: 'var(--pink)', marginBottom: '1rem', fontSize: 'var(--fs-sm)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{'color="pink"'}</p>
            <Loading color="pink" />
          </div>
        </div>

        <hr style={{ borderTop: '1px solid var(--border-subtle)', margin: 'var(--space-lg) 0' }} />

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 'var(--space-md)' }}>Children Prop</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)', fontSize: 'var(--fs-md)' }}>
          Anything between the opening and closing tags becomes the {"\""}children{"\""}
 prop:
        </p>

        <div className="card-ds" style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Loading color="cyan">
            <p style={{ marginTop: '1rem', color: 'var(--text-base)', fontSize: 'var(--fs-sm)' }}>
              Children content renders inside the component! 🎉
            </p>
          </Loading>
        </div>
      </div>
    </section>
  );
}
