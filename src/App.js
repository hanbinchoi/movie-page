import React from 'react';

function MinuteToHour() {
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onFlip = () => {
    setFlipped((current) => !current);
    setAmount(0);
  };
  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={flipped ? Math.round(amount * 60) : amount}
          id="minutes"
          placeholder="Minute"
          type="number"
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={flipped ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          onChange={onChange}
          disabled={!flipped}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
    </div>
  );
}

function KmToMiles() {
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onFlip = () => {
    setFlipped((current) => !current);
    setAmount(0);
  };
  return (
    <div>
      <div>
        <label htmlFor="km">KM</label>
        <input
          value={flipped ? Math.round(amount * 10) : amount}
          id="km"
          placeholder="km"
          type="number"
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlFor="miles">Miles</label>
        <input
          value={flipped ? amount : Math.round(amount / 10)}
          id="miles"
          placeholder="Miles"
          type="number"
          onChange={onChange}
          disabled={!flipped}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
    </div>
  );
}

function App() {
  const [index, setIndex] = React.useState('-1');
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="-1">Select converter </option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === '-1' ? 'Select the option' : null}
      {index === '0' ? <MinuteToHour /> : null}
      {index === '1' ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
