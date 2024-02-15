import ModuleList from "../Modules/List";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: 250 }}>
        <h2>Status</h2>
      </div>

    </div>
  );
}
export default Home;
