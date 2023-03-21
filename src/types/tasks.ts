export interface ITask {
    id: number
    name: string
    status: string
    initialTime: {
        minutes: number
        seconds: number
    }
}
export interface ITime {
    minutes: number
    seconds: number
    isPlaying: boolean
    isFinished: boolean
}
