import React from "react";

import "./CounterInput.css";

const counterInput = (props) => (
    <div className="CounterInput">
        <input
            type="number"
            name="counter-input"
            value={props.value}
            onChange={props.onInputChange}
        />
    </div>
);

export default counterInput;
