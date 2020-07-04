import React from "react";

import CssClass from "./Order.css";

const order = (props) => {
    const ingredients = Object.keys(props.ingredients).map((ingredient) => (
        <span key={ingredient} className={CssClass.ingredient}>
            {ingredient} ({props.ingredients[ingredient]})
        </span>
    ));
    return (
        <div className={CssClass.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>
                Price:{" "}
                <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
            </p>
        </div>
    );
};

export default order;
