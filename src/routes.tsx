import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import App from "./App"
// import Task from "./components/Task"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            {/* <Route path="task/:id" element={<Task />} /> */}
        </Route>
    )
)

export default router
