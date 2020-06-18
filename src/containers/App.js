import React, { Component } from "react";
import CssClass from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.changeNameHandler}
                    />
                </div>
            );
        }

        return (
            <div className={CssClass.App}>
                <Cockpit
                    personsLength={this.state.persons.length}
                    showPersons={this.state.showPersons}
                    togglePersons={this.togglePersons}
                />
                {persons}
            </div>
        );
    }
}

export default App;