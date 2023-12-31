
import './App.css';
import {Canvas} from './components/Canvas';
import {Header} from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className = 'container'>
    <Canvas></Canvas>
      </div>
    </div>
  );
}

export default App;
