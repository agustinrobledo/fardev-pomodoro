import { useEffect, useState } from "react"

interface IQuote {
    text: string
    author: string | null
}

const Quote = () => {
    const [quote, setQuote] = useState<IQuote>({
        text: "",
        author: "",
    })
    console.log(import.meta.env.VITE_API_KEY)

    const [error, setError] = useState({
        message: "",
    })

    useEffect(() => {
        const getQuote = async () => {
            try {
                const res = await fetch("https://type.fit/api/quotes")
                const q: IQuote[] = await res.json()
                const randomQuote = q[Math.floor(Math.random() * q.length)]
                console.log(randomQuote)
                setQuote(randomQuote)
            } catch (e) {
                console.log(e)
            }
        }
        getQuote()
    }, [])
    return (
        <div className="flex flex-col gap-2 bg-green-500 p-10 text-2xl text-white">
            <p>{quote.text}</p>
            <p>{quote.author ? `- ${quote.author}.` : null}</p>
        </div>
    )
}

export default Quote
