import { Character } from './Character';
import Attributes from './Attributes';
import Talents from './Talents';
import Menu from './Menu';
import '../styles/Screen.css';
import { Routes, Route } from 'react-router-dom';
import Сonstellation from './Сonstellation';
import Profile from './Profile';
import { useLocation } from 'react-router-dom';

function CharacterScreen(char: Character) {
  const location = useLocation();
  const path = location.pathname.toString();
  let currentImg = char.attrImg;
  switch (path) {
    case '/':
      currentImg = char.attrImg;
      break;
    case '/constellation':
      currentImg = char.constellationImg;
      break;
    case '/talents':
      currentImg = char.talImg;
      break;
    case '/profile':
      currentImg = char.talImg;
      break;
    default:
      break;
  }

  return (
    <div className="screen">
      <Menu />
      <div className="mainView">
        <img src={currentImg} alt="" />
      </div>
      <Routes>
        <Route path="/" element={<Attributes {...char} />} />
        <Route path="/talents" element={<Talents {...char} />} />
        <Route path="/constellation" element={<Сonstellation {...char} />} />
        <Route path="/profile" element={<Profile {...char} />} />
      </Routes>
    </div>
  );
}

export default CharacterScreen;
