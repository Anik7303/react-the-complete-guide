import React from "react";

import Button from "../../../components/UI/Button/Button";
import CssClass from "./ContactData.css";
import Input from "../../../components/UI/Input/Input";

class ContactData extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.getFormsState();
        this.state = {
            orderForm: this.getFormsState(),
        };
        this.orderHandler = this.orderHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    getFormsState() {
        return {
            name: {
                type: "input",
                config: {
                    type: "text",
                    name: "name",
                    placeholder: "Your Name",
                },
                value: "",
            },
            email: {
                type: "input",
                config: {
                    type: "email",
                    name: "email",
                    placeholder: "Your E-Mail",
                },
                value: "",
            },
            street: {
                type: "input",
                config: {
                    type: "text",
                    name: "street",
                    placeholder: "Street",
                },
                value: "",
            },
            zipCode: {
                type: "input",
                config: {
                    type: "text",
                    name: "zipCode",
                    placeholder: "ZIP Code",
                },
                value: "",
            },
            country: {
                type: "input",
                config: {
                    type: "text",
                    name: "country",
                    placeholder: "Country",
                },
                value: "",
            },
            displayMethod: {
                type: "select",
                config: {
                    name: "displayMethod",
                },
                options: [
                    { value: "fastest", name: "Fastest" },
                    { value: "cheapest", name: "Cheapest" },
                ],
                value: "",
            },
        };
    }

    orderHandler(event) {
        event.preventDefault();
        this.props.order(this.state);
    }

    inputChangeHandler(event) {
        const tempOrderForm = { ...this.state.orderForm };
        tempOrderForm[event.target.name] = {
            ...tempOrderForm[event.target.name],
            value: event.target.value,
        };
        this.setState({ orderForm: tempOrderForm });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push(
                <Input
                    key={key}
                    {...this.state.orderForm[key]}
                    onChange={this.inputChangeHandler}
                />
            );
        }
        return (
            <div className={CssClass.ContactData}>
                <fieldset>
                    <legend style={{ fontSize: "1.2rem" }}>
                        <strong>Enter your contact data</strong>
                    </legend>
                    <form noValidate>
                        {formElementsArray}
                        <Button btnType="Success" clicked={this.orderHandler}>
                            Order
                        </Button>
                    </form>
                </fieldset>
            </div>
        );
    }
}

export default ContactData;
