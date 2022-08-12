import { Character } from './Character';
import Attributes from './Attributes';
import Talents from './Talents';
import Menu from './Menu';
import '../styles/Screen.css';
import { Routes, Route } from 'react-router-dom';
import Weapons from './Weapons';
import Profile from './Profile';

function CharacterScreen(char: Character) {
  return (
    <div className="screen">
      <Menu />
      {/* current char component */}
      <Routes>
        <Route path="/" element={<Attributes {...char} />} />
        <Route path="/talents" element={<Talents {...char} />} />
        <Route path="/weapons" element={<Weapons {...char} />} />
        <Route path="/profile" element={<Profile {...char} />} />
      </Routes>
    </div>
  );
}

export default CharacterScreen;
