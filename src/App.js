import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tournage from "./pages/Tournage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tournage/:id" element={<Tournage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
