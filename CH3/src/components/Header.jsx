import { Link } from 'react-router-dom';

import './Header.css'
import Alarm from '../assets/alarm.png'

function Header({name}) {
  return (
    <div className="header">
      <Link to={"/"} className={"LOGO-link"}>
        <h1>LOGO</h1>
      </Link>
      <div className="menu">
        <button>
          <img src={Alarm} alt="종" />
        </button>
        <button className="name">{name}</button>
        <button className="login">로그아웃</button>
      </div>
    </div>
  );
}

export default Header;