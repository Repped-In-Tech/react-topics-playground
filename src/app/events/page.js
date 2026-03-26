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
    <>
      <h1>Events</h1>
      {/* The || operator provides a fallback: if eventText is empty (''), show the default message */}
      <h3 className="watch-event">{eventText || 'Welcome to events!'}</h3>

      <h4>Button</h4>
      <button className="btn btn-success" type="button" onClick={handleClick}>
        Click Event
      </button>
      <hr />

      <h4>Input</h4>
      <input placeholder="Change Event" value={inputValue} onChange={handleChange} />
      <hr />

      <h4>Form</h4>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-info">
          Submit Event
        </button>
      </form>
      <hr />

      <button type="button" className="btn btn-warning" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
