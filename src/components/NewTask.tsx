import { useLayoutEffect, useRef } from "react"
import TaskForm from "./TaskForm"
import * as Accordion from "@radix-ui/react-accordion"
import { gsap } from "gsap"

interface propsTask {
    addTask: (t: string) => void
}

const NewTask = ({ addTask }: propsTask) => {
    return (
        <div className="flex max-h-full w-3/4 justify-center">
            <Accordion.Root className="w-full" type="single" collapsible>
                <Accordion.Item value="item-1">
                    <Accordion.Header className="flex justify-center">
                        <Accordion.Trigger value="item-1">
                            Add new task
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="max-h-36 overflow-hidden rdx-state-closed:animate-slideUp rdx-state-open:animate-slideDown">
                        <TaskForm addTask={addTask} />
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </div>
    )
}

export default NewTask
