import { gsap } from "gsap"
import React, { useLayoutEffect, useRef, useState } from "react"
import { IAddedTask } from "../types/tasks"

interface taskFormProps {
    addTask: (t: IAddedTask) => void
}
const TaskForm = ({ addTask }: taskFormProps) => {
    const [name, setName] = useState("")
    const [initialTime, setInitialTime] = useState({
        minutes: "25",
        seconds: "00",
    })
    const [error, setError] = useState({
        message: "",
    })
    const [onShow, setOnShow] = useState(false)

    const formRef = useRef(null)
    const inputNameRef = useRef<HTMLInputElement>(null)

    const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target

        setInitialTime({
            ...initialTime,
            [name]: Number(value) < 10 ? "0" + value : value,
        })
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!onShow) {
            gsap.fromTo(
                formRef.current,
                { y: -50, opacity: 0, display: "none" },
                { opacity: 1, y: 0, display: "block", duration: 0.3 }
            )
            setOnShow(true)
        } else {
            gsap.fromTo(
                formRef.current,
                { y: 0 },
                { y: -50, opacity: 0, display: "none", duration: 0.3 }
            )
            setTimeout(() => {
                setOnShow(false)
            }, 300)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (name.length > 0) {
            addTask({ name, initialTime })
            setOnShow(false)
            setName("")
            setError({ message: "" })
        } else {
            setError({ message: "This field is required" })
            return
        }
    }

    return (
        <>
            <button
                className="rounded-lg bg-white p-2 text-black"
                onClick={handleClick}
            >
                Add new task
            </button>
            <div ref={formRef}>
                {onShow ? (
                    <form className="form flex w-full flex-col text-lg">
                        <label htmlFor="task" className="flex flex-col">
                            <input
                                ref={inputNameRef}
                                type="text"
                                autoFocus
                                placeholder="Study English..."
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="bg-transparent p-4 placeholder:text-white focus:outline-none"
                            />
                            {error.message.length ? (
                                <span className="pl-4 pb-6 text-sm text-red">
                                    {error.message}
                                </span>
                            ) : null}
                        </label>
                        <label className="pl-4">Time</label>
                        <div className="flex items-center justify-center">
                            <input
                                type="number"
                                name="minutes"
                                placeholder="25"
                                max={59}
                                min={1}
                                onChange={handleChangeTime}
                                value={initialTime.minutes}
                                className="bg-transparent p-6 text-center text-xl placeholder:text-white focus:outline-none"
                            />
                            <span>:</span>
                            <input
                                type="number"
                                placeholder="00"
                                name="seconds"
                                max={59}
                                min={0}
                                onChange={handleChangeTime}
                                value={initialTime.seconds}
                                className="bg-transparent  p-6 text-center text-xl placeholder:text-white focus:outline-none"
                            />
                        </div>
                        <button
                            className="rounded-lg bg-white py-2 text-center text-lg text-black"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Add task
                        </button>
                    </form>
                ) : null}
            </div>
        </>
    )
}

export default TaskForm
