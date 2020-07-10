import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Axios from "../../axios";
import cssClass from "./Auth.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import { checkValidity } from "../../shared/utility";

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            controls: {
                email: {
                    type: "input",
                    config: {
                        type: "text",
                        name: "email",
                        placeholder: "Email Address",
                    },
                    value: "",
                    validation: {
                        isRequired: true,
                        isEmail: true,
                    },
                    valid: false,
                    touched: false,
                },
                password: {
                    type: "input",
                    config: {
                        type: "password",
                        name: "password",
                        placeholder:
                            "Password (must be atleast 6 characters or longer)",
                    },
                    value: "",
                    validation: {
                        isRequired: true,
                        minLength: 6,
                    },
                    valid: false,
                    touched: false,
                },
            },
            signupMode: false,
        };
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
        this.switchAuthModeHandler = this.switchAuthModeHandler.bind(this);
    }

    inputChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempAuthForm = { ...this.state.controls };
        tempAuthForm[name] = {
            ...tempAuthForm[name],
            value: value,
            valid: checkValidity(value, tempAuthForm[name].validation),
            touched: true,
        };
        this.setState({
            controls: tempAuthForm,
        });
    };

    formSubmitHandler = (event) => {
        event.preventDefault();
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value,
            signupMode: this.state.signupMode,
        };
        this.props.authenticate(authData);
    };

    switchAuthModeHandler = (event) => {
        this.setState((state) => ({ signupMode: !state.signupMode }));
    };

    componentDidMount() {
        if (!this.props.buildingBurger && this.props.redirectPath !== "/") {
            this.props.setAuthRedirectPath();
        }
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to={this.props.redirectPath} />;
        }
        const formArray = Object.keys(this.state.controls).map((key) => {
            return (
                <Input
                    key={key}
                    {...this.state.controls[key]}
                    onChange={this.inputChangeHandler}
                />
            );
        });
        let form = (
            <React.Fragment>
                {formArray}
                <div className={cssClass.Actions}>
                    <Button btnType="Success" clicked={this.formSubmitHandler}>
                        {this.state.signupMode ? "Sign up" : "Log in"}
                    </Button>
                    <Button
                        btnType="Danger"
                        clicked={this.switchAuthModeHandler}
                    >
                        {this.state.signupMode
                            ? "Already have a account?"
                            : "Create new account"}
                    </Button>
                </div>
            </React.Fragment>
        );
        if (this.props.authenticating) {
            form = <Spinner />;
        }
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p>{this.props.error.message}</p>;
        }
        return (
            <div className={cssClass.Auth}>
                {errorMessage}
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authenticating: state.auth.authenticating,
        isAuthenticated: state.auth.isAuthenticated,
        error: state.auth.error,
        redirectPath: state.auth.redirectPath,
        buildingBurger: state.burger.building,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (authData) => dispatch(actions.auth(authData)),
        setAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Auth, Axios));
