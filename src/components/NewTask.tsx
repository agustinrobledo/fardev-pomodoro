import { useLayoutEffect, useRef, useState } from "react"
import TaskForm from "./TaskForm"
import * as Accordion from "@radix-ui/react-accordion"
import { gsap } from "gsap"

interface propsTask {
    addTask: (t: string) => void
}

const NewTask = ({ addTask }: propsTask) => {
    const [showForm, setShowForm] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowForm(!showForm)
        // if (showForm) {
        //     gsap.from(e.currentTarget, {
        //         y: -100,
        //     })

        //     setShowForm(!showForm)
        // } else {
        //     gsap.from(e.currentTarget, {
        //         y: 100,
        //     })
        //     setShowForm(!showForm)
        // }
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
            <TaskForm onShow={showForm} addTask={addTask} />
        </div>
    )
}

export default NewTask
