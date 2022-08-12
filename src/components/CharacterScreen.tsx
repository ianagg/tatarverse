import { Character } from './Character';
import Attributes from './Attributes';
import Talents from './Talents';
import Menu from './Menu';
import '../styles/Screen.css';
import { Routes, Route } from 'react-router-dom';

function CharacterScreen(char: Character) {
  return (
    <div className="screen">
      <Menu />
      {/* current char component */}
      <Routes>
        <Route path="/" element={<Attributes {...char} />} />
        <Route path="/talents" element={<Talents {...char} />} />
      </Routes>
    </div>
  );
}

export default CharacterScreen;
