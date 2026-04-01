import './Header.css'
import Alarm from '../assets/alarm.png'

function Header({name}) {
  return (
    <div className="header">
      <h1>LOGO</h1>
      <div className="menu">
        <button>
          <img src={Alarm} alt="종" />
        </button>
        <button>{name}</button>
        <button>로그아웃</button>
      </div>
    </div>

  )
}

export default Header;