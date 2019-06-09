import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import Alert from "./components/Alert";
import friends from "./friends.json";

class App extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    friends,
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
      const friends = this.shuffle(this.state.friends)
      let highscore = this.state.highscore


      if (this.state.score > this.state.highscore) {
        highscore = this.state.score
      }

      this.setState({  
        score: 0,
        clickedOn: [],
        friends,
        highscore,
        alert: "You have guessed incorrectly"
      })
    } else {
      let clickedOnArray = [...this.state.clickedOn, id];
      const friends = this.shuffle(this.state.friends)

      let score = this.state.score + 1
      this.setState({ 
        friends,
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
        <Title>Friends List</Title>
        <Score>Score : {this.state.score} | Highscore: {this.state.highscore}</Score>
        <Alert>{this.state.alert}</Alert>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>

      
    );
  }

}

export default App;
