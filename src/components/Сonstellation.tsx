import '../styles/Сonstellation.css';
import { Character } from './Character';

function Сonstellation(char: Character) {
  return (
    <div className="con">
      <ul>
        <li className='left'>
          <button>Test</button>
          <h2>Test</h2>
        </li>
        <li className='middle'>
        <button>Test</button>
          <h2>Test</h2>
        </li>
        <li>
        <button>Test</button>
          <h2>Test</h2>
        </li>
        <li>
        <button>Test</button>
          <h2>Test</h2>
        </li>
        <li className='middle'>
        <button>Test</button>
          <h2>Test</h2>
        </li>
        <li className='left'>
        <button>Test</button>
          <h2>Test</h2>
        </li>
      </ul>
      <div className='arc'/>
    </div>);
}

export default Сonstellation;
