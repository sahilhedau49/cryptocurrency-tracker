import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/app");
    }
  }, [user]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <GoogleButton onClick={handleSignIn} />
    </div>
  );
};

export default LoginPage;
