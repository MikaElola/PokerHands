import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HandTable from './components/HandTable';
import Analyst from './components/Analyst';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cardDeck : [],
      hand1 : [],
      hand2 : [],
      hand3 : [],
      newDeck: [],
      newHand: [],
      deckNmbr: 0,
      testHand: [
        {number: 6,
        suite: 'Clubs',
        color: 'Black'},
        {number: 10,
          suite: 'Spades',
          color: 'Black'},
          {number: 13,
            suite: 'Hearts',
            color: 'Red'},
            {number: 7,
              suite: 'Clubs',
              color: 'Black'},
              {number: 2,
                suite: 'Diamonds',
                color: 'Red'},

      ]
    }
  }

  newDeck = () => {
    let i = 0; 
    for(i = 1; i < 53; i++){
        if(i < 14){
            var newCard = {
            number : i,
            suit : 'Hearts',
            color : 'Red',
            }
          this.state.newDeck.push(newCard);
        }
        if(i > 13 && i < 27){
          newCard = {
          number : i - 13,
          suit : 'Spades',
          color : 'Black',
          }
        this.state.newDeck.push(newCard);
        }
        if(i > 26 && i < 40){
          newCard = {
          number : i - 26,
          suit : 'Diamonds',
          color : 'Red',
          }
        this.state.newDeck.push(newCard);
        }
        if(i > 39 && i < 53 ){
          newCard = {
          number : i - 39,
          suit : 'Clubs',
          color : 'Black',
          }
        this.state.newDeck.push(newCard);
      }

    }
      this.setState({
        cardDeck : this.state.newDeck,
        deckNmbr : this.state.deckNmbr + 1
      })
    }

    dealHands = () => {
        if(this.state.cardDeck.length === 0){
          alert("Tyhjä pakka, lisää ensin pakka!")
          return;
        }
      let min = Math.ceil(0);
      let max = Math.floor(this.state.cardDeck.length-1);
      let j = 0;
      let i = 0;
      for(i = 0; i < 5; i++){
        j = Math.floor(Math.random() * (max - min + 1)) + min;
        this.state.newHand.push(this.state.cardDeck[j]);
        this.state.cardDeck.splice(j,1);
        max = Math.floor(this.state.cardDeck.length-1);
      }
      if (this.state.hand1.length < 5){
        this.setState({
          hand1 : this.state.newHand,
          newHand : []
        })
      }
      if (this.state.hand1.length > 4 && this.state.hand2.length === 0){
        this.setState({
          hand2 : this.state.newHand,
          newHand : []
        })
      }
      if (this.state.hand1.length > 4 && this.state.hand2.length > 4 && this.state.hand3.length === 0){
        this.setState({
          hand3 : this.state.newHand,
          newHand : []
        })
        }
      if (this.state.hand1.length === 5 && this.state.hand2.length === 5 && this.state.hand3.length === 5){
          alert("Kaikki kädet on jo jaettu!") 
      }
    }

    nollaa = () =>{
      this.setState({
      cardDeck : [],
      newDeck: [],
      hand1 : [],
      hand2 : [],
      hand3 : [],
      deckNmbr: 0
      })
    }

  render() {
    return (
      <div className="App">
      <header>
        <h1>Poker Hand - Analyzer</h1>
      </header>
        <div>
        <button className='deck' onClick={this.newDeck} >Lisää Pakka</button> <p className="deckNmbr">Nyt pelaat {this.state.deckNmbr} pakalla</p> 
        <button onClick={this.nollaa}>Reset</button>
        <button className='deal' onClick={this.dealHands} >Deal</button>  
        </div>
        <div>
            <HandTable hand1={this.state.hand1} hand2={this.state.hand2} hand3={this.state.hand3}></HandTable>
          </div>
            <Analyst testHand={this.state.testHand} hand1={this.state.hand1} hand2={this.state.hand2} hand3={this.state.hand3}></Analyst>

      </div>
    );
  }
}

export default App;
