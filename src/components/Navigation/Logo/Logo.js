import React from "react";

import BurgerLogo from "../../../assets/images/burger-logo.png";
import CssClass from "./Logo.css";

const logo = (props) => (
    <div className={CssClass.Logo}>
        <img src={BurgerLogo} alt="Burger Logo" />
    </div>
);

export default logo;
