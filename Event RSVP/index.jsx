const { useState } = React;

  export function EventRSVPForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState(0);
  const [pref, setPref] = useState('');
  const [check, setCheck] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }
  const handleCheck = () => {
    setCheck(true);
  }

  const isButtonDisabled = name === '' || email === '' || num <= 0;
  

  return (
    <div>
      <h2>Event RSVP</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="section column">
        Name:
        </label>
        <input 
        placeholder="Your Name"
        type="text"
        required
        value={name}
        onChange={e => setName(e.target.value)}>
        </input>
        <label className="section column">
        Email:
        </label>
        <input
        placeholder="Your Email"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        >
        </input>
        <label className="section column">
        Number of Attendees:
        </label>
        <input
        placeholder="Number of Attendees"
        type="number" min="1"
        required
        value={num}
        onChange={e => setNum(e.target.value)}
        >
        </input>
        <label className="section column">
        Dietary Preferences:
        </label>
        <input
        placeholder="Dietary Preferences (optional)"
        type="text"
        value={pref}
        onChange={e => setPref(e.target.value)}
        >
        </input>
        <p>Bringing additional guests?
          <input
          type="checkbox"
          className="no-style"
          onChange={handleCheck}
          />
        </p>
        <button
        className="submit-btn"
        type="submit"
        onClick={handleSubmit}
        disabled={isButtonDisabled}> 
        Submit Form
        </button>

        {(submitted) ? (<p>
        <h3>
        RSVP Submitted!
        </h3>
        Name: {name} <br/>
        Email: {email} <br/>
        Number of attendees: {num} <br/>
        Dietary preferences: {pref? pref: "None"} <br/>
        Bringing additional guests: {check? "Yes" : "No"} <br/>
      </p>) : ('')}
      </form>
    </div>
  );
}



