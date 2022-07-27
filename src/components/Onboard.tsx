import { useContext } from "react";
import { GlobalContext } from "../context/Provider";
import tick from "../images/tick.png";

const Onboard = () => {
  const globalStore: any = useContext(GlobalContext);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <div className="form-body">
      <img src={tick} style={{ width: 60, marginBottom: 50 }} />
      <span className="form-title">
        Congratulations, {globalStore.nameInfo.displayName}!
      </span>
      <span className="form-subtitle">
        {" "}
        You have completed the onboarding, you can start using the Eden!
      </span>
      <form className="form-div" onSubmit={(event) => handleSubmit(event)}>
        <button type="submit" className="form-next">
          Launch Eden
        </button>
      </form>
    </div>
  );
};

export default Onboard;
