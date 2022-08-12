import '../styles/Attributes.css';
import { Character } from './Character';

function Attributes(character: Character) {
  return (
    <div className="charTab">
      <div className="mainStats">
        <h1>{character.name}</h1>
        <h3>★☆☆☆☆☆</h3>
        <h2>Уровень {character.level}/90</h2>
      </div>
      <div className="subStats">
        <h4>🌢 Макс. HP </h4>
        <h4>🕺 Сила атаки</h4>
        <h4>⛨ Защита</h4>
        <h4>⩙ Мастерство стихий</h4>
        <h4>🕺 Макс. выносливость</h4>
        <span></span>
        <button className="detailsbutton">Подробнее</button>
        <span></span>
      </div>
      <h4>⚤ Уровень дружбы</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}

export default Attributes;
