import React from "react";
import PropTypes from "prop-types";

import CssClass from "./BurgerIngredient.css";

// class BurgerIngredient extends React.Component {
//     render() {
//         let ingredient = null;

//         switch (this.props.type) {
//             case "bread-bottom":
//                 ingredient = <div className={CssClass.BreadBottom}></div>;
//                 break;
//             case "bread-top":
//                 ingredient = (
//                     <div className={CssClass.BreadTop}>
//                         <div className={CssClass.Seeds1}></div>
//                         <div className={CssClass.Seeds2}></div>
//                     </div>
//                 );
//                 break;
//             case "meat":
//                 ingredient = <div className={CssClass.Meat}></div>;
//                 break;
//             case "salad":
//                 ingredient = <div className={CssClass.Salad}></div>;
//                 break;
//             case "cheese":
//                 ingredient = <div className={CssClass.Cheese}></div>;
//                 break;
//             case "bacon":
//                 ingredient = <div className={CssClass.Bacon}></div>;
//                 break;
//             default:
//                 console.log("incorrect ingredient name used");
//             // throw new Error("Wrong ingredient name used");
//         }

//         return ingredient;
//     }
// }

// BurgerIngredient.propTypes = {
//     type: PropTypes.string.isRequired,
// };

// export default BurgerIngredient;

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case "bread-bottom":
            ingredient = <div className={CssClass.BreadBottom}></div>;
            break;
        case "bread-top":
            ingredient = (
                <div className={CssClass.BreadTop}>
                    <div className={CssClass.Seeds1}></div>
                    <div className={CssClass.Seeds2}></div>
                </div>
            );
            break;
        case "meat":
            ingredient = <div className={CssClass.Meat}></div>;
            break;
        case "salad":
            ingredient = <div className={CssClass.Salad}></div>;
            break;
        case "cheese":
            ingredient = <div className={CssClass.Cheese}></div>;
            break;
        case "bacon":
            ingredient = <div className={CssClass.Bacon}></div>;
            break;
        default:
            console.log("incorrect ingredient name used");
        // throw new Error("Wrong ingredient name used");
    }

    return ingredient;
};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default burgerIngredient;
