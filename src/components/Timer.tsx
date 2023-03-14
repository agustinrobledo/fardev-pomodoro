import { useEffect, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval: number | undefined;
    if (running) {
      console.log(seconds);
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, minutes, seconds]);

  return (
    <div>
      <div>
        <input
          type="number"
          value={minutes}
          min={0}
          max={59}
          onChange={(e) => setMinutes(Number(e.target.value))}
        />
        <input
          type="number"
          value={seconds}
          min={0}
          max={59}
          onChange={(e) => setSeconds(Number(e.target.value))}
        />
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button
          onClick={() => {
            setMinutes(0);
            setSeconds(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
