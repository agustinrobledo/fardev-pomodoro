interface buttonProps {
    onClick: () => void
    children: React.ReactNode
    isActive: boolean
}
const Button = ({ onClick, children, isActive }: buttonProps) => {
    return (
        <button
            onClick={onClick}
            className="group relative inline-block p-6 text-4xl font-medium"
        >
            <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform rounded-full bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 h-full w-full rounded-full border-2 border-black bg-white group-hover:border-white group-hover:bg-black"></span>
            <span className="relative rounded-full text-black group-hover:text-white">
                {children}
            </span>
        </button>
    )
}

export default Button
