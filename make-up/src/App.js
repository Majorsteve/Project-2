import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Blush from './components/Blush';
import Lipstick from './components/Lipstick';
import Bronzer from './components/Bronzer';
import Eyebrow from './components/Eyebrow';
import Eyeliner from './components/Eyeliner';
import Eyeshadow from './components/Eyeshadow';
import Foundation from './components/Foundation';
import Mascara from './components/Mascara';
import MakeupInfo from './components/MakeupInfo';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      makeUpItem: []
    }
  }

  setCurrentItem = (item) => {
    this.setState({
      makeUpItem: item
    })
    console.log(this.state.makeUpItem)
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <Route
            path="/blush"
            render={() => < Blush setCurrentItem={this.setCurrentItem} />} />
          <Route
            path="/lipstick"
            render={() => < Lipstick setCurrentItem={this.setCurrentItem} />} />
          <Route
            path="/bronzer"
            render={() => < Bronzer setCurrentItem={this.setCurrentItem} />} />
          <Route
            path="/eyebrow"
            render={() => < Eyebrow setCurrentItem={this.setCurrentItem} />} />
          <Route
            path="/eyeliner"
            render={() => < Eyeliner setCurrentItem={this.setCurrentItem} />} />
          <Route
            path="/eyeshadow"
            render={() => < Eyeshadow setCurrentItem={this.setCurrentItem} />} />
          <Route
            path="/foundation"
            render={() => < Foundation setCurrentItem={this.setCurrentItem} />} />
          <Route
            path="/mascara"
            render={() => < Mascara setCurrentItem={this.setCurrentItem} />} />
          <Route
            path="/makupitem/:id"
            render={() => < MakeupInfo makeUpItem={this.state.makeUpItem} />} />

        </main>

        <footer>
          <p>This is the footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
