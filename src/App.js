import React, { Component } from "react";
import CharactersCard from "./components/charactersCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters,
    clickedOn: [],
    score: 0,
    highscore: 0,
    alert: "Click to start the game"
  };

  shuffle = (array) => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
  } 


  validation = id => {
    return this.state.clickedOn.includes(id)
  }

  removeFriend = id => {

    if (this.validation(id)) {
      console.log("Already clicked on")
      const characters = this.shuffle(this.state.characters)
      let highscore = this.state.highscore


      if (this.state.score > this.state.highscore) {
        highscore = this.state.score
      }

      this.setState({  
        score: 0,
        clickedOn: [],
        characters,
        highscore,
        alert: "You have guessed incorrectly"
      })
    } else {
      let clickedOnArray = [...this.state.clickedOn, id];
      const characters = this.shuffle(this.state.characters)

      let score = this.state.score + 1
      this.setState({ 
        characters,
        clickedOn : clickedOnArray,
        score,
        alert: "You have guessed correctly"
       });
    }


     
  };

  render() {

    console.log(this.state)
    return (
      <Wrapper>
      <header className="header">
        <h1>Clicky Game</h1>
        <h2>Super Smash Bros. Edition</h2>
      </header>

      <section className="score-panel">
        <h3>Score Panel</h3>
        <div className="score-container">
        Score : {this.state.score} | Highscore: {this.state.highscore}
        </div>
        {this.state.alert}
      </section>
        <ul className="deck">
        {this.state.characters.map(characters => (
          <CharactersCard
            removeFriend={this.removeFriend}
            id={characters.id}
            key={characters.id}
            image={characters.image}
          />
        ))}
        </ul>

      <footer className="footer">
        <p><strong>Copyright @Phuoc Phan - </strong></p>
      </footer>
      </Wrapper>

      
    );
  }

}

export default App;
