import { Link } from 'react-router-dom';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Attributes</Link>
        </li>
        <li>Weapons</li>
        <li>Artifacts</li>
        <li>Constalations</li>
        <li>
          <Link to="/talents">Talents</Link>
        </li>
        <li>Profile</li>
      </ul>
    </div>
  );
}

export default Menu;
