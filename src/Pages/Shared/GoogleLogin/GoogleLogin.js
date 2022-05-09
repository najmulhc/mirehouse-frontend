import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Bars } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const googleLogin = () => {
    signInWithGoogle();
  };
  if (user) {
    navigate("/");
  }
  if(loading){
    return <div className="w-full h-[160px] flex items-center justify-center"><Bars
    color="#F9AA4B"
    height={110}
    width={110}
    ariaLabel="three-circles-rotating"
  /></div>}
  return (
    <div>
      <div className="flex items-center w-full my-2 mx-auto">
        <hr className="border border-komola w-full mr-1" /> <h1 className="text-komola">or</h1>
        <hr className="border border-komola w-full ml-1" />
      </div>
      <button
        className="text-white  rounded-full  font-bold py-2 px-20  hover:text-komola bg-komola border hover:bg-white border-komola  my-2 mx-auto "
        type="submit"
        onClick={googleLogin}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
