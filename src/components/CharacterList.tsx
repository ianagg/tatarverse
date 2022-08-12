import { useState } from 'react';
import '../styles/CharacterList.css';
import CharacterScreen from './CharacterScreen';
import { Character, Icon, Talent } from './Character';
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
        new Talent('Удар Незуко', 9, require('../images/icons/vision.png')),
        new Talent('Атака Акбая', 13, require('../images/icons/vision.png')),
        new Talent('Аяка-Аяка', 11, require('../images/icons/vision.png')),
        new Talent('Самодушие', 1, require('../images/icons/vision.png')),
        new Talent('Призыв Кукмора', 1, require('../images/icons/vision.png')),
        new Talent('Лимонадная доставка', 1, require('../images/icons/vision.png')),
      ],
      new Icon(require('../images/aynur-icon.png')),
      [
        new Talent('Архонты это круто', 1, require('../images/icons/vision.png')),
        new Talent('Хёна - няша', 1, require('../images/icons/vision.png')),
        new Talent('Каждый сам выбирает', 1, require('../images/icons/vision.png')),
        new Talent('Покровительство Акбая', 1, require('../images/icons/vision.png')),
        new Talent('С детства за Тим Спирит', 1, require('../images/icons/vision.png')),
        new Talent('Бу бит безнен Кукмара', 1, require('../images/icons/vision.png')),
      ],
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
        new Talent('Перерождение в другом мире', 10, require('../images/icons/vision.png')),
        new Talent('Копейки не считаем', 11, require('../images/icons/vision.png')),
        new Talent('Кредитная история', 6, require('../images/icons/vision.png')),
        new Talent('Вифаут махэббет', 1, require('../images/icons/vision.png')),
        new Talent('Молчание - золото', 1, require('../images/icons/vision.png')),
        new Talent('Благосклонность молитв', 1, require('../images/icons/vision.png')),
      ],
      new Icon(require('../images/alex-icon.png')),
      [
        new Talent('Бабки не проблема', 1, require('../images/icons/vision.png')),
        new Talent('Этек бэтек', 1, require('../images/icons/vision.png')),
        new Talent('Архонт не выбирает', 1, require('../images/icons/vision.png')),
        new Talent('Живем лишь единожды', 1, require('../images/icons/vision.png')),
        new Talent('Возврат акциями', 1, require('../images/icons/vision.png')),
        new Talent('Архонтская речь', 1, require('../images/icons/vision.png')),
      ],
    ),
  ];

  const [currentChar, setChar] = useState<Character>(characterList[0]);

  return (
    <>
      <div className="charas">
        <img className='vision' alt="" src={require('../images/icons/vision.png')} />
        <p>
          {currentChar.vision} / {currentChar.name}
        </p>
        <ul>
          {characterList.map((c) => {
            return (
              <button key={c.name} onClick={() => setChar(c)}>
                <img className='icon' alt='' src={c.icon.image}/>
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
