import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Menu from "./pages/Menu"
import Game from "./pages/Game"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  )
}

export default App
