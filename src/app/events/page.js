'use client';

// 'use client' is required whenever you use hooks like useState.
// These hooks rely on browser APIs and can only run in the browser, not on the server.

import React, { useState } from 'react';

export default function Events() {
  // useState takes an initial value and returns two things:
  //   1. The current value
  //   2. A setter function — calling it updates the value and triggers a re-render
  const [eventText, setEventText] = useState('');
  const [inputValue, setInputValue] = useState('');

  // onClick handler — called when the button is clicked
  const handleClick = () => {
    setEventText('Button was Clicked!');
  };

  // onChange handler — called on every keystroke in the input
  // The event object gives us access to the input's current value via event.target.value
  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value); // keeps the input controlled (React owns the value)
    setEventText(value);  // mirrors the input value in the display area
  };

  // onSubmit handler — called when the form is submitted
  // event.preventDefault() stops the browser's default behavior (page reload on submit)
  const handleSubmit = (event) => {
    event.preventDefault();
    setEventText('Form Submitted!');
  };

  // Resets both pieces of state back to their initial empty string values
  const handleReset = () => {
    setInputValue('');
    setEventText('');
  };

  return (
    <section className="section-wrap">
      <header>
        <span className="section-label">React Lesson</span>
        <h1 className="section-title">Events</h1>
      </header>

      <div className="style-demo">
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)', fontSize: 'var(--fs-md)' }}>
          Events let you respond to user interactions like clicks, typing, and form submissions. React's synthetic events make event handling consistent across browsers.
        </p>

        <div className="card-ds" style={{ marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h3 className="watch-event" style={{ margin: 0, textAlign: 'center' }}>
            {eventText || '👀 Watch for events to appear here...'}
          </h3>
        </div>

        <hr style={{ borderTop: '1px solid var(--border-subtle)', margin: 'var(--space-lg) 0' }} />

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 'var(--space-md)' }}>Click Event</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)', fontSize: 'var(--fs-md)' }}>
          Triggered when a button is clicked:
        </p>
        <button className="btn btn-lime" type="button" onClick={handleClick} style={{ marginBottom: 'var(--space-lg)' }}>
          Click Event
        </button>

        <hr style={{ borderTop: '1px solid var(--border-subtle)', margin: 'var(--space-lg) 0' }} />

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 'var(--space-md)' }}>Change Event</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)', fontSize: 'var(--fs-md)' }}>
          Triggered on every keystroke in the input:
        </p>
        <input
          className="form-input"
          placeholder="Type something..."
          value={inputValue}
          onChange={handleChange}
          style={{ marginBottom: 'var(--space-lg)' }}
          aria-label="Change event input"
        />

        <hr style={{ borderTop: '1px solid var(--border-subtle)', margin: 'var(--space-lg) 0' }} />

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 'var(--space-md)' }}>Submit Event</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)', fontSize: 'var(--fs-md)' }}>
          Triggered when a form is submitted:
        </p>
        <form onSubmit={handleSubmit} style={{ marginBottom: 'var(--space-lg)' }}>
          <button type="submit" className="btn btn-cyan">
            Submit Event
          </button>
        </form>

        <div className="button-group">
          <button type="button" className="btn btn-pink" onClick={handleReset}>
            Reset All
          </button>
        </div>
      </div>
    </section>
  );
}
