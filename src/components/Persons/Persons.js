import React from "react";

import Person from "./Person/Person";

const persons = (props) =>
    props.persons.map((person, index) => (
        <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={() => props.clicked(index)}
            changeName={(event) => props.changed(event, person.id)}
        >
            {person.hobbies}
        </Person>
    ));

export default persons;
