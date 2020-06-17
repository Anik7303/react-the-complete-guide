import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
    state = {
        userInput: "",
    };

    showLengthHandler = (event) => {
        this.setState({
            userInput: event.target.value,
        });
    };

    deleteCharHandler = (event, index) => {
        const chars = this.state.userInput.split("");
        chars.splice(index, 1);
        this.setState({
            userInput: chars.join(""),
        });
    };

    render() {
        const inputStyle = {
            backgroundColor: "#eee",
            font: "inherit",
            fontSize: "1.2rem",
            border: "2px solid yellowgreen",
            borderRadius: "5px",
            padding: "5px 10px",
            width: "300px",
        };

        let charComponents = null;
        if (this.state.userInput.length > 0) {
            charComponents = (
                <div>
                    {[...this.state.userInput].map((letter, index) => {
                        return (
                            <CharComponent
                                key={index}
                                letter={letter}
                                click={(event) =>
                                    this.deleteCharHandler(event, index)
                                }
                            />
                        );
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h2>04 - Lists & Conditionals</h2>
                <h3>Assignment</h3>
                <input
                    style={inputStyle}
                    type="text"
                    onChange={this.showLengthHandler}
                    value={this.state.userInput}
                />
                <p>{this.state.userInput}</p>
                <ValidationComponent textLength={this.state.userInput.length} />
                {charComponents}
            </div>
        );
    }
}

export default App;
