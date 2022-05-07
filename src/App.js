import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import auth from "./firebase.init";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  const [user] = useAuthState(auth);
  if(user){
    console.log(user);
  }
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
