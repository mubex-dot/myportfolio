import hello from "../images/hello-logo.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={hello} alt="hello"></img>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About me
            </a>
          </li>
          <li className="nav-item">
            <a href="#work" className="nav-link">
              My work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
