import React, { useState } from "react";
import { ITask } from "../types/tasks";

interface propsTask {
  task: {
    id: number;
    name: string;
    status: string;
  };
  onUpdate: (t: ITask) => void;
}

interface statusOption {
  id: number;
  label: "COMPLETE" | "TODO" | "DOING";
  value: string;
}

const Task = ({ task, onUpdate }: propsTask) => {
  const [statusOptions, setStatusOptions] = useState<statusOption[]>([
    { id: 1, label: "COMPLETE", value: "complete" },
    { id: 2, label: "TODO", value: "todo" },
    { id: 3, label: "DOING", value: "doing" },
  ]);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onUpdate({ ...task, status: value });
  };

  return (
    <div className="flex justify-between bg-light-green p-4 rounded-lg text-dark-green">
      <span>{task.name}</span>
      <select name="status" value={task.status} onChange={handleChange}>
        {statusOptions.map((option) => (
          <option value={option.value} key={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Task;
