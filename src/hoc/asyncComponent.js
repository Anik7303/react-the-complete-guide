import React from "react";

const asyncComponent = (importComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { component: null };
        }

        componentDidMount() {
            importComponent()
                .then((component) => {
                    this.setState({
                        component: component.default,
                    });
                })
                .catch((err) => console.log(err));
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    };
};

export default asyncComponent;
