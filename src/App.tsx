import "./App.css";
import Stepper from "react-stepper-horizontal";
import NameInfo from "./components/NameInfo";
import { useContext } from "react";
import { GlobalContext } from "./context/Provider";
import WorkInfo from "./components/WorkInfo";
import Setup from "./components/Setup";
import Onboard from "./components/Onboard";
import eden from "./images/eden.png";

function App() {
  const globalStore: any = useContext(GlobalContext);
  const activeStep: number = globalStore.activeStep;

  return (
    <div className="App">
      <div className="page-title">
        <img
          src={eden}
          style={{ width: 26, marginRight: 5, marginTop: "-2px" }}
        />
        Eden
      </div>
      <div className="cover-div">
        <div className="stepper-cover">
          <Stepper
            steps={[{ title: "" }, { title: "" }, { title: "" }, { title: "" }]}
            activeStep={activeStep}
            activeColor={"#664de5"}
            completeColor={"#664de5"}
            defaultColor={"transparent"}
            defaultBorderColor={"#d8d3d3"}
            defaultBorderStyle={"solid"}
            defaultBorderWidth={"1"}
            circleFontColor={"rgb(196 196 196)"}
            size={36}
          />
        </div>
        {activeStep === 0 ? (
          <NameInfo />
        ) : activeStep === 1 ? (
          <WorkInfo />
        ) : activeStep === 2 ? (
          <Setup />
        ) : activeStep === 3 ? (
          <Onboard />
        ) : null}
      </div>
    </div>
  );
}

export default App;
