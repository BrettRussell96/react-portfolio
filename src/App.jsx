import { Route, Routes } from "react-router-dom";
import Template from "./pages/_Template";
import './App.css'
import HomePage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />

      </Route>
    </Routes>
  )
}

export default App
