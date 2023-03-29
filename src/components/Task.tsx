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

    const container = useRef<HTMLAnchorElement>(null)

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
        <Link
            ref={container}
            to={`task/${task.id}`}
            className="task flex w-4/5 justify-between rounded-lg bg-white p-4 text-black"
        >
            <p className="">{task.name}</p>
            <p>
                {task.initialTime.minutes}:{task.initialTime.seconds}
            </p>
        </Link>
    )
}

export default Task
