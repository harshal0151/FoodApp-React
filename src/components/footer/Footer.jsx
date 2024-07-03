
import { FaLinkedinIn,FaGithub,FaInstagram } from "react-icons/fa";
import "../footer/footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
        <footer id="contact-us">
        <div className="footer_content">
          <div className="footer_left">
            <h2>Food.com</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              illo facilis nesciunt ad autem ea quibusdam totam. Fugit,
              voluptatem fugiat?
            </p>
            <div className="footer_social">
             <Link> <FaGithub/></Link>
              <Link><FaLinkedinIn/></Link>
              <Link><FaInstagram/></Link>
            </div>
          </div>
          <div className="footer_center">
            <h2>company</h2>
            <ul>
              <Link><li>Home</li></Link>
              <Link><li>About us</li></Link>
              <Link><li>Delivery</li></Link>
             <Link> <li>Privacy policy</li></Link>
            </ul>
          </div>
          <div className="footer_right">
            <h2>Get in touch</h2>
            <ul>
              <li>+91 9284117732</li>
              <li>patilharshal0151@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr/>
        <p className="footer_copy-right">Copyright 2024 © || Harshal Patil - All Right Reserved.</p>
        </footer>
    </>
  );
}

export default Footer;
