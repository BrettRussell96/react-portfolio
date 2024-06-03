import { Route, Routes } from "react-router-dom";
import Template from "./pages/_Template";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >

      </Route>
    </Routes>
  )
}

export default App
