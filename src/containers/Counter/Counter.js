import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
    state = {
        counter: 0,
    };

    counterChangedHandler = (action, value) => {
        switch (action) {
            case "dec":
                this.setState((prevState) => {
                    return { counter: prevState.counter - 1 };
                });
                break;
            case "add":
                this.setState((prevState) => {
                    return { counter: prevState.counter + value };
                });
                break;
            case "sub":
                this.setState((prevState) => {
                    return { counter: prevState.counter - value };
                });
                break;
            case "inc":
            default:
                this.setState((prevState) => {
                    return { counter: prevState.counter + 1 };
                });
        }
    };

    render() {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}
                />
                <CounterControl
                    label="Add 5"
                    clicked={() => this.props.onAddCounter(5)}
                />
                <CounterControl
                    label="Subtract 5"
                    clicked={() => this.props.onSubtractCounter(5)}
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
                    onClick={this.props.onStoreResult}
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
                                    width: "100%",
                                    padding: "5px 10px",
                                    margin: "10px auto",
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
    return { counter: state.counter, results: state.results };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: (value) =>
            dispatch({ type: actionTypes.ADD, value: value }),
        onSubtractCounter: (value) =>
            dispatch({ type: actionTypes.SUBTRACT, value: value }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: (id) =>
            dispatch({ type: actionTypes.DELETE_RESULT, id: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
