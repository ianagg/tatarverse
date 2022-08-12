import '../styles/Attributes.css';
import { Character } from './Character';

function Attributes(character: Character) {
  return (
    <div className="charTab">
      <div className="mainStats">
        <h1>{character.name}</h1>
        <h2>★☆☆☆☆☆</h2>
        <h2>Уровень {character.level}/90</h2>
      </div>
      <div className="subStats">
        <div className='stat'>
          <img src={require('../images/icons/hp.png')} alt=''/>
          <h3 className='name'>Макс. HP </h3>
          <h3 className='value'>10000</h3>
        </div>
        <div className='stat'>
          <img src={require('../images/icons/atk.png')} alt=''/>
          <h3 className='name'>Сила атаки</h3>
          <h3 className='value'>10000</h3>
        </div>
        <div className='stat'>
          <img src={require('../images/icons/def.png')} alt=''/>
          <h3 className='name'>Защита</h3>
          <h3 className='value'>10000</h3>
        </div>
        <div className='stat'>
          <img src={require('../images/icons/em.png')} alt=''/>
          <h3 className='name'>Мастерство стихий</h3>
          <h3 className='value'>10000</h3>
        </div>
        <div className='stat'>
          <img src={require('../images/icons/stm.png')} alt=''/>
          <h3 className='name'>Макс. выносливость</h3>
          <h3 className='value'>10000</h3>
        </div>
        <button>Подробнее</button>
        <div className='stat'>
          <img src={require('../images/icons/frnd.png')} alt=''/>
          <h3 className='name'>Уровень дружбы</h3>
          <h3 className='value'>10000</h3>
        </div>
      </div>
      <p>
        {character.description}
      </p>
    </div>
  );
}

export default Attributes;
