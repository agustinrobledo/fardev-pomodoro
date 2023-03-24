import { useEffect, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"

interface IQuote {
    text: string
    author: string | null
}

const Quote = () => {
    const [quote, setQuote] = useState<IQuote>({
        text: "",
        author: "",
    })
    const [isLoading, setIsLoading] = useState(false)

    const container = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (container.current !== null) {
            const ctx = gsap.context(() => {
                gsap.from(container.current, { y: -100 })
            }, container)
            return () => ctx.revert()
        }
    }, [quote])

    useEffect(() => {
        const getQuote = async () => {
            try {
                setIsLoading(true)

                const res = await fetch("https://type.fit/api/quotes")
                const q: IQuote[] = await res.json()
                const randomQuote = q[Math.floor(Math.random() * q.length)]

                setQuote(randomQuote)
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }
        getQuote()
    }, [])
    return (
        <>
            {quote.text ? (
                <div
                    ref={container}
                    className="flex h-1/4 flex-col gap-2 bg-green-600 p-10 text-2xl text-white"
                >
                    <p>{quote.text}</p>
                    <p>{quote.author ? `- ${quote.author}.` : null}</p>
                </div>
            ) : null}
        </>
    )
}

export default Quote
