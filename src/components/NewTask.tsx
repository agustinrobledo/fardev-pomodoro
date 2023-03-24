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
            <label
                htmlFor="task"
                className="focus group relative flex h-full w-4/6 flex-col-reverse"
            >
                <input
                    type="text"
                    placeholder="Study English..."
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    className="w-full rounded-lg border-4 p-4 leading-9 text-dark-green placeholder:text-blue focus:outline-none"
                />
            </label>
            <button
                className="group relative inline-block w-1/5 rounded-lg  bg-slate-200"
                type="submit"
                onClick={(e) => handleSubmit(e, task)}
            >
                <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform rounded-lg bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 h-full w-full rounded-lg border-2 border-black bg-white group-hover:bg-white"></span>
                <span className="relative rounded-lg text-black group-hover:text-black">
                    <span className="font-semibold">add</span>
                </span>
            </button>
        </form>
    )
}

export default NewTask
