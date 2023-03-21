import { useEffect, useState } from "react"
import { ITask } from "../types/tasks"

const useGetTask = (id: number) => {
    const [task, setTask] = useState<ITask | null>({
        id: 0,
        name: "",
        status: "",
    })
    const [error, setError] = useState({
        message: "",
    })

    useEffect(() => {
        const getTask = () => {
            const storedTasks = localStorage.getItem("tasks")
            const tasks: ITask[] = storedTasks ? JSON.parse(storedTasks) : []
            if (tasks.length) {
                const taskIndex = tasks.findIndex((t) => t.id === id)
                taskIndex !== -1
                    ? setTask(tasks[taskIndex])
                    : setError({ message: `Task with id:${id} doesn't exists` })
            } else {
                setError({ message: "You doesn't add tasks!" })
            }
        }
        getTask()
    }, [])
    return { error, task }
}

export default useGetTask
