import React from 'react';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

// LESSON: PROPS
// Props are data passed INTO a component from the outside — like arguments to a function.
// They are received as a single object. We destructure that object in the parameter list
// so we can reference each prop by name instead of writing props.color, props.children.
//
// Default values are set directly in the parameter list (e.g. color = 'red').
// This replaces the old Loading.defaultProps pattern, which is deprecated in React 18+.
export default function Loading({ color = 'gray', children = 'nothing here' }) {
  return (
    <div className="text-center mt-5">
      <Spinner
        animation="border"
        style={{
          color, // the color prop controls the spinner color; defaults to 'gray'
          width: '100px',
          height: '100px',
        }}
      />
      {/* CHILDREN PROP:
          Anything placed between <Loading> and </Loading> in the parent becomes children.
          If nothing is passed, the default value 'nothing here' renders instead.
          Open props/page.js to see examples of both. */}
      {children}
    </div>
  );
}

// PropTypes declare what data type each prop should be.
// React will log a warning in the console if the wrong type is passed.
Loading.propTypes = {
  color: PropTypes.string.isRequired,
  // PropTypes.node covers anything React can render: strings, numbers, JSX, arrays, etc.
  children: PropTypes.node.isRequired,
};
