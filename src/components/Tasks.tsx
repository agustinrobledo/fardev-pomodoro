import NewTask from "./NewTask"
import { ITask } from "../types/tasks"
import Task from "./Task"
import { useRef } from "react"

interface propsTasks {
    tasks: ITask[]
    onChange: (tasks: ITask[]) => void
}

const Tasks = ({ tasks, onChange }: propsTasks) => {
    const tasksContainer = useRef<HTMLDivElement>(null)

    const addTask = (task: string) => {
        onChange([
            ...tasks,
            {
                id: tasks.length + 1,
                name: task,
                status: "todo",
                initialTime: { minutes: 25, seconds: 0 },
            },
        ])
    }

    const updateTask = (task: ITask) => {
        const editedTasks = tasks.map((t) => {
            if (t.id === task.id) {
                return task
            } else {
                return t
            }
        })
        onChange(editedTasks)
    }

    return (
        <div className="flex h-full flex-col items-center gap-11">
            {tasks.length ? (
                <div
                    ref={tasksContainer}
                    className="flex h-3/4 w-3/4 flex-nowrap content-center items-center gap-20 overflow-visible overflow-x-auto overflow-y-hidden  pl-20 md:grid md:h-3/4 md:w-3/4 md:grid-cols-2 md:justify-items-center md:gap-7 md:overflow-y-auto md:overflow-x-hidden md:pl-0"
                >
                    {tasks.map((t) => (
                        <Task key={t.id} task={t} onUpdate={updateTask} />
                    ))}
                </div>
            ) : (
                <div className="flex h-3/4 items-center">
                    <span>No hay tareas pendientes</span>
                </div>
            )}
            <NewTask addTask={addTask} />
        </div>
    )
}

export default Tasks
