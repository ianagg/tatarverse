import { useState } from 'react';
import '../styles/CharacterList.css';
import CharacterScreen from './CharacterScreen';
import { Character, Talent } from './Character';
import Background from './Background';

function CharacterList() {
  const characterList = [
    new Character(
      'Айнурзуко',
      27,
      '#7F006E',
      '#FF00DC',
      'Айнур Динмухаметов',
      '12.08',
      'Вайфу',
      'Tiltonicus',
      'Большой Акбай',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      [
        new Talent('asd', 1, require('../images/icons/vision.png')),
        new Talent('zxc', 1, require('../images/icons/vision.png')),
      ]
    ),
    new Character(
      'Древослав',
      27,
      '#007F0E',
      '#00FF21',
      'Александр Дровняшин',
      '16.08',
      'Деньги',
      'Tiltonicus',
      'Откусанное яблоко',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      [
        new Talent('asd', 1, require('../images/icons/vision.png')),
        new Talent('zxc', 1, require('../images/icons/vision.png')),
      ]
    ),
  ];

  const [currentChar, setChar] = useState<Character>(characterList[0]);

  return (
    <>
      <div className="charas">
        <img alt="" src={require('../images/icons/vision.png')} />
        <p>
          {currentChar.vision} / {currentChar.name}
        </p>
        <ul>
          {characterList.map((c) => {
            return (
              <button key={c.name} onClick={() => setChar(c)}>
                {c.name}
              </button>
            );
          })}
        </ul>
      </div>
      <CharacterScreen {...currentChar} />
      <Background {...currentChar} />
    </>
  );
}

export default CharacterList;
