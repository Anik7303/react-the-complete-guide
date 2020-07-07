import React from "react";

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((key) => (
        <li key={key}>
            <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
            {props.ingredients[key]}
        </li>
    ));
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>
                <strong>Total Price: ${props.price.toFixed(2)}</strong>
            </p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.cancel}>
                Cancel
            </Button>
            <Button btnType="Success" clicked={props.continue}>
                Continue
            </Button>
        </Aux>
    );
};

export default orderSummary;