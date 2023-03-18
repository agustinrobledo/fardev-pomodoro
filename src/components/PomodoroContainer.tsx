import { useEffect, useState } from "react";
import Tasks from "./Tasks";
import { ITask } from "../types/tasks";

const PomodoroContainer = () => {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const handleChange = (tasks: ITask[]) => {
    setTasks(tasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Tasks tasks={tasks} onChange={handleChange} />
    </div>
  );
};

export default PomodoroContainer;
