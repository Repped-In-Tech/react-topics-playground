"use client";

// 'use client' is required because useState and useEffect are browser-side hooks.
// Without it, Next.js would try to run this as a server component and throw an error.

import React, { useEffect, useState } from 'react';

export default function Hooks() {
  // useState works the same as in the Events lesson — initial value, returns [value, setter].
  const [stateHook, setStateHook] = useState('State Hook Default Value');

  // useEffect runs AFTER the component renders (not during).
  // Think of it as: "once the page is painted, then do this side effect."
  //
  // The empty array [] is the dependency array.
  // [] = run this effect only once, when the component first mounts.
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateHook('The useEffect Loaded Me!');
    }, 5000);
    
    // The return function is the CLEANUP.
    // It runs when the component unmounts (is removed from the page).
    // Without this, the timeout could try to update state on an unmounted component — a memory leak.
    return () => clearTimeout(timer);
    // When you add a variable here (e.g. [stateHook]), the effect would re-run whenever that value changes.
  }, [stateHook]);

  return <div>{stateHook}</div>;
}
