import React, {useState} from 'react';
import './Navbar.css';
import Logo from "../images/logo1.jpg";
import Logo2 from "../images/logo2.jpg";
import { Link }from "react-router-dom";
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {

  const [Mobile, setMobile] = useState(false)


  return (
    <div className="Navbar">
      <div className="Logo">
        <img src={Logo} alt="logo" className="Logo1"/>
        <img src={Logo2} alt="logo" className="Logo2"/>
      </div>
      <ul className={Mobile? "Nav-links-mobile" : "Nav-links"} onClick = {() => setMobile(false)}>
        <Link to="/" className='Link'><li>Home</li></Link>
        <Link to="/" className='Link'><li>About</li></Link>
        <Link to="/" className='Link'><li>Services</li></Link>
        <Link to="/" className='Link'><li>Schedule A Meeting</li></Link>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross/> : <FaBars />}
      </button>
    </div>
  )
}

export default Navbar