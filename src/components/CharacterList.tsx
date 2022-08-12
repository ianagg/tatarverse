import { useState } from 'react';
import '../styles/CharacterList.css';
import CharacterScreen from './CharacterScreen';
import { Character } from './Character';
import Background from './Background';

function CharacterList() {
  const characterList = [
    new Character('Ainur', 12, 'Waifus', '#7F006E', '#FF00DC'),
    new Character('Sanya', 99, 'Money', '#007F0E', '#00FF21'),
  ];

  const [currentChar, setChar] = useState<Character>(characterList[0]);

  return (
    <>
      <div className="charas">
        <p>
          {currentChar.type} / {currentChar.name}
        </p>
        <ul>
          {characterList.map((c) => {
            return <button onClick={() => setChar(c)}>{c.name}</button>;
          })}
        </ul>
        <Background {...currentChar} />
      </div>
      <CharacterScreen {...currentChar} />
    </>
  );
}

export default CharacterList;
