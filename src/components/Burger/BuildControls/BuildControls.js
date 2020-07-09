import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import CssClass from "./BuildControls.css";
import { INGREDIENTS } from "../Ingredients/ingredients";

const controls = [
    { label: "Bacon", type: INGREDIENTS.BACON },
    { label: "Cheese", type: INGREDIENTS.CHEESE },
    { label: "Meat", type: INGREDIENTS.MEAT },
    { label: "Salad", type: INGREDIENTS.SALAD },
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
                onClick={props.ordering}
            >
                {props.isAuth ? "Order Now" : "LOG IN TO ORDER"}
            </button>
        </div>
    );
};

export default buildControls;
