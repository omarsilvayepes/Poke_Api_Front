import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header';
import PokemonsList from './PokemonsList';
import AddPokemon from './AddPokemon';

import "../styles/App.css";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>          
          <Route path="/" exact component={PokemonsList} />
          <Route path="/upload" component={AddPokemon} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;