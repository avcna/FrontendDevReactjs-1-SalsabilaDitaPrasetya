import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/detail/:id" exact element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
