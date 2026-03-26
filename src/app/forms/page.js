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
    <>
      {/* Note: person.name is used as the key — works fine as long as names are unique */}
      {names.map((person) => (
        <NameCard key={person.name} person={person} setEditItem={setEditItem} />
      ))}

      {/*
        Lifting state up: editItem and its setter live here (the parent) so both
        NameCard and Form can share the same piece of state.
        - NameCard sets editItem when Edit is clicked
        - Form reads editItem to populate its fields and knows whether to add or update
      */}
      <Form obj={editItem} addPerson={addPerson} updatePerson={updatePerson} setEditItem={setEditItem} />
    </>
  );
}
