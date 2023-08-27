import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", photoUrl: "" });

  const SignIn = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      setUserData(() => {
        userData.name = data.user.displayName;
        userData.photoUrl = data.user.photoURL;
      });
      console.log(userData);
    } catch (err) {
      console.log(err.message);
    }
    if (auth.currentUser) {
      navigate("/app");
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <GoogleButton onClick={() => SignIn()} />
    </div>
  );
};

export default LoginPage;
