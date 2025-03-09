import React from "react";

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking For a Driver</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://th.bing.com/th/id/OIP.xwurBivaxldaTWDc6haKPQHaD9?w=860&h=460&rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>
      <div className="w-full mt-5 ">
        <div className="flex items-center gap-5 p-3 border-b-2 border-b-gray-100">
          {" "}
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm text-gray-600 -mt-1">
              Kankariya Talab, Bhopal
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2 border-b-gray-100">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm text-gray-600 -mt-1">
              Kankariya Talab, Bhopal
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 ">
          <i className="ri-currency-line"></i>
          <div>
            <h3 className="text-lg font-medium">₹193.20</h3>
            <p className="text-sm text-gray-600 -mt-1">Cash </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
