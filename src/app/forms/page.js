'use client';

import { useState } from 'react';
import Form from '@/components/Form';
import NameCard from '@/components/NameCard';

export default function Forms() {
  // Array state — initialize as empty array, each item will be a person object { name, phone }
  const [names, setNames] = useState([]);

  // Object state — tracks which item is being edited; empty object means "create mode"
  const [editItem, setEditItem] = useState({});

  // Functional state update: using prevState ensures we always spread the latest array,
  // not a stale snapshot. This is especially important inside async or batched updates.
  const addPerson = (newPerson) => {
    setNames((prevState) => [...prevState, newPerson]);
  };

  // Match the original name (editItem.name) to find which card to replace.
  // We use prevState.map so we don't mutate the existing array directly.
  const updatePerson = (updatedPerson) => {
    setNames((prevState) =>
      prevState.map((person) =>
        person.name === editItem.name ? updatedPerson : person,
      ),
    );
  };

  return (
    <section className="section-wrap">
      <header>
        <span className="section-label">React Lesson</span>
        <h1 className="section-title">Forms</h1>
      </header>

      <div className="style-demo">
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)', fontSize: 'var(--fs-md)' }}>
          Forms combine <strong style={{ color: 'var(--cyan)' }}>state management</strong> with <strong style={{ color: 'var(--lime)' }}>event handlers</strong> to create interactive user experiences. Add, edit, and manage form data.
        </p>

        <hr style={{ borderTop: '1px solid var(--border-subtle)', margin: 'var(--space-lg) 0' }} />

        {/*
          Lifting state up: editItem and its setter live here (the parent) so both
          NameCard and Form can share the same piece of state.
          - NameCard sets editItem when Edit is clicked
          - Form reads editItem to populate its fields and knows whether to add or update
        */}
        <Form obj={editItem} addPerson={addPerson} updatePerson={updatePerson} setEditItem={setEditItem} />

        {names.length > 0 && (
          <>
            <hr style={{ borderTop: '1px solid var(--border-subtle)', margin: 'var(--space-lg) 0' }} />

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-lg)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 'var(--space-md)' }}>
              {names.length} {names.length === 1 ? 'Person' : 'People'} Added
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--space-lg)' }}>
              {/* Note: person.name is used as the key — works fine as long as names are unique */}
              {names.map((person) => (
                <NameCard key={person.name} person={person} setEditItem={setEditItem} />
              ))}
            </div>
          </>
        )}

        {names.length === 0 && (
          <div style={{ textAlign: 'center', padding: 'var(--space-xl)', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: 'var(--fs-lg)' }}>No people added yet. Create one using the form above! 👆</p>
          </div>
        )}
      </div>
    </section>
  );
}
