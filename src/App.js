import './App.css';
import { CountryCapitalGame } from './components/country-capital-game/country-capital-game'
import { capitals } from './data/capitals'
import { Header } from './components/header/header'

function App() {
  return (
    <div className="App">
      <Header/>
      <CountryCapitalGame inputData={capitals}/>
    </div>
  );
}

export default App;
