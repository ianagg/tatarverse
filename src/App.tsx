import CharacterList from './components/CharacterList';
import { BrowserRouter as StaticRouter } from 'react-router-dom';

function App() {
  var backgroundColor = '#7F006E'
  var particleColor = '#FF00DC'

  let particles : JSX.Element[] = [];
  for (var i = 0; i < 1000; i++) {
    particles.push(
        <div className='circle-container' key={i}>
            <div className='circle' style={{ backgroundImage: 'radial-gradient(' + particleColor + ', ' + particleColor + ' 10%, ' + particleColor + '00 56%)' }}/>
        </div>
    );
  }
  
  return (
    <StaticRouter basename="/tatarverse">
      <div className="App">
        <CharacterList />
      </div>
    </StaticRouter>
  );
}

export default App;
