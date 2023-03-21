import { useState } from "react"

interface propsTask {
    addTask: (t: string) => void
}

const NewTask = ({ addTask }: propsTask) => {
    const [task, setTask] = useState("")

    const handleSubmit = (e: React.FormEvent, t: string) => {
        e.preventDefault()
        addTask(t)
        setTask("")
    }

    return (
        <form className="flex w-3/4 justify-between">
            <input
                type="text"
                placeholder="Make the bed"
                onChange={(e) => setTask(e.target.value)}
                value={task}
                className="w-4/6 rounded-lg border-2 bg-slate-100 p-4 text-dark-green placeholder:text-blue"
            />
            <button
                className="w-1/5 rounded-lg  bg-slate-200"
                type="submit"
                onClick={(e) => handleSubmit(e, task)}
            >
                Add
            </button>
        </form>
    )
}

export default NewTask
