import React, { Component } from "react";
// import React, { useState } from "react";
import "./App.css";
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
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    changeNameHandler = (event, id) => {
        if (event && id) {
            const persons = [...this.state.persons].map((person) => {
                const temp = { ...person };
                // const temp = Object.assign({}, person);
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
        const style = {
            font: "inherit",
            border: "2px solid blue",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "50%",
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                className="person"
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
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    className="btn"
                    style={style}
                    onClick={this.togglePersons}
                >
                    {this.state.showPersons ? "Hide" : "Show"}
                </button>
                {persons}
            </div>
        );
    }
}

export default App;

// const app = (props) => {
//     const style = {
//         font: "inherit",
//         border: "2px solid blue",
//         padding: "10px 20px",
//         cursor: "pointer",
//         borderRadius: "10px",
//     };

//     const [personsState, setPersonsState] = useState({
//         persons: [
//             { id: "asdlf", name: "Max", age: 28 },
//             { id: "eghet", name: "Manu", age: 29, hobbies: ["Racing"] },
//             { id: "weqr3", name: "Stephane", age: 26 },
//         ],
//         showPersons: false,
//     });

//     const deletePerson = (personIndex) => {
//         const persons = personsState.persons.filter(
//             (person, index) => index !== personIndex
//         );
//         setPersonsState({
//             persons: persons,
//             showPersons: personsState.showPersons,
//         });
//     };

//     const changeNameHandler = (event, id) => {
//         if (event && id) {
//             const persons = personsState.persons.map((person) => {
//                 const temp = { ...person };
//                 if (temp.id === id) temp.name = event.target.value;
//                 return temp;
//             });
//             setPersonsState({
//                 persons: persons,
//                 showPersons: personsState.showPersons,
//             });
//         }
//     };

//     const togglePersons = () => {
//         const doesShow = personsState.showPersons;
//         setPersonsState({
//             persons: personsState.persons,
//             showPersons: !doesShow,
//         });
//     };

//     let persons = null;

//     if (personsState.showPersons) {
//         persons = (
//             <div>
//                 {personsState.persons.map((person, index) => {
//                     return (
//                         <Person
//                             key={person.id}
//                             className="person"
//                             name={person.name}
//                             age={person.age}
//                             click={deletePerson.bind(null, index)}
//                             changeName={(event) =>
//                                 changeNameHandler(event, person.id)
//                             }
//                         >
//                             {person.hobbies}
//                         </Person>
//                     );
//                 })}
//             </div>
//         );
//     }

//     return (
//         <div className="App">
//             <h1>Hi, I'm a React App</h1>
//             <p>This is really working!</p>
//             <button className="btn" style={style} onClick={togglePersons}>
//                 Show Persons
//             </button>
//             {persons}
//         </div>
//     );
// };

// export default app;
