import Navbar from "./Navbar"
import Quote from "./Quote"
import TaskContainer from "./TaskContainer"

const TaskDetail = () => {
    return (
        <div className="h-screen bg-black">
            <Navbar />
            <Quote />
            <TaskContainer />
        </div>
    )
}

export default TaskDetail
