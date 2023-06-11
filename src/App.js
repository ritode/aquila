import logo from './logo.svg';
import './App.css';
import DotBoard from './components/DotBoard';

function App() {
  return (
    <div className="App">
      <h1>Schematic Editor</h1>
      <div className='component'>
         <img className='component-item' src='./circuitIcons/capacitor.png' alt='capacitor'></img>
         <img className='component-item' src='./circuitIcons/resistor.png' alt='resistor'></img>
         <img className='component-item' src='./circuitIcons/battery.png' alt='battery'></img>
         <img className='component-item' src='./circuitIcons/ground.png' alt='ground'></img>
      </div>
     
     <DotBoard w={30} h={20}/>
    </div>
  );
}

export default App;
