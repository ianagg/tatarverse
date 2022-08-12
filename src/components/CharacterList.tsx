import { useState } from 'react';
import '../styles/CharacterList.css';
import CharacterScreen from './CharacterScreen';
import { Character } from './Character';

function CharacterList() {
  const characterList = [
    new Character('Ainur', 12, 'Waifus'),
    new Character('Sanya', 99, 'Money'),
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
      </div>
      <CharacterScreen {...currentChar} />
    </>
  );
}

export default CharacterList;
