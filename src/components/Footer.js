import github from "../images/github.svg";
import twitter from "../images/twitter.svg";
import whatsapp from "../images/whatsapp.svg";
import gmail from "../images/gmail-logo.svg";

function Footer() {
  return (
    <div className="foot">
      <a href="https://github.com/mubex-dot">
        <img src={github} alt=""></img>
      </a>
      <a href="https://twitter.com/m_u_b_e_x_">
        <img src={twitter} alt=""></img>
      </a>
      <a href="https://wa.me/qr/GT66T5TVSCXGO1">
        <img src={whatsapp} alt=""></img>
      </a>
      <a href="mailto:mubee2004@gmail.com">
        <img src={gmail} alt=""></img>
      </a>
    </div>
  );
}

export default Footer;
