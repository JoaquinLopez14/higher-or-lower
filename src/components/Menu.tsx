import { Link } from "react-router-dom"

function Menu() {
    return (
        <div className="w-screen h-screen bg-blue-300 flex items-center justify-center">
            <h1>hola desde home</h1>
            <Link to="/game" className="m-10 p-4 bg-black text-white"> Ir al juego</Link>
        </div>
    )
}

export default Menu