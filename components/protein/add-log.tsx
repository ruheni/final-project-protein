'use client'

import React, { useState } from 'react';

export default function AddLog() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [count, setCount] = useState('');

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  
    const data = {
      name: name,
      date: date,
      count: count,
    }
  
    try {
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

    return (
      <form onSubmit={submitData}>
        <input 
          type="date" 
          id="date"
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <div>
        <label htmlFor="pCount">Protein Count </label>
          <input
            type="number"
            id="pCount"
            name="pCount"
            required
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
        
        <div>
        <label htmlFor="pLabel">Label </label>
          <input
            type="text"
            id="pLabel"
            name="pLabel"
            required
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          <div style={{padding: 5}}>
          <button 
            type="submit"
            style={{
              background: 'grey',
              padding: 10
            }}
          >
            Submit
          </button>
          </div>
      </form>
    )
}