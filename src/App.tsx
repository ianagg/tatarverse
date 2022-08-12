import './css/particles.css'

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
    <div className="container" style={{ backgroundColor: backgroundColor }}>
      <img className='background' src={require('./images/background.png')}/>
      {particles}
    </div>
  );
}

export default App;
