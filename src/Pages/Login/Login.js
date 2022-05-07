import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
const navigate = useNavigate()
  const login = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(email, password);
  }
  if(user){
      navigate("/")
  }
    return (
        <section className="md:grid md:grid-cols-2  w-full bg-red-500">
        <div className="bg-blue-600  flex justify-center items-center py-[120px]">
        <div className="w-2/3 bg-white shadow-md ">
            <form action="" className="my-4" onSubmit={login}>
              <h1 className="text-3xl text-center font-bold text-green-600 mb-2">
                Login
              </h1>
               
              <input
                type="email"
                placeholder="Email Address"
                className="w-5/6 py-1 px-2 text-xl my-2  border mx-2 border-green-500"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-5/6 py-1 px-2 text-xl my-2  border mx-2 border-green-500"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
               
              <p className="text-sm   text-green-700 ">New here? <Link to="/register">Register Here</Link></p>
              <button
                className="w-5/6  bg-green-600 text-white py-1 text-xl"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="bg-orange-600">
         
        </div>
      </section>
    );
};

export default Login;