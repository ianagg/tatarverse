import '../styles/Profile.css';
import { Character } from './Character';

function Profile(char: Character) {
  return (
    <div className="prof">
      <h1>{char.name}</h1>
      <h3>Озвучили: {char.voice}</h3>
      <div className="table">
        <label>День рождения:</label>
        <span>{char.birthDate}</span>
        <label>Группа:</label>
        <span>{char.group}</span>
        <label>Глаз Бога:</label>
        <span>{char.vision}</span>
        <label>Созвездие:</label>
        <span>{char.constellation}</span>
      </div>
      {char.description}
    </div>
  );
}

export default Profile;
