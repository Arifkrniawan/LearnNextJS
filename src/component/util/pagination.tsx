export default function Pagination() {
    return (
        <div className="flex justify-center items-center px-2 py-4 text-color-primary">
            <button className="transition-all hover:text-color-accent mr-4">Prev</button>
            <p className="mr-4">1</p>
            <button className="transition-all hover:text-color-accent">Next</button>
        </div>
    )
}