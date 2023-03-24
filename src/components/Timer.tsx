import { ITime } from "../types/tasks"
import Button from "./Button"

interface timerProps {
    time: {
        minutes: number
        seconds: number
        isPlaying: boolean
        isFinished: boolean
    }
    setTime: (t: ITime) => void
}

const Timer = ({ time, setTime }: timerProps) => {
    const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setTime({ ...time, [name]: Number(value) })
    }

    const onReset = () => {
        setTime({
            minutes: time.minutes,
            seconds: time.seconds,
            isFinished: false,
            isPlaying: true,
        })
    }

    const onPlay = () => {
        setTime({
            ...time,
            isPlaying: true,
        })
    }

    const onPause = () => {
        setTime({
            ...time,
            isPlaying: false,
        })
    }

    return (
        <div className="w-100 flex flex-col items-center justify-center gap-6 p-4">
            <div className="flex items-center rounded-full border-2 bg-white text-5xl">
                <input
                    type="number"
                    name="minutes"
                    value={time.minutes}
                    min={0}
                    max={59}
                    className="bg-transparent py-6 text-center focus:outline-none"
                    onChange={handleChangeTime}
                />
                <span>:</span>
                <input
                    type="number"
                    name="seconds"
                    value={time.seconds}
                    min={0}
                    max={59}
                    className="bg-transparent py-6 text-center focus:outline-none"
                    onChange={handleChangeTime}
                />
            </div>
            <div className="w-70 flex gap-3 text-2xl">
                <Button onClick={onPlay}>
                    <svg
                        className="h-5 w-5"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </Button>
                <Button onClick={onPause}>
                    <svg
                        className="h-5 w-5"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </Button>
                <Button onClick={onReset}>
                    <svg
                        className="h-5 w-5"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </Button>
            </div>
        </div>
    )
}

export default Timer
