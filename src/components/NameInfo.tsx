import { useContext } from "react";
import { GlobalContext } from "../context/Provider";

const NameInfo = () => {
  const globalStore: any = useContext(GlobalContext);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    globalStore.setActiveStep(globalStore.activeStep + 1);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    globalStore.setNameInfo((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form-body">
      <span className="form-title">Welcome! First things first!</span>
      <span className="form-subtitle"> You can always change it later..</span>
      <form className="form-div" onSubmit={(event) => handleSubmit(event)}>
        <div className="input-row">
          <span className="input-label">Full Name</span>
          <input
            placeholder="steve jobs"
            type="text"
            onChange={handleChange}
            name="fullName"
            required
          />
        </div>
        <div className="input-row">
          <span className="input-label">Display Name</span>
          <input
            placeholder="steve"
            type="text"
            onChange={handleChange}
            name="displayName"
            required
          />
        </div>
        <button type="submit" className="form-next">
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default NameInfo;
