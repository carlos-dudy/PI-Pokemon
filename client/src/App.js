import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home.jsx'
import CreatePoke from './components/CreatePoke.jsx'
import PokemonId from './components/PokemonId.jsx'

function App() { 

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route  path='/home' component={Home}/>
          <Route  path='/create' component={CreatePoke}/>
          <Route  exact path= '/:id' component={PokemonId}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
