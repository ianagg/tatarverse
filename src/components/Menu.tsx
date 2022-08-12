import { Link } from 'react-router-dom';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Характеристики</Link>
        </li>
        <li>
          <Link to="/constellation">Созвездие</Link>
        </li>
        <li>
          <Link to="/talents">Таланты</Link>
        </li>
        <li>
          <Link to="/profile">О персонаже</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
