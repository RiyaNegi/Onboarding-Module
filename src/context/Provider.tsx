import React, { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }: { children: any }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [nameInfo, setNameInfo] = useState<{
    fullName: string;
    displayName: string;
  }>({ fullName: "", displayName: "" });
  const [workInfo, setWorkInfo] = useState<{
    workName: string;
    workUrl: string;
  }>({ workName: "", workUrl: "" });
  const [setup, setSetup] = useState<string>("");

  return (
    <GlobalContext.Provider
      value={{
        activeStep: activeStep,
        setActiveStep: setActiveStep,
        nameInfo,
        setNameInfo,
        setWorkInfo,
        setSetup,
        setup,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
