import React, { Component } from "react";
import Planets from "./components/Planets/";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import data from "./planets.json";

class App extends Component {
    state = {
        data,
        score: 0,
        topScore: 0,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false

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
    handleCorrectGuess = (id) => {
        // current state of topScore and score
        let topScore = this.state;
        let score = this.state;
        // update scores accordingly
        let clickScore = score + 1;
        // check if the clickScore is greater than the current topScore
        let clickTopScore = (clickScore > topScore) ? clickScore : topScore;

        // set new state of data
        this.setState({
            data: this.shuffle(data),
            score: clickScore,
            topScore: clickTopScore,
            [id]: true
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
        console.log("clicked" + id)

        if (this.state.id === true) {
            this.handleIncorrectGuess()
        } else {
            this.handleCorrectGuess()
        }

        this.setState({

           [id]: true  
        }) 
    };
    
    render() {
        return (
            <Wrapper className="wrapper">
                <Title>
                    Memory Game
                    Score:{this.state.score} Top Score:{this.state.totalScore}
                </Title>
                {this.state.data.map(planetobj => (

                    <Planets
                        id={planetobj.id}
                        key={planetobj.id}
                        name={planetobj.name}
                        image={planetobj.image}
                        onClick={this.handleClick}
                        />

                ))}
            </Wrapper>
        );
    }
}

export default App;