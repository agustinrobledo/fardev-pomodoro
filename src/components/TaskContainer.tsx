import { useParams } from "react-router-dom"
import useGetTask from "../hooks/useGetTask"

const TaskContainer = () => {
    const { taskId } = useParams()
    const { error, task } = useGetTask(Number(taskId))

    return (
        <>
            {error.message.length ? (
                <div>{error.message}</div>
            ) : (
                <div>{task?.name}</div>
            )}
        </>
    )
}

export default TaskContainer
