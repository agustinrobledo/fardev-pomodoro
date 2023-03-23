import { useEffect, useMemo, useState } from "react"
import Tasks from "./Tasks"
import { ITask } from "../types/tasks"

const PomodoroContainer = () => {
    const [tasks, setTasks] = useState<ITask[]>(() => {
        const storedTasks = localStorage.getItem("tasks")
        return storedTasks ? JSON.parse(storedTasks) : []
    })

    const handleChangeTasks = (tasks: ITask[]) => {
        setTasks(tasks)
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    return (
        <div className="h-full">
            <Tasks tasks={tasks} onChange={handleChangeTasks} />
        </div>
    )
}

export default PomodoroContainer
