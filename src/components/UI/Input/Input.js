import React from "react";

import CssClass from "./Input.css";

const input = (props) => {
    let inputElement = null;
    let inputClasses = [CssClass.InputElement];
    if (props.touched && !props.valid) {
        inputClasses.push(CssClass.Invalid);
    }
    switch (props.type) {
        case "textarea":
            inputElement = (
                <textarea
                    className={inputClasses.join(" ")}
                    id={props.config.name}
                    {...props.config}
                    value={props.value}
                    onChange={props.onChange}
                />
            );
            break;
        case "select":
            const options = props.options.map((option) => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                );
            });
            inputElement = (
                <select
                    className={inputClasses.join(" ")}
                    id={props.config.name}
                    {...props.config}
                    value={props.value}
                    onChange={props.onChange}
                >
                    {options}
                </select>
            );
            break;
        case "input":
        default:
            inputElement = (
                <input
                    className={inputClasses.join(" ")}
                    id={props.config.name}
                    {...props.config}
                    value={props.value}
                    onChange={props.onChange}
                />
            );
    }

    return (
        <div className={CssClass.Input}>
            {props.label && (
                <label
                    className={CssClass.Label}
                    htmlFor={props.attributes.name}
                >
                    {props.label}
                </label>
            )}
            {inputElement}
        </div>
    );
};

export default input;
