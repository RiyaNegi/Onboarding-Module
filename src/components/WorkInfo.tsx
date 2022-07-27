import { useContext } from "react";
import { GlobalContext } from "../context/Provider";

const WorkInfo = () => {
  const globalStore: any = useContext(GlobalContext);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    globalStore.setActiveStep(globalStore.activeStep + 1);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    globalStore.setWorkInfo((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form-body">
      <span className="form-title">Let's setup a home for all your work</span>
      <span className="form-subtitle">
        {" "}
        You can always create another workspace later.
      </span>
      <form className="form-div" onSubmit={(event) => handleSubmit(event)}>
        <div className="input-row">
          <span className="input-label">Workspace Name</span>
          <input
            placeholder="Eden"
            type="text"
            onChange={handleChange}
            name="workName"
            required
          />
        </div>
        <div className="input-row">
          <span className="input-label">
            Workspace URL{" "}
            <span style={{ color: "rgb(220 220 220)" }}>(optional)</span>
          </span>
          <div className="work-url">
            <span className="url-shade">www.eden.com/</span>
            <input
              placeholder="Example"
              type="text"
              onChange={handleChange}
              name="workUrl"
              className="work-input"
            />
          </div>
        </div>
        <button type="submit" className="form-next">
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default WorkInfo;
