import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CaptainSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vechicle: {
        color: vehicleColor,
        plateNumber: vehiclePlate,
        capacity: vehicleCapacity,
        vechicleType: vehicleType,
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`, 
      captainData
    );
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captainhome");
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };
  return (
    <div>
      <div>
        <div className="p-7 h-screen flex flex-col justify-between">
          <div>
            <img
              className="w-20 h-20 mb-4 mt-0"
              src="https://cdn.branch.io/branch-assets/1585958759848-og_image.png"
              alt=""
            />
            <form onSubmit={(e) => submitHandler(e)}>
              <h3 className="text-lg w-full font-medium mb-2">
                What's our Captains name
              </h3>
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
              <h3 className="text-lg font-medium mb-2">
                What's our Captains email
              </h3>
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
              <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
              <div className="flex gap-4 mb-7">
                <input
                  required
                  className="bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 w-1/2  border text-lg placeholder:text-base"
                  type="text"
                  placeholder="Vehicle Color"
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                />
                <input
                  required
                  className="bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 w-1/2 border text-lg placeholder:text-base"
                  type="text"
                  placeholder="Vehicle Plate Number"
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                />
              </div>
              <div className="flex gap-4 mb-7">
                <input
                  required
                  className="bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 w-1/2 border text-lg placeholder:text-base"
                  type="number"
                  placeholder="Vehicle Capacity"
                  value={vehicleCapacity}
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                />
                <select
                  required
                  className="bg-[#eeeeee] mb-6 rounded-lg border  px-4 py-2 w-1/2 text-lg"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="auto">Auto</option>
                  <option value="motorcycle">Motorcycle</option>
                </select>
              </div>
              <button className="bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
                Create Captain account
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
