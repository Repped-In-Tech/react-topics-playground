import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// initialState is the single source of truth for an empty form.
// Defining it outside the component means the same object reference is reused
// on every reset — no need to redefine it each render.
const initialState = {
  name: '',
  phone: '',
};

// obj: the item being edited (empty object = create mode, populated object = edit mode)
// addPerson: called by the parent to add a new item to the list
// updatePerson: called by the parent to replace an existing item in the list
// setEditItem: resets the parent's editItem back to {} after submit/cancel
function Form({ obj = initialState, addPerson, updatePerson, setEditItem }) {
  const [formInput, setFormInput] = useState(initialState);

  // When the parent sets editItem (by clicking Edit on a card), obj changes.
  // This effect watches obj and populates the form fields with the selected item's data.
  useEffect(() => {
    if (obj.name) {
      setFormInput({
        name: obj.name,
        phone: obj.phone,
      });
    }
  }, [obj]);

  // On call of the resetForm function, reset the state to the initialState
  const resetForm = () => {
    setFormInput({ ...initialState });
    // Also clear the parent's editItem so the form returns to create mode
    setEditItem({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (obj.name) {
      // Edit mode: update the existing item in the parent's list
      updatePerson(formInput);
      resetForm();
    } else {
      // Create mode: add a new item to the parent's list
      addPerson(formInput);
      resetForm();
    }
  };

  // Computed property name: [name] dynamically sets the key based on which input changed.
  // This one handler works for ALL inputs — name and phone both call handleChange.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="style-demo" aria-live="polite">
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name" className="field-label">
              Name
            </label>
            <input
              className={`form-input ${obj.name && formInput.name === '' ? 'error' : ''}`}
              type="text"
              id="name"
              name="name"
              value={formInput.name}
              onChange={handleChange}
              placeholder="Add a name"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="phone" className="field-label">
              Phone
            </label>
            <input
              className="form-input"
              type="text"
              id="phone"
              name="phone"
              value={formInput.phone}
              onChange={handleChange}
              placeholder="Add a phone"
              required
            />
          </div>

          <div className="field" style={{ alignSelf: 'end' }}>
            <button className="btn btn-cyan" type="submit">
              {obj.name ? 'Update' : 'Submit'}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={resetForm}
              style={{ marginLeft: '0.75rem' }}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  // obj has a default (initialState), so .isRequired is not needed here
  obj: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  addPerson: PropTypes.func.isRequired,
  updatePerson: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

export default Form;
