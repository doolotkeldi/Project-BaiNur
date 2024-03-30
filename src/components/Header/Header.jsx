import React from 'react';
import { Link} from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import './Header.css';

import corzina from '../../assets/svg/corzina.svg';
import Logo from '../../assets/svg/Logo.svg';
import heart from '../../assets/svg/heart.svg';
import man from '../../assets/svg/man.svg';
import a from '../../assets/svg/a.svg';
import search from '../../assets/svg/search.svg';
import Contact from '../Contact/Contact';
import SearchInfo from '../Search/Search';


function Header() {
  const gotoWoman = () => {
    
  };
 
  return (
    <header>
      <div className='wrapper'>
        <div className="text-content">
          <div>
            <img src={Logo} alt="" />
          </div>

          <h1 style={{marginLeft:"20px"}}><Link style={{color:"#3C4242"}} to='/'>Shop</Link></h1>
          <h1 onClick={gotoWoman}><Link style={{color:"#807D7E"}} to='/contact'>Women</Link></h1>
        </div>
        <div className="input-content">
          <div className='input-info'>
            <input type="text" placeholder={` Search`} />
          </div>
          <div className="image-info">
            <div>
              <img src={heart} alt="" />
            </div>
            <div>
              <Link to="/registration">
                 <img  src={man} alt="" />
              </Link>
            </div>
            <div>
              <img src={corzina} alt="" />
            </div>
            <div>
              <img src={a} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

