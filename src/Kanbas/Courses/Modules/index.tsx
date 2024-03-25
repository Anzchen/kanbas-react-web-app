import ModuleList from "./List";
import "./index.css";
function Modules() {
  return (
    <div className="d-flex">
      <div className="flex-fill">
        <h2>Modules</h2>
        <ModuleList />
      </div>
    </div>
  );
}
export default Modules;