import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const gotoAbout = () => {
    navigate("/about");
  };
  return (
    <nav>
      <button>
        {" "}
        <Link to="/">HOME PAGE</Link>
        <Link to="/product/:id">PRoduct PAGE</Link>
      </button>
      <br />
      <button onClick={gotoAbout}>ABOUT PAGE</button>
      <p>THIS IS NAVBAR</p>
    </nav>
  );
}
