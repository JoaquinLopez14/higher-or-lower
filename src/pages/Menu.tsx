import { Link } from "react-router-dom"

function Menu() {
    return (
        <div className="w-screen h-screen bg-blue-300 flex items-center justify-center">
            <h1>Seleccione su Juego</h1>
            <Link to="/game?type=car" className="m-10 p-4 bg-black text-white"> Car Game</Link>
            <Link to="/game?type=movie" className="m-10 p-4 bg-black text-white"> Movie Game</Link>
        </div>
    )
}

export default Menu