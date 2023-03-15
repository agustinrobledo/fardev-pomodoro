import { useState } from "react";
import NewTask from "./NewTask";

interface typeTask {
  id: number;
  name: string;
  status: "complete" | "todo" | "doing";
}

const Tasks = () => {
  const [tasks, setTasks] = useState<typeTask[]>(tasksExample);

  const addTask = (task: string) => {
    setTasks([...tasks, { id: tasks.length, name: task, status: "todo" }]);
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <NewTask addTask={addTask} />
      {tasks.length &&
        tasks.map((t) => (
          <div
            key={t.id}
            className="flex justify-between bg-light-green p-4 rounded-lg text-dark-green"
          >
            <span>{t.name}</span>
            <span>{t.status}</span>
          </div>
        ))}
    </div>
  );
};

export default Tasks;

const tasksExample: typeTask[] = [
  {
    id: 1,
    name: "Estudiar",
    status: "doing",
  },
  {
    id: 2,
    name: "Pushear a git",
    status: "todo",
  },
  {
    id: 3,
    name: "Estudiar UX",
    status: "todo",
  },
];
