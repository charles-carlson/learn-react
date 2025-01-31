import {useState} from 'react' 
/**
 * When the Form is rendered, it appears to be frozen. 
 * When a user enters stuff into the <input> tags or 
 * clicks on the reset button nothing happens. 
 * Identify and fix the error. 
 */
export default function Form() {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
 

    function handleFirstNameChange(e: { target: { value: String } }) {
    setFirstName(e.target.value.toString());
  }

    function handleLastNameChange(e: { target: { value: String } }) {
    setLastName(e.target.value.toString());
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
      <form onSubmit={e=>e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
          onChange={(e)=>handleFirstNameChange(e)}
      />
      <input
        placeholder="Last name"
        value={lastName}
          onChange={(e)=>handleLastNameChange(e)}
      />
      <h1>Hi, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reset</button>
    </form>
  );
}
