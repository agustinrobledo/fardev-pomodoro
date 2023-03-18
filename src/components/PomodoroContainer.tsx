import { useEffect, useState } from "react";
import Tasks from "./Tasks";
import { ITask, ITime } from "../types/tasks";
import Timer from "./Timer";

const PomodoroContainer = () => {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [time, setTime] = useState<ITime>({
    minutes: 0,
    seconds: 0,
    isPlaying: false,
    isFinished: false,
  });

  const handleChangeTasks = (tasks: ITask[]) => {
    setTasks(tasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    let interval: number | undefined;
    if (time.isPlaying) {
      interval = setInterval(() => {
        if (time.seconds > 0) {
          setTime({ ...time, seconds: time.seconds - 1 });
        }
        if (time.seconds === 0) {
          if (time.minutes === 0) {
            clearInterval(interval);
            setTime({ ...time, isFinished: true });
          } else {
            setTime({ ...time, minutes: time.minutes - 1, seconds: 59 });
          }
        }
      }, 1000);
    } else if (!time.isPlaying) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time]);

  const handleChangeTime = (t: ITime) => {
    setTime(t);
  };

  return (
    <div>
      <Timer time={time} setTime={handleChangeTime} />
      <Tasks tasks={tasks} onChange={handleChangeTasks} />
    </div>
  );
};

export default PomodoroContainer;
