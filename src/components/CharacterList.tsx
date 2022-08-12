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
      'Также известен как Архонт Призыва из Лимонадного поселка городкого типа. Известен своим очарованием, благодаря которому обзавелся отрядами вайфу.  Является самой популярной персоной в регионе, но не смотря на это, не имеет друзей',
      [
        new Talent('Удар Незуко', 9, require('../images/talents/oenoor_talant_1.png')),
        new Talent('Атака Акбая', 13, require('../images/talents/oenoor_talant_2.png')),
        new Talent('Аяка-Аяка', 11, require('../images/talents/oenoor_talant_3.png')),
        new Talent('Самодушие', 1, require('../images/talents/oenoor_talant_4.png')),
        new Talent('Призыв Кукмора', 1, require('../images/talents/oenoor_talant_5.png')),
        new Talent('Лимонадная доставка', 1, require('../images/talents/oenoor_talant_6.png')),
      ],
      new Icon(require('../images/aynur-icon.png')),
      [
        new Talent('Архонты это круто', 1, require('../images/consts/oenoor_constellation_1.png')),
        new Talent('Хёна - няша', 1, require('../images/consts/oenoor_constellation_2.png')),
        new Talent('Каждый сам выбирает', 1, require('../images/consts/oenoor_constellation_3.png')),
        new Talent('Покровительство Акбая', 1, require('../images/consts/oenoor_constellation_4.png')),
        new Talent('С детства за Тим Спирит', 1, require('../images/consts/oenoor_constellation_5.png')),
        new Talent('Бу бит безнен Кукмара', 1, require('../images/consts/oenoor_constellation_6.png')),
      ],
      require('../images/main/Oenoork-1.png'),
      require('../images/main/Dog-1.png'),
      require('../images/main/Oenoork-2.png'),
      require('../images/main/Oenoork-3.png'),
      new Icon(require('../images/icons/waifu.png')),
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
      'Бабло архонт. Не является создателем моры, но умеет ей распоряжаться. Побеждает своих врагов, предварительно выдавая им кредиты под высокий процент. Также известен тем,что в его регионе почти нет хиличурлов, так как он разрушает все их башни. По слухам пришел из другого мира.',
      [
        new Talent('Перерождение в другом мире', 10, require('../images/talents/alex_talent_1.png')),
        new Talent('Копейки не считаем', 11, require('../images/talents/alex_talent_2.png')),
        new Talent('Кредитная история', 6, require('../images/talents/alex_talent_3.png')),
        new Talent('Вифаут махэббет', 1, require('../images/talents/alex_talent_4.png')),
        new Talent('Молчание - золото', 1, require('../images/talents/alex_talent_5.png')),
        new Talent('Благосклонность молитв', 1, require('../images/talents/alex_talent_6.png')),
      ],
      new Icon(require('../images/alex-icon.png')),
      [
        new Talent('Бабки не проблема', 1, require('../images/consts/alex_constellation_1.png')),
        new Talent('Этек бэтек', 1, require('../images/consts/alex_constellation_2.png')),
        new Talent('Архонт не выбирает', 1, require('../images/consts/alex_constellation_3.png')),
        new Talent('Живем лишь единожды', 1, require('../images/consts/alex_constellation_4.png')),
        new Talent('Возврат акциями', 1, require('../images/consts/alex_constellation_5.png')),
        new Talent('Архонтская речь', 1, require('../images/consts/alex_constellation_6.png')),
      ],
      require('../images/main/Alexsandr-1.png'),
      require('../images/main/Apple-1.png'),
      require('../images/main/Alexsandr-2.png'),
      require('../images/main/Alexsandr-3.png'),
      new Icon(require('../images/icons/money.png')),
    ),
  ];

  const [currentChar, setChar] = useState<Character>(characterList[0]);

  return (
    <>
      <div className="charas">
        <img className='vision' alt="" src={currentChar.vicon.image} />
        <p>
          {currentChar.vision} / {currentChar.name}
        </p>
        <ul>
          {characterList.map((c) => {
            return (
              <button key={c.name} onClick={() => setChar(c)}>
                <img className="icon" alt="" src={c.icon.image} />
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
