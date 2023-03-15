import { useState } from "react";

interface propTask {
  addTask: (t: string) => void;
}

const NewTask = ({ addTask }: propTask) => {
  const [task, setTask] = useState("");

  return (
    <div className="w-100 flex">
      <input
        type="text"
        placeholder="Make the bed"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        className="bg-light-green  w-4/5 p-4 rounded-lg text-dark-green placeholder:text-blue"
      />
      <button
        className="bg-blue p-4  w-1/5 rounded-lg"
        onClick={() => {
          addTask(task), setTask("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default NewTask;