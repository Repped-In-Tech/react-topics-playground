import Link from 'next/link';

function Home() {
  const sections = [
    {
      name: 'Props',
      path: '/props',
      description: 'Learn how to pass data between React components using props, including prop validation with PropTypes and default values.',
    },
    {
      name: 'Events',
      path: '/events',
      description: 'Explore React event handling, including synthetic events, event delegation, and best practices for user interactions.',
    },
    {
      name: 'Hooks',
      path: '/hooks',
      description: 'Master React Hooks like useState, useEffect, and custom hooks for managing component state and lifecycle.',
    },
    {
      name: 'Forms',
      path: '/forms',
      description: 'Build interactive forms with controlled components, form validation, and state management patterns.',
    },
    {
      name: 'Routes',
      path: '/routes',
      description: 'Understand Next.js routing, dynamic routes, nested routes, and navigation between pages.',
    },
  ];

  return (
    <section>
      <header className="section-wrap">
        <span className="section-label">Welcome</span>
        <h1 className="section-title">React Topics</h1>
      </header>

      <div className="style-demo">
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          This sample app demonstrates reusable React patterns with a unified Repped design style across navigation, forms, and cards.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            background: 'var(--bg-card)',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)',
            overflow: 'hidden',
          }}>
            <thead>
              <tr style={{ background: 'var(--bg-section)' }}>
                <th style={{
                  padding: '1rem 1.25rem',
                  textAlign: 'left',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-xs)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--cyan)',
                  fontWeight: '700',
                  borderBottom: '1px solid var(--border-subtle)',
                }}>
                  Section
                </th>
                <th style={{
                  padding: '1rem 1.25rem',
                  textAlign: 'left',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-xs)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--cyan)',
                  fontWeight: '700',
                  borderBottom: '1px solid var(--border-subtle)',
                }}>
                  Description
                </th>
                <th style={{
                  padding: '1rem 1.25rem',
                  textAlign: 'left',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-xs)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--cyan)',
                  fontWeight: '700',
                  borderBottom: '1px solid var(--border-subtle)',
                  width: '120px',
                }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section, index) => (
                <tr key={section.path} style={{
                  borderBottom: index < sections.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                }}>
                  <td style={{
                    padding: '1.25rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: '800',
                    fontSize: 'var(--fs-lg)',
                    color: 'var(--text-base)',
                  }}>
                    {section.name}
                  </td>
                  <td style={{
                    padding: '1.25rem',
                    color: 'var(--text-muted)',
                    lineHeight: 'var(--lh-body)',
                    maxWidth: '400px',
                  }}>
                    {section.description}
                  </td>
                  <td style={{
                    padding: '1.25rem',
                    textAlign: 'center',
                  }}>
                    <Link
                      href={section.path}
                      className="btn btn-cyan"
                      style={{
                        padding: '0.5rem 1rem',
                        fontSize: 'var(--fs-sm)',
                        textDecoration: 'none',
                        display: 'inline-block',
                      }}
                      aria-label={`${section.name} section`}
                    >
                      Explore
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Home;
