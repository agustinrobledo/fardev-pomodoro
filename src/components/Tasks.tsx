import NewTask from "./NewTask"
import { IAddedTask, ITask } from "../types/tasks"
import Task from "./Task"

interface propsTasks {
    tasks: ITask[]
    onChange: (tasks: ITask[]) => void
}

const Tasks = ({ tasks, onChange }: propsTasks) => {
    //TODO: Generates tasks with UUID to prevent errors when tasks update
    const addTask = (task: IAddedTask) => {
        onChange([
            ...tasks,
            {
                id: tasks.length + 1,
                status: "todo",
                name: task.name,
                initialTime: task.initialTime,
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

    const deleteTask = (task: ITask) => {
        const updatedTasks = tasks.filter((t) => t.id !== task.id)
        onChange(updatedTasks)
    }

    return (
        <div className="flex h-full flex-col items-center gap-4 py-6">
            {tasks.length ? (
                <div className="flex h-3/5 w-full flex-col items-center gap-2 overflow-auto">
                    {tasks.map((t) => (
                        <Task
                            key={t.id}
                            task={t}
                            onUpdate={updateTask}
                            onDelete={deleteTask}
                        />
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
