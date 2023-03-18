import { useEffect, useState } from "react";
import Tasks from "./Tasks";

interface typeTask {
  id: number;
  name: string;
  status: "complete" | "todo" | "doing";
}

const PomodoroContainer = () => {
  const [tasks, setTasks] = useState<typeTask[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  useEffect(() => {}, []);
  return (
    <div>
      <Tasks tasks={tasks} onChange={setTasks} />
    </div>
  );
};

export default PomodoroContainer;
