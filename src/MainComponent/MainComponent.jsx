import { useState } from "react";

const MainComponent = () => {
  const [input, setInput] = useState("");
  const [seconds, setSeconds] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Input text"
        onChange={handleChange}
      />
      <p>Renders: </p>
      <br />
      <br />
      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
      <br />
      <br />
      <p>Seconds: {seconds}</p>
      <br />
      <br />
      <p>{input}</p>
    </div>
  );
};

export default MainComponent;
