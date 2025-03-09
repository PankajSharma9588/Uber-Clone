import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);
  // sample array for location
  const location = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22B, Near Malhotras cafe, Sheryians Coding School, Bhopal",
    "20B, Near Sharma's cafe, Sheryians Coding School, Bhopal",
    "18B, Near Kaushik cafe, Sheryians Coding School, Bhopal",
  ];
  return (
    <div>
      {/* this is just a sample data */}
      {location.map(function (elem) {
        return (
          <div
            onClick={() => {
              props.setVichicle(true);
              props.setPanelOpen(false);
            }}
            className="flex items-center justify-start gap-4 my-2 border-2 p-3 rounded-xl border-white active:border-black"
          >
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill "></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
