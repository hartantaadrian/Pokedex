import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';


import Pokedex from './Container/Pokedex/Pokedex';
import PokedexJohto from './Container/JothoPokedex/JohtoPokedex';
import PokedexHoen from './Container/HoenPokedex/HoenPokedex'
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/hoen" exact component={PokedexHoen} />
          <Route path="/johto" exact component={PokedexJohto} />
          <Route path="/" exact component={Pokedex} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
