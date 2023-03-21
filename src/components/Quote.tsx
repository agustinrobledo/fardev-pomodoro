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
        <div>
            <p>{quote.text}</p>
            <p>{quote.author ? quote.author : null}</p>
        </div>
    )
}

export default Quote
