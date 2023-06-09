import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Projects from "./Pages/ProjectsPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>

      </div>
    </>
  );
}

export default App;
