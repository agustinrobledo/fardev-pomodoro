import { gsap } from "gsap"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"

interface taskFormProps {
    addTask: (t: string) => void
    onShow: boolean
}
const TaskForm = ({ addTask, onShow }: taskFormProps) => {
    const [task, setTask] = useState("")
    const formRef = useRef(null)

    useLayoutEffect(() => {
        if (formRef.current) {
            onShow
                ? gsap.fromTo(
                      formRef.current,
                      { y: -50, opacity: 0, display: "none" },
                      { opacity: 1, y: 0, display: "block", duration: 0.3 }
                  )
                : gsap.fromTo(
                      formRef.current,
                      { y: 0 },
                      { y: -50, opacity: 0, display: "none", duration: 0.3 }
                  )
        }
    }, [onShow])

    const handleSubmit = (e: React.FormEvent, t: string) => {
        e.preventDefault()
        addTask(t)
        setTask("")
    }

    return (
        <div ref={formRef}>
            <form className="form flex w-full flex-col text-lg">
                <label htmlFor="task">
                    <input
                        type="text"
                        placeholder="Study English..."
                        onChange={(e) => setTask(e.target.value)}
                        value={task}
                        className="bg-transparent p-4 placeholder:text-white focus:outline-none"
                    />
                </label>
                <label className="pl-4">Time</label>
                <div className="flex items-center justify-center">
                    <input
                        type="number"
                        name="minutes"
                        placeholder="25"
                        max={59}
                        min={1}
                        className="bg-transparent p-6 text-xl placeholder:text-white focus:outline-none"
                    />
                    <span>:</span>
                    <input
                        type="number"
                        placeholder="00"
                        name="seconds"
                        max={59}
                        min={0}
                        className="bg-transparent p-6 text-xl placeholder:text-white focus:outline-none"
                    />
                </div>
                <button
                    className="rounded-lg bg-white py-2 text-lg text-black"
                    type="submit"
                    onClick={(e) => handleSubmit(e, task)}
                >
                    Add task
                </button>
            </form>
        </div>
    )
}

export default TaskForm
