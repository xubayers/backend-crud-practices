import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to={"/"}>Phones</Link>
        <Link to={"addnew"}>Add-New</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
