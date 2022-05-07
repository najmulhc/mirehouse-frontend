import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [updateProfile, displayName] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, regError] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const updateUserName = async () => {
    
    
  };
  const register = async(e) => {
    await e.preventDefault();
    if (password === confirm) {
      await createUserWithEmailAndPassword(email, password);
      if (user) {
        await updateProfile({ displayName: name });
        await navigate("/");
      }
    } else {
      setError("passwords did not matched");
    }
  };

 
  return (
    <section className="md:grid md:grid-cols-2  w-full bg-red-500">
      <div className="bg-blue-600"></div>
      <div className="bg-orange-600 flex justify-center items-center py-[120px]">
        <div className="w-2/3 bg-white shadow-md ">
          <form action="" className="my-4" onSubmit={register}>
            <h1 className="text-3xl text-center font-bold text-green-600 mb-2">
              Register
            </h1>
            <input
              type="text"
              placeholder="Your Name"
              className="w-5/6 py-1 px-2 text-xl my-2  border mx-2 border-green-500"
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-5/6 py-1 px-2 text-xl  my-2 border mx-2 border-green-500"
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
            <p className="text-sm   text-red-700 ">{error}</p>
            <p className="text-sm   text-green-700 ">Have an account already? <Link to="/login">Login Here</Link></p>
            <button
              className="w-5/6  bg-green-600 text-white py-1 text-xl"
              type="submit"
            >
              Register
            </button>
            <GoogleLogin/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
