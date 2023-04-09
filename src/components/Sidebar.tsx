import React, { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"

interface sidebarProps {
    setOnShow: () => void
}

const Sidebar = ({ setOnShow }: sidebarProps) => {
    const linksRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (linksRef.current) {
            let ctx = gsap.context(() => {
                gsap.from(".link", {
                    y: -100,
                    stagger: 0.3,
                    opacity: 0,
                })
            }, linksRef)
            return () => ctx.revert()
        }
    }, [])
    return (
        <div className="absolute z-10 flex h-screen w-screen flex-col bg-black">
            <div className="flex h-14 justify-between border">
                <div className="flex items-center justify-center p-4">
                    <a href="/">
                        <h1>FARdev Pomodoro</h1>
                    </a>
                </div>
                <div className="flex w-10 items-center justify-center border">
                    <button onClick={setOnShow}>/.</button>
                </div>
            </div>
            <div
                ref={linksRef}
                className="flex h-5/6 flex-col items-center justify-center gap-6 text-4xl"
            >
                <a
                    className="link"
                    target="_blank"
                    href="https://github.com/agustinrobledo"
                >
                    github
                </a>
                <a
                    className="link"
                    target="_blank"
                    href="https://twitter.com/_FARdev"
                >
                    twitter
                </a>
                <a
                    className="link"
                    target="_blank"
                    href="https://agustinrobledo.com"
                >
                    portfolio
                </a>
            </div>
        </div>
    )
}

export default Sidebar
