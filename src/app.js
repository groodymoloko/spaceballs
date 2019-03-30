import React, { Component } from 'react';
import './app.css';
import './components/jumbotron';
import Jumbo from './components/jumbotron';
import characters from './characters.json';
import Card from './components/card';
import Row from 'react-bootstrap/Row';

// Shuffle an array into a random order
let shuffleArray = array => {
  array.sort(() => Math.random() - 0.5);
  return array;
};

class App extends Component {

  state = {
    characters,
    currentScore: 0,
    highScore: 0,
    message: "Click each pic only once or die",
    clicked: [],
    
  };

  newShuffle = () => {
    let shuffledArray = shuffleArray(characters);
    this.setState({ characters: shuffledArray });
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: "Nice. May the Schwartz be with you...."
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    } 
    this.newShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      message: "Be more careful next time, Major Asshole!",
      clicked: []
    });
    this.newShuffle();
  };

  render() {
    return (
      
      <div>
        
        <Jumbo
          score={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />
          
        <Row className="main-display">
            {this.state.characters.map(character => (
                  <Card
                    key={character.id}
                    handleClick={this.handleClick}
                    handleIncrement={this.handleIncrement}
                    handleReset={this.handleReset}
                    newShuffle={this.newShuffle}
                    id={character.id}
                    image={character.image}
                  />
              ))}
        </Row >

      </div>
    );
  }
}

export default App;
