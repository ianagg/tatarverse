import '../styles/–°onstellation.css';
import { Character } from './Character';

function –°onstellation(char: Character) {
  return (
    <div className="con">
      <ul>
        <li className='left'>
          <button>
            <img alt='' src={char.constellations[0].image} />
          </button>
          <h3>{char.constellations[0].name}</h3>
        </li>
        <li className='middle'>
          <button>
            <img alt='' src={char.constellations[1].image} />
          </button>
          <h3>{char.constellations[1].name}</h3>
        </li>
        <li>
          <button>
            <img alt='' src={char.constellations[2].image} />
          </button>
          <h3>{char.constellations[2].name}</h3>
        </li>
        <li>
          <button>
            <img alt='' src={char.constellations[3].image} />
          </button>
          <h3>{char.constellations[3].name}</h3>
        </li>
        <li className='middle'>
          <button>
            <img alt='' src={char.constellations[4].image} />
          </button>
          <h3>{char.constellations[4].name}</h3>
        </li>
        <li className='left'>
          <button>
            <img alt='' src={char.constellations[5].image} />
          </button>
          <h3>{char.constellations[5].name}</h3>
        </li>
      </ul>
      <div className='arc'/>
    </div>);
}

export default –°onstellation;
