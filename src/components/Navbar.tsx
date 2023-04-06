import { useState } from "react"
import Sidebar from "./Sidebar"

const Navbar = () => {
    const [onShow, setOnShow] = useState(false)
    return (
        <>
            {onShow ? (
                <Sidebar />
            ) : (
                <div className="flex h-14 justify-between border">
                    <div className="flex items-center justify-center p-4">
                        <h1>FARdev Pomodoro</h1>
                    </div>
                    <div className="flex w-10 items-center justify-center border">
                        <button onClick={() => setOnShow(true)}>/.</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
