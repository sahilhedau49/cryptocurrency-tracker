import axios from "axios";
import React, { useState } from "react";
import Bounce from "react-reveal/Bounce";

const ConnectPage = () => {
  const [success, setSuccess] = useState(false);
  const [alert, setAlert] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const getUserData = (event) => {
    const { name, value } = event.target;

    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      info.name === "" ||
      info.email === "" ||
      info.subject === "" ||
      info.message === ""
    ) {
      setAlert(true);
      return;
    }
    setAlert(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2500);
    await axios.post(
      "https://crypto-tracker-auth-b12d0-default-rtdb.firebaseio.com/cryptoUsersData.json",
      info
    );
    // console.log(info);
  };

  return (
    <>
      <div className="w-[40%] bg-[#181818] mx-auto p-20 rounded-3xl lg:w-[80%]">
        <h2 className="text-4xl mb-4 pb-4 border-b-2 border-zinc-600 font-semibold gradientText">
          Get in touch
        </h2>
        <form className="form">
          <label className="text-2xl text-fuchsia-300">Name</label>
          <br />
          <input
            className="w-[100%] text-xl mb-3 mt-1 px-6 py-2 outline-none border-none bg-[#242424] rounded-full"
            type="text"
            name="name"
            placeholder="Name"
            onChange={getUserData}
            required
          ></input>
          <br />
          <label className="text-2xl text-fuchsia-300">Email</label>
          <br />
          <input
            className="w-[100%] text-xl mb-3 mt-1 px-6 py-2 outline-none border-none bg-[#242424] rounded-full"
            type="email"
            name="email"
            placeholder="Email"
            onChange={getUserData}
            required
          ></input>
          <br />
          <label className="text-2xl text-fuchsia-300">Subject</label>
          <br />
          <input
            className="w-[100%] text-xl mb-3 mt-1 px-6 py-2 outline-none border-none bg-[#242424] rounded-full"
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={getUserData}
            required
          ></input>
          <br />
          <label className="text-2xl text-fuchsia-300">Message</label>
          <br />
          <textarea
            className="w-[100%] text-xl mt-1 px-6 py-2 outline-none border-none bg-[#242424] rounded-2xl"
            placeholder="Message"
            name="message"
            onChange={getUserData}
            rows="6"
            cols="60"
            required
          ></textarea>
          {alert && (
            <p className="mt-4 text-xl p-1 rounded alert">Enter all feilds!</p>
          )}
          <button
            className="search block mt-8 mx-auto text-xl px-6 py-2 text-black rounded outline-none"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <br />
        </form>
        {success && (
          <Bounce left>
            <div>
              <div className="block mx-auto my-2 px-3 py-1 w-40 text-2xl text-center bg-green-600 text-slate-200 rounded-3xl">
                Success ✅
              </div>
            </div>
          </Bounce>
        )}
      </div>
    </>
  );
};

export default ConnectPage;
