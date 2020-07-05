import React from "react";

import CssClass from "./Input.css";

const input = (props) => {
    console.log("[Input] props: ", props);
    let inputElement = null;
    switch (props.type) {
        case "input":
            inputElement = (
                <input
                    className={CssClass.InputElement}
                    id={props.config.name}
                    {...props.config}
                    value={props.value}
                    onChange={props.onChange}
                />
            );
            break;
        case "textarea":
            inputElement = (
                <textarea
                    className={CssClass.InputElement}
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
                    className={CssClass.InputElement}
                    id={props.config.name}
                    {...props.config}
                    value={props.value}
                    onChange={props.onChange}
                >
                    {options}
                </select>
            );
            break;
        default:
            inputElement = (
                <input
                    className={CssClass.InputElement}
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
