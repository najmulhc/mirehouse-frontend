import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Bars } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [updateProfile, updating, updateErr] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const register =  async(e) => {
    await e.preventDefault();
    if (password === confirm) {
      createUserWithEmailAndPassword(email, password);
     
      
    } else {
      toast.error("passwords did not matched");
    }
  };
  const updateUserName = async() =>{
    console.log(displayName);
    await updateProfile({displayName});
    
  }
  if(error){
    toast.error(error.message);
  }
  if(user) {
    updateUserName();
    toast.success('registration seccessfull')
    navigate('/')
 }

  if(loading){
    return <div className="w-full h-[660px] flex items-center justify-center"><Bars
    color="#F9AA4B"
    height={110}
    width={110}
    ariaLabel="three-circles-rotating"
  /></div>
  }

  return (
    <section className="md:grid md:grid-cols-2  w-full bg-red-500">
      <div className="bg-blue-600"></div>
      <div className="flex justify-center items-center py-[120px] bg-komola">
        <div className="w-[400px] bg-white rounded-md shadow-md p-8">
          <form>
            <h1 className="text-kala text-4xl font-bold text-center mb-10">
              Register
            </h1>
            <label htmlFor="name">
              <h2 className="m-0 p-0 font-semibold text-kala">
                Enter your name<span className="text-red">*</span>
              </h2>
              <input
                name="name"
                type="text"
                placeholder="John Kyle"
                className="border-b-2 w-full p-2 text-lg border-b-komola "
                onBlur={(e) => setDisplayName(e.target.value)}
                required
              />
            </label>
            <label htmlFor="email">
              <h2 className="m-0 mt-6 p-0 font-semibold text-kala">
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
            <label htmlFor="confirm">
              <h2 className="mt-6 p-0 font-semibold text-kala">
                Confirm Password <span className="text-red">*</span>
              </h2>
              <input
                name="confirm"
                type="password"
                placeholder="Password"
                className="border-b-2 w-full p-2 text-lg border-b-komola"
                onBlur={(e) => setConfirm(e.target.value)}
                required
              />
            </label>

            <p className="text-sm mt-2 text-center  text-kala ">
              Already registered?{" "}
              <Link to="/login" className="text-komola">
                Login Here
              </Link>
            </p>

            <button
              onClick={register}
              className="flex w-full justify-center"
              type="submit"
            >
              {" "}
              <span className="text-white  rounded-full  font-bold py-2 px-20  hover:text-komola bg-komola border hover:bg-white border-komola  my-2 mx-auto ">
                Register
              </span>
            </button>
            <GoogleLogin />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
