export interface ITask {
  id: number;
  name: string;
  status: string;
}
export interface ITime {
  minutes: number;
  seconds: number;
  isPlaying: boolean;
  isFinished: boolean;
}
