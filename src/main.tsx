import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import App from "./App"
import TaskDetail from "./components/TaskDetail"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="/task/:taskId" element={<TaskDetail />} />
                <Route path="/*" element={<h1>This route doesn't exists</h1>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
