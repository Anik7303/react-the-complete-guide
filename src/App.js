import React, { Component } from "react";
import CssClass from "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { id: "asdlf", name: "Max", age: 28 },
            { id: "eghet", name: "Manu", age: 29, hobbies: ["Racing"] },
            { id: "weqr3", name: "Stephane", age: 26 },
        ],
        showPersons: false,
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    changeNameHandler = (event, id) => {
        if (event && id) {
            const persons = [...this.state.persons].map((person) => {
                const temp = { ...person };
                if (temp.id === id) {
                    temp.name = event.target.value;
                }
                return temp;
            });
            this.setState({
                persons: persons,
            });
        }
    };

    togglePersons = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow,
        });
    };

    render() {
        let persons = null;
        let btnStyle = CssClass.btn;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                click={this.deletePersonHandler.bind(
                                    null,
                                    index
                                )}
                                changeName={(event) =>
                                    this.changeNameHandler(event, person.id)
                                }
                            >
                                {person.hobbies}
                            </Person>
                        );
                    })}
                </div>
            );
            btnStyle = [btnStyle, CssClass.red].join(" ");
        }

        return (
            <div className={CssClass.App}>
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button className={btnStyle} onClick={this.togglePersons}>
                    {this.state.showPersons ? "Hide" : "Show"}
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
