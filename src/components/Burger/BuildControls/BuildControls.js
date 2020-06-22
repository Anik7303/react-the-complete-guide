import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import CssClass from "./BuildControls.css";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
    return (
        <div className={CssClass.BuildControls}>
            <p>
                Current Price: <strong>${props.price.toFixed(2)}</strong>
            </p>
            {controls.map((control) => (
                <BuildControl
                    key={control.label}
                    label={control.label}
                    added={() => props.addIngredient(control.type)}
                    removed={() => props.removeIngredient(control.type)}
                    disabled={props.disabled[control.type]}
                />
            ))}
            <button
                className={CssClass.OrderButton}
                disabled={!props.purchasable}
            >
                Order Now
            </button>
        </div>
    );
};

export default buildControls;
