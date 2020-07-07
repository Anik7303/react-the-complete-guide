import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterInput from "../../components/CounterInput/CounterInput";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { userInput: 0 };
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    }

    onInputChangeHandler(event) {
        if (event && event.target.value) {
            const value = event.target.value;
            this.setState({ userInput: parseInt(value, 10) });
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterInput
                    value={this.state.userInput}
                    onInputChange={this.onInputChangeHandler}
                />
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}
                />
                <CounterControl
                    label="Add"
                    clicked={() =>
                        this.props.onAddCounter(this.state.userInput)
                    }
                />
                <CounterControl
                    label="Subtract"
                    clicked={() =>
                        this.props.onSubtractCounter(this.state.userInput)
                    }
                />
                <hr />
                <button
                    style={{
                        width: "auto",
                        maring: "10px auto",
                        padding: "10px 15px",
                        fontSize: "1.2rem",
                        backgroundColor: "yellowgreen",
                        color: "white",
                        outline: "none",
                        borderRadius: "5px",
                        border: "2px solid green",
                        boxSizing: "border-box",
                        boxShadow: "0 2px 3px rgba(0, 255, 0, 0.3)",
                    }}
                    onClick={() => this.props.onStoreResult(this.props.counter)}
                >
                    Store Result
                </button>
                <ul
                    style={{
                        width: "50%",
                        margin: "auto",
                        padding: "10px",
                        listStyle: "none",
                    }}
                >
                    {this.props.results.map((result) => {
                        return (
                            <li
                                key={result._id}
                                style={{
                                    padding: "16px 8px",
                                    margin: "16px auto",
                                    border: "2px solid rgb(128, 128, 0)",
                                    borderRadius: "5px",
                                    boxSizing: "border-box",
                                }}
                                onClick={() =>
                                    this.props.onDeleteResult(result._id)
                                }
                            >
                                {result.counter}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterState.counter,
        results: state.resultsState.results,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: (value) =>
            dispatch({ type: actionTypes.ADD, value: value }),
        onSubtractCounter: (value) =>
            dispatch({ type: actionTypes.SUBTRACT, value: value }),
        onStoreResult: (counter) =>
            dispatch({ type: actionTypes.STORE_RESULT, counter: counter }),
        onDeleteResult: (id) =>
            dispatch({ type: actionTypes.DELETE_RESULT, id: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
