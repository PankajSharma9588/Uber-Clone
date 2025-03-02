const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  firstname,lastname,email,password,
  color,plateNumber,capacity,vechicleType
}) => {
  if(!firstname||!lastname||!email||!password||!color||!plateNumber||!capacity||!vechicleType){
    throw new Error('All fields are required')
  }
  const captain = captainModel.create({
    fullname: { firstname, 
      lastname },
    email,
    password,
    vechicle: { color,
       plateNumber, 
       capacity,
        vechicleType },
  })
  return captain
}