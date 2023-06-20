import { viewClass, createClass, deleteClass } from "../api/index.js";

const ClassComponent = () => {
  return (
    <>
      <button onClick={createClass}>Create Class</button>

      <button onClick={viewClass}>View Classes</button>

      <button
        onClick={() => {
          deleteClass(`614400296816`);
        }}
      >
        Delete Classes
      </button>
    </>
  );
};

export default ClassComponent;
