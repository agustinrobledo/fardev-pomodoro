import { useState } from "react"
import Sidebar from "./Sidebar"

const Navbar = () => {
    const [onShow, setOnShow] = useState(false)
    return (
        <>
            {onShow ? (
                <Sidebar />
            ) : (
                <div>
                    <div>
                        <h1>FARdev Pomodoro</h1>
                    </div>
                    <div>
                        <button onClick={() => setOnShow(true)}>/.</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
