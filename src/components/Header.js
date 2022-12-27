import hello from "../images/hello-logo.png";
import openMenu from "../images/open-menu.png";
import closeMenu from "../images/close-menu.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={hello} alt="hello"></img>
      </div>
      <nav className="nav">
        <button>
          <img className="open" src={openMenu} alt=""></img>
        </button>
        <div className="nav-list">
          <buton>
            <img className="close" src={closeMenu} alt=""></img>
          </buton>
          <ul>
            <li className="nav-item">
              <a href="#home" className="nav-link">
                <span className="underline">Ho</span>me
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <span className="underline">Abo</span>ut me
              </a>
            </li>
            <li className="nav-item">
              <a href="#work" className="nav-link">
                <span className="underline">My </span>work
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://mubex-dot.github.io/hng1/"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                <span className="underline">My </span>links
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
