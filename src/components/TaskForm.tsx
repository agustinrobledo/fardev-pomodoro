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
    // useLayoutEffect(() => {
    //     if (formRef.current) {
    //         const ctx = gsap.context(() => {
    //             gsap.from(formRef.current, { opacity: 0 })
    //         }, formRef)
    //         return () => ctx.revert()
    //     }
    // }, [])

    return (
        <form
            ref={formRef}
            className="flex h-40 w-full flex-col items-center justify-center gap-4 bg-red align-middle"
        >
            <label htmlFor="task" className="w-4/6 ">
                <input
                    type="text"
                    placeholder="Study English..."
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    className="w-full rounded-lg border-4 p-4 leading-9 text-dark-green placeholder:text-blue focus:outline-none"
                />
            </label>
            <div className="flex ">
                <label>Time</label>
                <input type="number" name="minutes" />
                <input type="number" name="seconds" />
                <button
                    className="group relative inline-block w-1/5 rounded-lg  bg-slate-200"
                    type="submit"
                    onClick={(e) => handleSubmit(e, task)}
                >
                    <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform rounded-lg bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 h-full w-full rounded-lg border-2 border-black bg-white group-hover:bg-white"></span>
                    <span className="relative rounded-lg text-black group-hover:text-black">
                        <span className="font-semibold">add</span>
                    </span>
                </button>
            </div>
        </form>
    )
}

export default TaskForm
