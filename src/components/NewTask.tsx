import { useRef, useState } from "react"
import TaskForm from "./TaskForm"
import { IAddedTask } from "../types/tasks"

interface propsTask {
    addTask: (t: IAddedTask) => void
}

const NewTask = ({ addTask }: propsTask) => {
    const buttonRef = useRef<HTMLButtonElement>(null)

    return (
        <div className="flex h-2/5 w-4/5 flex-col ">
            <TaskForm addTask={addTask} />
        </div>
    )
}

export default NewTask
