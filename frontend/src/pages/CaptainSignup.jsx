import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    setUserData({
     fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <div className="p-7 h-screen flex flex-col justify-between">
          <div>
          <img
        className="w-20 h-20 mb-4 mt-0"
        src='https://cdn.branch.io/branch-assets/1585958759848-og_image.png'
        alt=""
      />
            <form onSubmit={(e) => submitHandler(e)}>
              <h3 className="text-lg w-full font-medium mb-2">What's our Captains name</h3>
              <div className="flex  gap-2 mb-6">
                <input
                  required
                  className="bg-[#eeeeee] rounded px-4 py-2 w-1/2  text-base placeholder:text-sm"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  required
                  className="bg-[#eeeeee]  rounded px-4 py-2 w-1/2  text-lg placeholder:text-base"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>{" "}
              <h3 className="text-lg font-medium mb-2">What's our Captains email</h3>
              <input
                required
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2  w-full text-lg placeholder:text-base"
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3 className="text-lg font-medium mb-2">Enter Password</h3>
              <input
                required
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2  w-full text-lg placeholder:text-base"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
                Login
              </button>
            </form>
            <p className="text-center">
              Already have an account?
              <Link to="/captainlogin" className="text-blue-600">
                Login here
              </Link>
            </p>
          </div>
          <div>
            <p className="text-[10px] leading-tight">
              This site is protected by reCAPTCHA and the{" "}
              <span className="underline"> Google Privacy Policy </span>and{" "}
              <span className="underline">Terms of Service apply</span>.
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CaptainSignup;
