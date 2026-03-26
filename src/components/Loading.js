import React from 'react';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

// LESSON: PROPS
// Props are data passed INTO a component from the outside — like arguments to a function.
// They are received as a single object. We destructure that object in the parameter list
// so we can reference each prop by name instead of writing props.color, props.children.
//
// Default values are set directly in the parameter list (e.g. color = 'cyan').
// This replaces the old Loading.defaultProps pattern, which is deprecated in React 18+.
export default function Loading({ color = 'cyan', children = null }) {
  // Map design system color names to hex values
  const colorMap = {
    cyan: '#67fcff',
    lime: '#ceff05',
    pink: '#ffcafd',
    gray: '#b0b0b0',
  };

  const spinnerColor = colorMap[color] || color;

  return (
    <div style={{ textAlign: 'center' }}>
      <Spinner
        animation="border"
        style={{
          color: spinnerColor,
          width: '80px',
          height: '80px',
          borderWidth: '4px',
        }}
        role="status"
        aria-label="Loading..."
      />
      {/* CHILDREN PROP:
          Anything placed between <Loading> and </Loading> in the parent becomes children.
          If nothing is passed, nothing renders. */}
      {children && (
        <div style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: 'var(--fs-sm)' }}>
          {children}
        </div>
      )}
    </div>
  );
}

// PropTypes declare what data type each prop should be.
// React will log a warning in the console if the wrong type is passed.
Loading.propTypes = {
  color: PropTypes.oneOf(['cyan', 'lime', 'pink', 'gray']),
  // PropTypes.node covers anything React can render: strings, numbers, JSX, arrays, etc.
  children: PropTypes.node,
};

Loading.defaultProps = {
  color: 'cyan',
  children: null,
};
