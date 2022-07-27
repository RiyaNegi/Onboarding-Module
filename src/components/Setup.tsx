import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/Provider";
import user from "../images/user.png";
import userColor from "../images/userColor.png";
import group from "../images/group.png";
import groupColor from "../images/groupColor.png";

const Setup = () => {
  const [colorImg, setColorImg] = useState("");
  const globalStore: any = useContext(GlobalContext);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    globalStore.setup != "" &&
      globalStore.setActiveStep(globalStore.activeStep + 1);
  };

  useEffect(() => {
    setColorImg(globalStore.setup);
  }, [globalStore.setup]);

  return (
    <div className="form-body">
      <span className="form-title">How are you planning to use Eden?</span>
      <span className="form-subtitle">
        {" "}
        We'll streamline your setup process accordingly.
      </span>
      <form className="form-cardDiv" onSubmit={(event) => handleSubmit(event)}>
        <div className="card-div">
          <div
            className="form-card-style"
            onMouseOver={() => setColorImg("user")}
            onMouseOut={() => setColorImg("")}
            onClick={() => globalStore.setSetup("user")}
            style={
              colorImg === "user" || globalStore.setup === "user"
                ? { border: "1px solid #664de5" }
                : {}
            }
          >
            <img
              src={
                colorImg === "user" || globalStore.setup === "user"
                  ? userColor
                  : user
              }
              style={{ width: 22, marginBottom: "20px" }}
            />
            <div className="card-title">For myself</div>
            <div className="card-subtitle">
              Write better. Think more clearly. Stay organized.
            </div>
          </div>
          <div
            className="form-card-style"
            onMouseOver={() => setColorImg("group")}
            onMouseOut={() => setColorImg("")}
            onClick={() => globalStore.setSetup("group")}
            style={
              colorImg === "group" || globalStore.setup === "group"
                ? { border: "1px solid #664de5" }
                : {}
            }
          >
            <img
              src={
                colorImg === "group" || globalStore.setup === "group"
                  ? groupColor
                  : group
              }
              style={{ width: 22, marginBottom: "20px" }}
            />
            <div className="card-title">With my team</div>
            <div className="card-subtitle">
              Wikis, docs, task & projects, all in one place.
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="form-next"
          disabled={globalStore.setup != "" ? false : true}
        >
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default Setup;
