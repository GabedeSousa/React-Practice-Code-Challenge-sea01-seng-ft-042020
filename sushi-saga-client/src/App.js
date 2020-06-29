import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
 const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    currentSushi: [],
    emptyPlates: [],
    wallet: 100

  }
  componentDidMount() {
    this.fetchSushi()
  }

  getNextSushi = () => {
    this.setState( prev =>{
      return {
        sushi: prev.sushi.slice(4),
        currentSushi: prev.sushi.slice(0,4)
      }
    })
  }

  sushiIsEaten = (sushi) => {
    return this.state.emptyPlates.includes(sushi)
  }

  fetchSushi = () =>{
    fetch(API)
    .then(resp => resp.json())
    .then(allSushi => {
      this.setState({
        sushi: allSushi
      }, this.getNextSushi)
    })
  }

  eatSushi = (eatenSushi) => {
    if(eatenSushi.price <= this.state.wallet && !this.sushiIsEaten(eatenSushi))
    this.setState(prev => {
      return { emptyPlates: [...prev.emptyPlates, eatenSushi] , wallet: prev.wallet - eatenSushi.price}
    })
  }
  render() { 
    return (
      <div className="app">
        <SushiContainer  
        onEatSushi={this.eatSushi} 
        currentSushi={this.state.currentSushi} 
        ongetNextSushi={this.getNextSushi}
        sushiIsEaten={this.sushiIsEaten}/>
        
        <Table  wallet={this.state.wallet} emptyPlates={this.state.emptyPlates}/>
      </div>
    );
  }
}

export default App;