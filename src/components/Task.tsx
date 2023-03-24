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
            // let hover = gsap.to(container.current, {
            //     scale: 1.1,
            //     duration: 0.5,
            //     paused: true,
            //     ease: "power1.inOut",
            // })
            // container.current.addEventListener("mouseenter", () => hover.play())
            // container.current.addEventListener("mouseleave", () =>
            //     hover.reverse()
            // )
            const ctx = gsap.context(() => {
                gsap.from(container.current, {
                    y: -100,
                    opacity: 0,
                    stagger: 0.5,
                })
            }, container)
            return () => ctx.revert()
        }
    }, [])

    return (
        <Link
            ref={container}
            to={`task/${task.id}`}
            className="group relative col-auto h-64 w-full flex-shrink-0 p-6 text-4xl"
        >
            <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform rounded-lg bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 h-full w-full rounded-lg border-2 border-black bg-white group-hover:bg-white"></span>
            <span className="relative flex h-full flex-col rounded-lg text-black group-hover:text-black">
                <span className="flex h-1/4 justify-end">x</span>
                <p className="h-3/4 truncate text-left font-medium">
                    {task.name}
                </p>
            </span>
        </Link>
    )
}

export default Task
