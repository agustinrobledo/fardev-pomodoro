import React, { useLayoutEffect, useRef, useState } from "react"
import { ITask } from "../types/tasks"
import { Link } from "react-router-dom"
import { gsap } from "gsap"

interface propsTask {
    task: {
        id: number
        name: string
        status: string
        initialTime: {
            minutes: string
            seconds: string
        }
    }
    onUpdate: (t: ITask) => void
    onDelete: (t: ITask) => void
}

interface statusOption {
    id: number
    label: "COMPLETE" | "TODO" | "DOING"
    value: string
}

//TODO: Make an alert to delete a task!!!

const Task = ({ task, onUpdate, onDelete }: propsTask) => {
    const [statusOptions, setStatusOptions] = useState<statusOption[]>([
        { id: 1, label: "COMPLETE", value: "complete" },
        { id: 2, label: "TODO", value: "todo" },
        { id: 3, label: "DOING", value: "doing" },
    ])

    const container = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (container.current !== null) {
            const ctx = gsap.context(() => {
                gsap.from(container.current, {
                    y: -100,
                    duration: 0.5,
                    opacity: 0,
                    ease: "none",
                })
            }, container)
            return () => ctx.revert()
        }
    }, [])

    return (
        <div
            ref={container}
            className="flex w-4/5 items-center justify-between rounded-lg bg-white p-3 text-black"
        >
            <Link to={`task/${task.id}`}>
                <p className="">{task.name}</p>
            </Link>
            <div className="flex items-center gap-4">
                <p>
                    {task.initialTime.minutes}:{task.initialTime.seconds}
                </p>
                <button onClick={() => onDelete(task)}>
                    <strong>X</strong>
                </button>
            </div>
        </div>
    )
}

export default Task
