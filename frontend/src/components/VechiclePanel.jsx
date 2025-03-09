import React from 'react'

const VechiclePanel = (props) => {
  return (
    <div>
      <h5 className="p-3 text-center absolute top-0  w-[93%]" onClick={() => props.setVichicle(false)}>
          {" "}
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vechicle</h3>
        <div
        onClick={()=>{
          props.setConfirmeRidePanel(true)
        }}
          tabIndex="0"
          className="flex border-2 focus:border-black hover:border-black focus:outline-none focus:ring-2 focus:ring-black rounded-xl p-3 items-center justify-between mb-2"
        >
          <img
            className="h-12 "
            src="https://th.bing.com/th/id/OIP.xwurBivaxldaTWDc6haKPQHaD9?w=860&h=460&rs=1&pid=ImgDetMain"
            alt=""
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-3-fill">4</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable , compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold"> ₹193.20</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmeRidePanel(true)
        }}
          tabIndex="0"
          className="w-full flex items-center justify-between p-3 border-2 hover:border-black focus:outline-none focus:ring-2 focus:ring-black rounded-xl mb-2"
        >
          <img
            className="h-12 "
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill">1</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable , motorcycle rides
            </p>
          </div>
          <h2 className="text-lg font-semibold"> ₹65</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmeRidePanel(true)
        }}
          tabIndex="0"
          className="w-full flex items-center justify-between p-3 border-2 focus:border-black hover:border-black focus:outline-none focus:ring-2 focus:ring-black rounded-xl mb-2"
        >
          <img
            className="h-12 "
            src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Uber Auto{" "}
              <span>
                <i className="ri-user-3-fill">3</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable , Auto rides
            </p>
          </div>
          <h2 className="text-lg font-semibold"> ₹118.86</h2>
        </div>
    </div>
  )
}

export default VechiclePanel
