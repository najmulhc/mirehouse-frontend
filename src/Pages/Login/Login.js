import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Bars } from "react-loader-spinner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import login from "../../img/login.png";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
 
  useEffect(() => {
    if (user) {
      console.log(user);
      const {email} = user.user;
      const userId = {email}
      console.log(userId);
      fetch("https://localhost:5000/login", {
        method:"POST",
        headers:{
          "content-type": "application/json"
        }, 
        body: JSON.stringify(userId)
      })
      .then(res => res.json()) 
      .then(data =>{ 
        console.log(data);
         localStorage.setItem("key", data.accesToken)
      })
       
      toast.success('Login successfull');
      if(location.state?.from){
        navigate(location.state.from)
      }
    }
  },[user])
  if(loading){
    return <div className="w-full h-[660px] flex items-center justify-center"><Bars
    color="#F9AA4B"
    height={110}
    width={110}
    ariaLabel="three-circles-rotating"
  /></div>
  }
  if (error) {
    toast.error(error.code);
  }
  const test = e => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
   
  }
  return (
    <section className="md:grid md:grid-cols-2  w-full">
      <div className="flex justify-center items-center py-[120px] bg-komola">
        <div className="w-[400px] bg-white rounded-md shadow-md p-8">
          <form  >
            <h1 className="text-kala text-4xl font-bold text-center mb-10">
              Login
            </h1>
            <label htmlFor="email">
              <h2 className="m-0 p-0 font-semibold text-kala">
                Enter email <span className="text-red">*</span>
              </h2>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="border-b-2 w-full p-2 text-lg border-b-komola "
                onBlur={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label htmlFor="password">
              <h2 className="mt-6 p-0 font-semibold text-kala">
                Enter Password <span className="text-red">*</span>
              </h2>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="border-b-2 w-full p-2 text-lg border-b-komola"
                onBlur={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <p className="text-sm mt-2 text-center  text-kala ">
              New here?{" "}
              <Link to="/register" className="text-komola">
                Register Here
              </Link>
            </p>

            <button
            onClick={test}
              className="flex w-full justify-center"
              type="submit"
            > <span className="text-white  rounded-full  font-bold py-2 px-20  hover:text-komola bg-komola border hover:bg-white border-komola  my-2 mx-auto ">Login</span>
          
            </button>
            <GoogleLogin />
          </form>
        </div>
      </div>
      <div className="bg-orange-600 hidden md:flex justify-center items-center">
        <img src={login} alt="" />
      </div>
    </section>
  );
};

export default Login;
