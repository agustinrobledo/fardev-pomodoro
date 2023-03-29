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

export interface IAddedTask {
    initialTime: {
        minutes: string
        seconds: string
    }
    name: string
}
