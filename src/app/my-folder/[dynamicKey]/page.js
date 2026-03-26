"use client";

import PropTypes from 'prop-types';

// you may only have one dynamic file per directory

export default function DynamicRoute({ params }) {

  return <div>ID = {params.dynamicKey}</div>;
}

DynamicRoute.propTypes = {
  // params is an object, not a string — it contains one key per dynamic segment in the URL
  params: PropTypes.shape({
    dynamicKey: PropTypes.string,
  }).isRequired,
}
