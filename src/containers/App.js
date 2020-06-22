import React from "react";
import CssClass from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import WithClass from "../components/hoc/WithClass";
import withClass from "../components/hoc/withClass";
import Aux from "../components/hoc/Auxiliary";
import AuthContext from "../context/auth-context";

class App extends React.Component {
    state = {
        persons: [
            { id: "asdlf", name: "Max", age: 28 },
            { id: "eghet", name: "Manu", age: 29, hobbies: ["Racing"] },
            { id: "weqr3", name: "Stephane", age: 26 },
        ],
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false,
    };

    // Mounting Lifecycle
    // - constructor(props)
    // - getDerivedStateFromProps(props, state)
    // - render()
    // - componentDidMount()

    constructor(props) {
        super(props);
        console.log("[App.js] constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("[App.js] getDerivedStateFromProps", props);
        return state;
    }

    componentDidMount() {
        console.log("[App.js] componentDidMount");
    }

    // Updating Lifecycle
    // - getDerivedStateFromProps(props, state)
    // - shouldComponentUpdate(nextProps, nextState)
    // - render()
    // - getSnapshotBeforeUpdate(prevProps, prevState)
    // - componentDidUpdate(prevProps, prevState, snapshot)

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[App.js] shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const snapshot = null;
        console.log("[App.js] getSnapshotBeforeUpdate");
        return snapshot;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[App.js] componentDidUpdate");
    }

    // Unmounting Lifecycle
    // - componentWillUnmount

    componentWillUnmount() {
        console.log("[App.js] componentWillUnmount");
    }

    // Error Handling lifecycle
    // - getDerivedStateFromProps(props, state)
    // - componentDidCatch(error, info)

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
            this.setState((prevState, props) => {
                return {
                    persons: persons,
                    changeCounter: prevState.changeCounter + 1,
                };
            });
        }
    };

    togglePersons = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow,
        });
    };

    loginHandler = () => {
        this.setState({ authenticated: true });
    };

    render() {
        console.log("[App.js] render");
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                // <div>
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.changeNameHandler}
                />
                // </div>
            );
        }

        let cockpit = null;
        // const cockpitStyle = {
        //     backgroundColor: "yellowgreen",
        //     color: "darkgreen",
        //     fontSize: "1.5rem",
        //     fontWeight: "bold",
        //     padding: "10px 20px",
        //     margin: "10px auto 0",
        //     boxShadow: "3px 3px 3px lightgreen",
        //     borderRadius: "3px",
        //     cursor: "pointer",
        // };
        if (this.state.showCockpit) {
            cockpit = (
                <div>
                    <Cockpit
                        title={this.props.appname}
                        personsLength={this.state.persons.length}
                        showPersons={this.state.showPersons}
                        togglePersons={this.togglePersons}
                    />
                </div>
            );
        }

        return (
            // <WithClass classes={CssClass.App}>
            <Aux>
                <button
                    // style={cockpitStyle}
                    className={CssClass.btn}
                    onClick={() => {
                        this.setState({ showCockpit: !this.state.showCockpit });
                    }}
                >
                    Toggle Cockpit
                </button>
                <AuthContext.Provider
                    value={{
                        authenticated: this.state.authenticated,
                        login: this.loginHandler,
                    }}
                >
                    {cockpit}
                    {persons}
                </AuthContext.Provider>
            </Aux>
            // </WithClass>
        );
    }
}

export default withClass(App, CssClass.App);
