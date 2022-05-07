import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/inventory" element={<Inventory/>} />

        </Routes>
    </div>
  );
}

export default App;
