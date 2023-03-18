export interface ITask {
  id: number;
  name: string;
  status: "complete" | "todo" | "doing";
}
