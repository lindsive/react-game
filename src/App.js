import React, { Component } from "react";
import Planets from "./components/Planets/";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import data from "./planets.json";

class App extends Component {
    state = {
        data,
        clicked: false,
        score: 0,
        topScore: 0
    };

    // setState of data to shuffle on load
    componentDidMount() {
        this.setState({
            data: this.shuffle(this.state.data)
        })
    };

    // shuffles images
    shuffle = (data) => {
        for (let i = data.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]]
        }
        return data;
    };

    // when player guesses correctly
    handleCorrectGuess = (clickedData) => {
        // current state of topScore and score
        let topScore = this.state;
        let score = this.state;
        // update scores accordingly
        let clickScore = score + 1;
        // check if the clickScore is greater than the current topScore
        let clickTopScore = (clickScore > topScore) ? clickScore : topScore;

        // set new state of data
        this.setState({
            data: this.shuffle(clickedData),
            score: clickScore,
            topScore: clickTopScore
        });
    }

    // set data back to start
    handleIncorrectGuess = (data) => {
        this.setState({
            data: this.shuffle(data),
            score: 0,
            clicked: false
        });
    };

    handleClick = (id) => {
        console.log("clicked" + id);
    };
    
    render() {
        return (
            <Wrapper className="wrapper">
                <Title>
                    Memory Game
                    <br />
                    Score:{this.state.score} Top Score:{this.state.totalScore}
                </Title>
                {this.state.data.map(planetobj => (

                    <Planets
                        id={planetobj.id}
                        key={planetobj.id}
                        name={planetobj.name}
                        image={planetobj.image}
                        onClick={() => this.handleClick(planetobj.id)}
                        />

                ))}
            </Wrapper>
        );
    }
}

export default App;