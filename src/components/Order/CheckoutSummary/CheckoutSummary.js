import React from "react";

import CssClass from "./CheckoutSummary.css";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = (props) => {
    return (
        <div className={CssClass.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{ width: "100%", margin: "auto" }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>
                Cancel
            </Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>
                Continue
            </Button>
        </div>
    );
};

export default checkoutSummary;
