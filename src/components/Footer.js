import github from "../images/github.svg";
import twitter from "../images/twitter.svg";
import whatsapp from "../images/whatsapp.svg";
import gmail from "../images/gmail-logo.svg";

function Footer() {
  return (
    <div className="foot">
      <a href="https://github.com/Mustyaks">
        <img src={github} alt=""></img>
      </a>
      <a href="https://x.com/mustyryback?t=ZugbIUhqc7qbFS9dPjcdyg&s=09">
        <img src={twitter} alt=""></img>
      </a>
      <a href="https://wa.me/qr/H6MDB6AAHT7XM1">
        <img src={whatsapp} alt=""></img>
      </a>
      <a href="mailto:yakubumustapha366@gmail.com">
        <img src={gmail} alt=""></img>
      </a>
    </div>
  );
}

export default Footer;
