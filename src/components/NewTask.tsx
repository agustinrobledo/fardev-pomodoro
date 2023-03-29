import { useRef, useState } from "react"
import TaskForm from "./TaskForm"
import { IAddedTask } from "../types/tasks"

interface propsTask {
    addTask: (t: IAddedTask) => void
}

const NewTask = ({ addTask }: propsTask) => {
    const [showForm, setShowForm] = useState(true)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowForm(!showForm)
    }

    return (
        <div className="flex h-2/5 w-4/5 flex-col ">
            <button
                ref={buttonRef}
                className="rounded-lg bg-white p-2 text-black"
                onClick={handleClick}
            >
                Add new task
            </button>
            <TaskForm
                setOnShow={setShowForm}
                onShow={showForm}
                addTask={addTask}
            />
        </div>
    )
}

export default NewTask
