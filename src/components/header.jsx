import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <header>
      <div className="header container">
        <div className="header-logo">
          <Link><span>Gega</span> Jikuridze</Link>
        </div>

        <div className="header-nav">
          <Link to="/">Home</Link>

          <Link to="about-me">About me</Link>

          <Link to="projects">Projects</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
