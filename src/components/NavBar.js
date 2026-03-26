'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="ds-nav" role="navigation" aria-label="Main navigation">
      <div className="ds-nav-inner">
        <Link href="/" className="ds-nav-logo">
          React <span className="highlight">Topics</span>
        </Link>

        <div className="ds-nav-links">
          <Link href="/props" className="ds-nav-link">
            Props
          </Link>
          <Link href="/events" className="ds-nav-link">
            Events
          </Link>
          <Link href="/hooks" className="ds-nav-link">
            Hooks
          </Link>
          <Link href="/forms" className="ds-nav-link">
            Forms
          </Link>
          <Link href="/routes" className="ds-nav-link">
            Routes
          </Link>
        </div>
      </div>
    </nav>
  );
}
