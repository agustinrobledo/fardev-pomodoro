import { ITime } from "../types/tasks";

interface timerProps {
  time: {
    minutes: number;
    seconds: number;
    isPlaying: boolean;
    isFinished: boolean;
  };
  setTime: (t: ITime) => void;
}

const Timer = ({ time, setTime }: timerProps) => {
  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTime({ ...time, [name]: Number(value) });
  };

  const onReset = () => {
    setTime({
      minutes: time.minutes,
      seconds: time.seconds,
      isFinished: false,
      isPlaying: true,
    });
  };

  const onPlay = () => {
    setTime({
      ...time,
      isPlaying: true,
    });
  };

  const onPause = () => {
    setTime({
      ...time,
      isPlaying: false,
    });
  };

  return (
    <div className="w-100 flex flex-col items-center justify-center p-4 gap-6">
      <div className="flex gap-2">
        <input
          type="number"
          name="minutes"
          value={time.minutes}
          min={0}
          max={59}
          className="py-6 text-black text-center text-5xl bg-light-green"
          onChange={handleChangeTime}
        />
        <input
          type="number"
          name="seconds"
          value={time.seconds}
          min={0}
          max={59}
          className="py-6 text-black text-center text-5xl bg-light-green"
          onChange={handleChangeTime}
        />
      </div>
      <div className="flex gap-3 w-70 text-2xl">
        <button className="bg-pink px-4 py-2 rounded-lg" onClick={onPlay}>
          START
        </button>
        <button className="bg-pink px-4 py-2 rounded-lg" onClick={onPause}>
          PAUSE
        </button>
        <button className="bg-pink px-4 py-2 rounded-lg" onClick={onReset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Timer;
