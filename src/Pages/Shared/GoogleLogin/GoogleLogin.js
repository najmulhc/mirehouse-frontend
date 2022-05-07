import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
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
  return (
    <div>
      <div className="flex items-center w-5/6 my-2 mx-auto">
        <hr className="border border-green-600 w-full mr-1" /> <h1>or</h1>
        <hr className="border border-green-600 w-full ml-1" />
      </div>
      <button
        className="w-5/6  bg-green-600 text-white py-1 text-xl"
        type="submit"
        onClick={googleLogin}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
