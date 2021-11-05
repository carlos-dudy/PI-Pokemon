import React, {useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getPokemons, getTypes} from './actions/index'
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home.jsx'
import CreatePoke from './components/CreatePoke.jsx'
import PokemonId from './components/PokemonId.jsx'

function App() { 

  const dispatch = useDispatch();
  useEffect(() =>{
    const start = async() => {
      await dispatch(getTypes());
      dispatch(getPokemons())
    }
    start()
  }, [dispatch])

  
  return (
    <BrowserRouter>
      <div>
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
