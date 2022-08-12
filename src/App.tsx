import CharacterList from './components/CharacterList';
import { BrowserRouter as StaticRouter } from 'react-router-dom';

function App() {
  return (
    <StaticRouter basename="/tatarverse">
      <div className="App">
        <CharacterList />
      </div>
    </StaticRouter>
  );
}

export default App;
