import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link> |
      <Link to="/application"> Applications</Link> |
      <Link to="/addjob"> Add Job</Link>
      <Link to="/joblist"> Add Job</Link>
    </nav>
  );
}

export default Navbar;