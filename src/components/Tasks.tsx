import NewTask from "./NewTask"
import { ITask } from "../types/tasks"
import Task from "./Task"
import { useRef } from "react"

interface propsTasks {
    tasks: ITask[]
    onChange: (tasks: ITask[]) => void
}

const Tasks = ({ tasks, onChange }: propsTasks) => {
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
        <div className="flex h-full flex-col items-center gap-4">
            {tasks.length ? (
                <div className="flex h-3/5 w-4/5 flex-col items-center gap-2 overflow-auto">
                    {tasks.map((t) => (
                        <Task key={t.id} task={t} onUpdate={updateTask} />
                    ))}
                </div>
            ) : (
                <div className="flex h-3/5 items-center">
                    <span>No hay tareas pendientes</span>
                </div>
            )}
            <NewTask addTask={addTask} />
        </div>
    )
}

export default Tasks
