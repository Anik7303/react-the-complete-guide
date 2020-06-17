import React, { Component } from "react";
// import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 28 },
            { name: "Manu", age: 29, hobbies: ["Racing"] },
            { name: "Stephane", age: 26 },
        ],
        otherState: "some other state value",
        showPersons: false,
    };

    switchStateHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 27 },
                { name: "Manu", age: 29, hobbies: ["Racing"] },
                { name: "Stephane", age: 26 },
            ],
        });
    };

    changeNameHandler = (event) => {
        if (event) {
            this.setState({
                persons: [
                    { name: "Max", age: 28 },
                    { name: event.target.value, age: 29 },
                    { name: "Stephane", age: 26 },
                ],
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
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button style={style} onClick={this.togglePersons}>
                    {this.state.showPersons ? "Hide" : "Show"}
                </button>
                {this.state.showPersons ? (
                    <div>
                        <Person
                            className="person"
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                        />
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={() => this.switchStateHandler("Max!!")} // don't use this, this can be inefficient
                            changeName={this.changeNameHandler}
                        >
                            My Hobbies: Racing
                        </Person>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                        />
                    </div>
                ) : null}
            </div>
        );
    }
}

export default App;

// const app = (props) => {
//     const [personsState, setPersonsState] = useState({
//         persons: [
//             { name: "Max", age: 28 },
//             { name: "Manu", age: 29, hobbies: ["Racing"] },
//             { name: "Stephane", age: 26 },
//         ],
//     });

//     const [otherState, setOtherState] = useState("some other state");

//     const switchNameHandler = () => {
//         setPersonsState({
//             persons: [
//                 { name: "Maximilian", age: 28 },
//                 { name: "Manu", age: 29, hobbies: ["Racing"] },
//                 { name: "Stephane", age: 27 },
//             ],
//         });
//     };

//     console.log(personsState, otherState);

//     return (
//         <div className="App">
//             <h1>Hi, I'm a React App</h1>
//             <p>This is really working!</p>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person
//                 className="person"
//                 name={personsState.persons[0].name}
//                 age={personsState.persons[0].age}
//             />
//             <Person
//                 name={personsState.persons[1].name}
//                 age={personsState.persons[1].age}
//             >
//                 My Hobbies: Racing
//             </Person>
//             <Person
//                 name={personsState.persons[2].name}
//                 age={personsState.persons[2].age}
//             />
//         </div>
//     );
// };

// export default app;
