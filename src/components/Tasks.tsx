import NewTask from "./NewTask";
import { ITask } from "../types/tasks";
import { useEffect } from "react";
import Task from "./Task";

interface propsTasks {
  tasks: ITask[];
  onChange: (tasks: ITask[]) => void;
}

const Tasks = ({ tasks, onChange }: propsTasks) => {
  const addTask = (task: string) => {
    onChange([...tasks, { id: tasks.length, name: task, status: "todo" }]);
  };

  const updateTask = (task: ITask) => {
    const editedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          task,
        };
      } else {
        return t;
      }
    });
    onChange(editedTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="flex flex-col gap-2 mt-4">
      <NewTask addTask={addTask} />
      {tasks.length ? (
        tasks.map((t) => <Task key={t.id} task={t} onChange={updateTask} />)
      ) : (
        <div>No hay tareas pendientes </div>
      )}
    </div>
  );
};

export default Tasks;
