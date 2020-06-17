import React from "react";

const validation = (props) => {
    let text = "Text too short";
    if (props.textLength > 5) {
        text = "Text long enough";
    }
    return (
        <div>
            <p>{text}</p>
        </div>
    );
};

export default validation;
