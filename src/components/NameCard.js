import React from 'react';
import PropTypes from 'prop-types';

function NameCard({ person, setEditItem }) {
  return (
    <article className="card-ds">
      <div style={{ marginBottom: 'var(--space-md)' }}>
        <div style={{ fontSize: 'var(--fs-xs)', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
          Person
        </div>
        <h4 style={{ color: 'var(--cyan)', margin: '0 0 0.5rem 0', fontSize: 'var(--fs-lg)', fontWeight: 700 }}>
          {person.name}
        </h4>
        <p style={{ color: 'var(--text-base)', margin: 0, fontSize: 'var(--fs-md)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>📞</span>{' '}
          {person.phone}
        </p>
      </div>
      <button
        type="button"
        className="btn btn-lime"
        onClick={() => setEditItem(person)}
        style={{ marginTop: 'auto', width: '100%' }}
        aria-label={`Edit ${person.name}`}
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
