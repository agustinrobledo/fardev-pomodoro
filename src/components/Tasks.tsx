import NewTask from "./NewTask"
import { ITask } from "../types/tasks"
import Task from "./Task"

interface propsTasks {
    tasks: ITask[]
    onChange: (tasks: ITask[]) => void
}

const Tasks = ({ tasks, onChange }: propsTasks) => {
    const addTask = (task: string) => {
        onChange([...tasks, { id: tasks.length, name: task, status: "todo" }])
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
        <div className="mt-4 flex flex-col  items-center gap-2">
            <NewTask addTask={addTask} />
            {tasks.length ? (
                tasks.map((t) => (
                    <Task key={t.id} task={t} onUpdate={updateTask} />
                ))
            ) : (
                <div>No hay tareas pendientes </div>
            )}
        </div>
    )
}

export default Tasks
