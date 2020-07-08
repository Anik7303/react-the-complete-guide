import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import CssClass from "./Burger.css";

const processIngredients = (ingredients) => {
    return Object.keys(ingredients)
        .map((inKey) => {
            return [...Array(ingredients[inKey])].map((_, index) => (
                <BurgerIngredient key={inKey + index} type={inKey} />
            ));
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
};

const burger = (props) => {
    let ingredients = processIngredients(props.ingredients);
    if (ingredients.length === 0) {
        ingredients = <p>Please add ingredients</p>;
    }
    return (
        <div className={CssClass.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
