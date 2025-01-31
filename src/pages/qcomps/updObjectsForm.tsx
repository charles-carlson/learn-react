import { useState } from 'react';

/**
 * The component has a bug that 
 * prevents the state from being updated correctly.
 * Identify the bug and fix it.
 */
export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
    likescore: 10,
  });

  function handlePlusClick() {
    const p = {
      ...player,
      likescore:player.likescore + 1
    };
    setPlayer(p)
  }

  function handleFirstNameChange(e: { target: { value: string; }; }) {
    const p = {
      ...player,
      firstName:e.target.value,
    }
    setPlayer(p);
  }

  function handleLastNameChange(e: { target: { value: string; }; }) {
    const p = {
      ...player,
      lastName: e.target.value,
    }
    setPlayer(p);
  }

  return (
    <>
      <label>
        Like Score: <b>{player.likescore}</b>
        {'  '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
