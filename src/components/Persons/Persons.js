import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log("[Persons.js] constructor");
        this.state = {};
    }

    static getDerivedStateFromProps(props, state) {
        console.log("[Persons.js] getDerivedStateFromProps", props);
        return state;
    }

    componentDidMount() {
        console.log("[Persons.js] componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Persons.js] shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const snapshot = null;
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return snapshot;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.js] componentDidUpdate", snapshot);
    }

    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount");
    }

    componentDidCatch(error, info) {
        console.log("[Persons.js] componentDidCatch");
    }

    render() {
        console.log("[Persons.js] render");
        return this.props.persons.map((person, index) => (
            <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changeName={(event) => this.props.changed(event, person.id)}
            >
                {person.hobbies}
            </Person>
        ));
    }
}

export default Persons;

// const persons = (props) => {
//     console.log("[Persons.js] rendering...");
//     return props.persons.map((person, index) => (
//         <Person
//             key={person.id}
//             name={person.name}
//             age={person.age}
//             click={() => props.clicked(index)}
//             changeName={(event) => props.changed(event, person.id)}
//         >
//             {person.hobbies}
//         </Person>
//     ));
// };

// export default persons;
