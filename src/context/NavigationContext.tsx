"use client"
import { createContext, useState, ReactNode, useContext } from "react";

interface NavigationContextType {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
  handleToggle?: () => void;
}

const NavigationContext = createContext<NavigationContextType>({
  navOpen: false,
  setNavOpen: () => {},
  handleToggle: () => {},
});

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
    console.log("object")
  };

  return (
    <NavigationContext.Provider value={{ navOpen, setNavOpen, handleToggle }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Custom hook to consume the context
export const useNavigation = () => useContext(NavigationContext);
