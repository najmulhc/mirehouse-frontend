import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import auth from "./firebase.init";
import AddItem from "./Pages/AddItem/AddItem";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RouteProtector from "./Pages/Shared/RouteProtector/RouteProtector";
import { Toaster } from "react-hot-toast";
import MyItems from "./Pages/MyItems/MyItems";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/NotFound/NotFound";
function App() {
  const [user] = useAuthState(auth);
  if (user) {
    console.log(user);
  }
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/inventory"
          element={
            <RouteProtector>
              <Inventory />
            </RouteProtector>
          }
        />
        <Route path="/blog" element={<Blog/> } />
        <Route path="*" element={<NotFound/> } />
        <Route path="/inventory/:itemId" element={
          <RouteProtector>
            <SingleProduct/>
          </RouteProtector>
        }/>
        <Route
          path="/items/add"
          element={
            <RouteProtector>
              <AddItem />
            </RouteProtector>
          }
        /> 
        <Route path="/myItems" element={
          <RouteProtector>
            <MyItems/>
          </RouteProtector>
        } />
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
