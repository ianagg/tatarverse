import { Character } from './Character';
import '../styles/Background.css';

function Background(char: Character) {
  let particles : JSX.Element[] = [];
  for (var i = 0; i < 1000; i++) {
    particles.push(
        <div className='circle-container' key={i}>
            <div className='circle' style={{ backgroundImage: 'radial-gradient(' + char.particleColor + ', ' + char.particleColor + ' 10%, ' + char.particleColor + '00 56%)' }}/>
        </div>
    );
  }

  return (
    <div className="container" style={{ backgroundColor: char.backgroundColor }}>
      <img className='background' src={require('../images/background.png')}/>
      {particles}
    </div>
  );
}

export default Background;
