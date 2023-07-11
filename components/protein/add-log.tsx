'use client'

import React, { useState } from 'react';

const submitData = async (e: React.SyntheticEvent) => {
  e.preventDefault();
  // first: e.target.pCount.value,

  const data = {
    name: e.target.pLabel.value,
    date: e.target.date.value,
    count: e.target.pCount.value,
  }

  try {
    const body = { name: "chicken" };
    await fetch('/api/protein', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
  window.location.reload();
};

export default function AddLog() {
    return (
      <form onSubmit={submitData}>
        <input type="date" id="date"></input>
        <div>
        <label htmlFor="pCount">Protein Count </label>
          <input
            type="number"
            id="pCount"
            name="pCount"
            required
          />
        </div>
        
        <div>
        <label htmlFor="pLabel">Label </label>
          <input
            type="text"
            id="pLabel"
            name="pLabel"
            required
          />
          </div>
          <button type="submit">Submit</button>
      </form>
    )
}