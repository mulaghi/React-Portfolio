import NavBar from "./Navbar";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from './pages/Project';

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/project" element={ <Project/>} />
        <Route path="/contact" element={ <Contact/>} />
      </Routes>
    </div>
    </>
  )
}

export default App;
