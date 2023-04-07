import { useState } from "react"
import Sidebar from "./Sidebar"

const Navbar = () => {
    const [onShow, setOnShow] = useState<boolean>(false)

    const handleShow = () => {
        setOnShow(!onShow)
    }
    return (
        <>
            {onShow ? (
                <Sidebar onShow={onShow} setOnShow={handleShow} />
            ) : (
                <div className="flex h-14 justify-between border">
                    <div className="flex items-center justify-center p-4">
                        <h1>FARdev Pomodoro</h1>
                    </div>
                    <div className="flex w-10 items-center justify-center border">
                        <button onClick={handleShow}>/.</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
