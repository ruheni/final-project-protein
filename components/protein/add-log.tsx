import React, { useState } from 'react';

const submitData = async (e: React.SyntheticEvent) => {
  e.preventDefault();
  try {
    const body = { name: "chicken" };
    await fetch('/api/protein', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error(error);
  }
};

export default function AddLog() {
    return (
        <button onClick={submitData}>
            test
        </button>
    )
}