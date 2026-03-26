import React from 'react';
import PropTypes from 'prop-types';

function NameCard({ person, setEditItem }) {
  return (
    <article className="card-ds">
      <div>
        <strong>{person.name}</strong>: {person.phone}
      </div>
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => setEditItem(person)}
        style={{ marginTop: '0.75rem' }}
      >
        Edit
      </button>
    </article>
  );
}

NameCard.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  setEditItem: PropTypes.func.isRequired,
};

export default NameCard;
