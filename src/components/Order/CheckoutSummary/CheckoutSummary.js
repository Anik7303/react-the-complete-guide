import React from "react";

import cssClass from "./CheckoutSummary.css";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = (props) => {
    return (
        <div>
            <h1>We hope it tastes well!</h1>
            <div style={{ width: "100%", margin: "auto" }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked>
                Cancel
            </Button>
            <Button btnType="Success" clicked>
                Continue
            </Button>
        </div>
    );
};

export default checkoutSummary;
