export interface ITask {
    id: number
    name: string
    status: string
    initialTime: {
        minutes: string
        seconds: string
    }
}
export interface ITime {
    minutes: string
    seconds: string
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
