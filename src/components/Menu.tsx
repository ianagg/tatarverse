import { Link } from 'react-router-dom';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Attributes</Link>
        </li>
        <li>
          <Link to="/weapons">Weapons</Link>
        </li>
        <li>
          <Link to="/talents">Talents</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
