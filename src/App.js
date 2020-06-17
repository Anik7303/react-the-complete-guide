import React, { Component } from "react";
// import React, { useState } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
    state = {
        user: {
            name: "Anik",
        },
    };

    updateUsernameHandler(event) {
        if (!event) {
            return;
        }
        this.setState({
            user: {
                name: event.target.value,
            },
        });
    }

    render() {
        return (
            <div className="App">
                <UserInput
                    updateUsername={this.updateUsernameHandler.bind(this)}
                    username={this.state.user.name}
                />
                <UserOutput
                    textOne="The first user-output component"
                    username={this.state.user.name}
                />
                <UserOutput
                    textOne="The second user-output component"
                    username="Max"
                />
            </div>
        );
    }
}

// const App = (props) => {
//     const [userState, setUserState] = useState({
//         user: {
//             name: "Anik",
//             email: "anik@test.com",
//         },
//     });

//     const updateUsernameHandler = (event) => {
//         if (!event) {
//             return;
//         }
//         setUserState({
//             user: {
//                 name: event.target.value,
//                 email: "anik@test.com",
//             },
//         });
//     };

//     return (
//         <div className="App">
//             <UserInput
//                 updateUsername={updateUsernameHandler.bind(this)}
//                 username={userState.user.name}
//             />
//             <UserOutput
//                 textOne="The first user-output component"
//                 username={userState.user.name}
//             />
//             <UserOutput
//                 textOne="The second user-output component"
//                 username="Max"
//             />
//         </div>
//     );
// };

export default App;
