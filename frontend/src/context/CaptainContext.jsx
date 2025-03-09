import { createContext, useState, useContext } from 'react';

export const CaptainDataContext = createContext();
const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [activeRide, setActiveRide] = useState(null);

  const updateCaptainStatus = (status) => {
    setIsAvailable(status);
  };

  const updateLocation = (location) => {
    setCurrentLocation(location);
  };

  const updateActiveRide = (ride) => {
    setActiveRide(ride);
  };

  const value = {
    captain,
    setCaptain,
    isAvailable,
    updateCaptainStatus,
    currentLocation,
    updateLocation,
    activeRide,
    updateActiveRide
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;