import TaskForm from "./TaskForm"
import * as Accordion from "@radix-ui/react-accordion"

interface propsTask {
    addTask: (t: string) => void
}

const NewTask = ({ addTask }: propsTask) => {
    return (
        <div className="flex w-full justify-center">
            <Accordion.Root type="single">
                <Accordion.Item value="item-1">
                    <Accordion.Header className="flex justify-center">
                        <Accordion.Trigger value="item-1">
                            Add new task
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <TaskForm addTask={addTask} />
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </div>
    )
}

export default NewTask
