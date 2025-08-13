import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark" style={{ height: "10vh", marginTop: "auto" }}>
      <footer>
        <ul className="nav justify-content-center ">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-white">
              About
            </Link>
          </li>
        </ul>
        <p className="text-center text-white fs-6">© imeshagupta</p>
      </footer>
    </div>
  );
};

export default Footer;
