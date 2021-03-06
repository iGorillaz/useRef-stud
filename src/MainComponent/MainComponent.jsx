import { useState, useRef } from "react";
import s from './MainComponent.module.css'

const MainComponent = () => {
  const [input, setInput] = useState("");
  const [seconds, setSeconds] = useState(0);

  const renders = useRef(0);
  const inputRef = useRef(0);
  const timerId = useRef(0);

  const handleChange = (e) => {
    setInput(e.target.value);
    renders.current++;
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
    inputRef.current.focus();
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
    inputRef.current.focus();
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
    inputRef.current.focus();
  };

  return (
    <div>
      <input
			className={s.inp}
        ref={inputRef}
        type="text"
        value={input}
        placeholder="Input text"
        onChange={handleChange}
      />
      <p>Renders: {renders.current} </p>
      <br />
      <br />
      <section className={s.sctn}>
        <button className={s.btn} onClick={startTimer}>Start</button>
        <button className={s.btn} onClick={stopTimer}>Stop</button>
        <button className={s.btn} onClick={resetTimer}>Reset</button>
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
