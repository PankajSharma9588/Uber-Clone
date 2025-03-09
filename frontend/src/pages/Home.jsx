import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VechiclePanel from "../components/VechiclePanel";
import Confirmedride from "../components/Confirmedride";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vichlePanel = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const confirmeRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null); 
  const [vichicle, setVichicle] = useState(false);
  const [confirmeRidePanel, setConfirmeRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setwaitingForDriver] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, { height: "70%", padding: 24 });
        gsap.to(panelCloseRef.current, { rotate: 180, opacity: 1 });
      } else {
        gsap.to(panelRef.current, { height: "0%", padding: 0 });
        gsap.to(panelCloseRef.current, { rotate: 0, opacity: 0 });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (vichicle) {
        gsap.to(vichlePanel.current, { transform: "translateY(0)" });
      } else {
        gsap.to(vichlePanel.current, { transform: "translateY(100%)" });
      }
    },
    [vichicle]
  );
  useGSAP(
    function () {
      if (confirmeRidePanel) {
        gsap.to(confirmeRidePanelRef.current, { transform: "translateY(0)" });
      } else {
        gsap.to(confirmeRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmeRidePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, { transform: "translateY(0)" });
      } else {
        gsap.to(vehicleFoundRef.current, { transform: "translateY(100%)" });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, { transform: "translateY(0)" });
      } else {
        gsap.to(waitingForDriverRef.current, { transform: "translateY(100%)" });
      }
    },
    [waitingForDriver]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div
        onClick={() => {
          setVichicle(false);
        }}
        className="h-screen w-screen"
      >
        {/* image for tempoaray use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" absolute h-screen top-0 w-full flex flex-col justify-end">
        <div className="h-[30%] p-5 bg-[white] relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-5 w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0 ">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVichicle={setVichicle}
          />
        </div>
      </div>
      <div
        ref={vichlePanel}
        className="fixed w-full z-10 bottom-0 px-3 py-8 pt-12 translate-y-full bg-white"
      >
        <VechiclePanel
          setConfirmeRidePanel={setConfirmeRidePanel}
          setVichicle={setVichicle}
        />
      </div>
      <div
        ref={confirmeRidePanelRef}
        className="fixed w-full z-10 bottom-0 px-3 py-8 pt-12 translate-y-full bg-white"
      >
        <Confirmedride
          setConfirmeRidePanel={setConfirmeRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 px-3 py-8 pt-12 translate-y-full bg-white"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
        ref={waitingForDriverRef} // Added ref for WaitingForDriver
        className="fixed w-full z-10 bottom-0 px-3 py-8 pt-12  bg-white"
      >
        <WaitingForDriver  waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
