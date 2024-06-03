import { Route, Routes } from "react-router-dom";
import Template from "./pages/_Template";
import './App.css'
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Skills from "./pages/Skills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />

      </Route>
    </Routes>
  )
}

export default App
