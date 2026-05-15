import "./App.css"
import Produto from "./components/produto/produto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
<Route element={<Produto />} path="/"/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App