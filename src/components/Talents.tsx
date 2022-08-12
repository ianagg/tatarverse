import { Character } from './Character';
import '../styles/Talents.css';

function Talents(character: Character) {
  return (
    <div className="talents">
      {character.talents.map((tal) => {
        return (
          <>
            <div className="name">
              <label>{tal.name}</label>
              <p>Ур. {tal.level}</p>
            </div>
            <img alt="" src={tal.image} />
          </>
        );
      })}
    </div>
  );
}

export default Talents;
