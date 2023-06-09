import { useParams } from "react-router-dom"
import useGetTask from "../hooks/useGetTask"
import Timer from "./Timer"
import { ITime } from "../types/tasks"
import { useEffect, useState } from "react"

const TaskContainer = () => {
    const { taskId } = useParams()
    const { error, task } = useGetTask(Number(taskId))

    const [time, setTime] = useState<ITime>({
        minutes: "0",
        seconds: "0",
        isPlaying: false,
        isFinished: false,
    })

    useEffect(() => {
        if (task) {
            const { minutes, seconds } = task.initialTime
            setTime({ minutes, seconds, isPlaying: false, isFinished: false })
        }
    }, [task])

    useEffect(() => {
        let interval: number | undefined
        if (time.isPlaying) {
            interval = window.setInterval(() => {
                if (Number(time.seconds) > 0) {
                    setTime({
                        ...time,
                        seconds: (Number(time.seconds) - 1).toString(),
                    })
                }
                if (Number(time.seconds) === 0) {
                    if (Number(time.minutes) === 0) {
                        clearInterval(interval)
                        setTime({ ...time, isFinished: true })
                    } else {
                        setTime({
                            ...time,
                            minutes: (Number(time.minutes) - 1).toString(),
                            seconds: "59",
                        })
                    }
                }
            }, 1000)
        } else if (!time.isPlaying) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [time])

    const handleChangeTime = (t: ITime) => {
        setTime(t)
    }

    return (
        <>
            {error.message.length && task ? (
                <div>{error.message}</div>
            ) : (
                <div className="flex h-3/4 flex-col items-center justify-end align-bottom text-4xl">
                    <div>{task?.name}</div>
                    <Timer
                        time={time}
                        setTime={handleChangeTime}
                        initialTime={task!.initialTime}
                    />
                </div>
            )}
        </>
    )
}

export default TaskContainer
