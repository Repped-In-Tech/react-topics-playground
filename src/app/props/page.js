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
    <div>
      {/* No props passed — Loading will use its default values.
          Open Loading.js (src/components/Loading.js) to see how defaults are defined. */}
      <Loading />

      {/* The color prop is passed as a string. Loading uses it to style the spinner. */}
      <Loading color="green" />
      <Loading color="orange" />
      <Loading color="purple" />

      {/* CHILDREN PROP:
          Anything between the opening and closing tag becomes the special "children" prop.
          The component doesn't need to declare a "children" attribute — React passes it automatically. */}
      <Loading>
        <p>The children are between BOTH the opening and closing tag for the component</p>
      </Loading>
    </div>
  );
}
