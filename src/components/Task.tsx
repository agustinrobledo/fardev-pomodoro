import React, { useState } from "react"
import { ITask } from "../types/tasks"
import { Link } from "react-router-dom"

interface propsTask {
    task: {
        id: number
        name: string
        status: string
        initialTime: {
            minutes: number
            seconds: number
        }
    }
    onUpdate: (t: ITask) => void
}

interface statusOption {
    id: number
    label: "COMPLETE" | "TODO" | "DOING"
    value: string
}

const Task = ({ task, onUpdate }: propsTask) => {
    const [statusOptions, setStatusOptions] = useState<statusOption[]>([
        { id: 1, label: "COMPLETE", value: "complete" },
        { id: 2, label: "TODO", value: "todo" },
        { id: 3, label: "DOING", value: "doing" },
    ])
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        onUpdate({ ...task, status: value })
    }

    return (
        <div className="flex h-40 w-40 flex-col justify-between rounded-lg border-2 border-black bg-slate-100  p-4 font-semibold text-dark-green duration-100 ease-in hover:scale-105">
            <span className="font-semibold">{task.name}</span>
            {/* <select
                className="bg-transparent focus:outline-none active:border-none"
                name="status"
                value={task.status}
                onChange={handleChange}
            >
                {statusOptions.map((option) => (
                    <option value={option.value} key={option.id}>
                        {option.label}
                    </option>
                ))}
            </select> */}
            <Link to={`task/${task.id}`}>
                <div className="flex justify-end">
                    <div className="h-16 w-16 rounded-full bg-black"></div>
                </div>
            </Link>
        </div>
    )
}

export default Task
