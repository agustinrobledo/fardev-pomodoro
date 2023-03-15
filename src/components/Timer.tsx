import { useEffect, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (running) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setFinished(true);
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
    <div className="w-100 flex flex-col items-center justify-center p-4 gap-6">
      <div className="flex gap-2">
        <input
          type="number"
          value={minutes}
          min={0}
          max={59}
          className="py-6 text-black text-center text-5xl bg-light-green"
          onChange={(e) => setMinutes(Number(e.target.value))}
        />
        <input
          type="number"
          value={seconds}
          min={0}
          max={59}
          className="py-6 text-black text-center text-5xl bg-light-green"
          onChange={(e) => setSeconds(Number(e.target.value))}
        />
      </div>
      <div className="flex gap-3 w-70 text-2xl">
        <button
          className="bg-pink px-4 py-2 rounded-lg"
          onClick={() => {
            setFinished(false);
            setRunning(true);
          }}
        >
          START
        </button>
        <button
          className="bg-pink px-4 py-2 rounded-lg"
          onClick={() => setRunning(false)}
        >
          PAUSE
        </button>
        <button
          className="bg-pink px-4 py-2 rounded-lg"
          onClick={() => {
            setMinutes(25);
            setSeconds(0);
            setRunning(false);
            setFinished(false);
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default Timer;
