import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './Container/Home';
import Pokedex from './Container/Pokedex/Pokedex';
import PokedexJohto from './Container/JothoPokedex/JohtoPokedex';
import PokedexHoen from './Container/HoenPokedex/HoenPokedex'
import Layout from './hoc/Layout/Layout';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/hoen" exact component={PokedexHoen} />
          <Route path="/johto" exact component={PokedexJohto} />
          <Route path="/kanto" exact component={Pokedex}/>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
