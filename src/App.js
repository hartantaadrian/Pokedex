import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';


import Pokedex from './Container/Pokedex/Pokedex';
import PokedexJohto from './Container/JothoPokedex/JohtoPokedex'
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
        <Route path="/johto" exact component={PokedexJohto} />
          <Route path="/" exact component={Pokedex} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
