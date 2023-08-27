import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";

const MainPage = () => {
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
    <div className="min-h-screen  bg-[#232323] text-white">
      <div className="w-[60vw] p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="text-center">
          <h2 className="font-bold text-6xl">Crypto-Currency Tracker</h2>
          <p className="mt-10 text-3xl">Begin your crypto analysis here. </p>
          <div className="login-btn mt-10 my-auto">
            <button
              className="search text-2xl px-8 py-2 text-black rounded outline-none"
              onClick={() => SignIn()}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
