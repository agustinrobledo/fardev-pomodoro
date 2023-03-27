import { gsap } from "gsap"
import React, { useLayoutEffect, useRef, useState } from "react"

interface taskFormProps {
    addTask: (t: string) => void
}
const TaskForm = ({ addTask }: taskFormProps) => {
    const [task, setTask] = useState("")
    const formRef = useRef(null)
    const handleSubmit = (e: React.FormEvent, t: string) => {
        e.preventDefault()
        addTask(t)
        setTask("")
    }

    return (
        <form ref={formRef} className="flex w-full flex-col text-lg">
            <label htmlFor="task">
                <input
                    type="text"
                    placeholder="Study English..."
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    className="bg-transparent p-4 placeholder:text-white"
                />
            </label>
            <label>Time</label>
            <input
                type="number"
                name="minutes"
                placeholder="25"
                className="bg-transparent"
            />
            <input type="number" placeholder="25" name="seconds" />
            <button
                className="rounded-lg  bg-slate-200"
                type="submit"
                onClick={(e) => handleSubmit(e, task)}
            >
                add
            </button>
        </form>
    )
}

export default TaskForm
