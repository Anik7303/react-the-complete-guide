import React from "react";

import Button from "../../../components/UI/Button/Button";
import CssClass from "./ContactData.css";

class ContactData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            street: "",
            postalCode: "",
            deliveryMethod: "fastest",
        };
        this.orderHandler = this.orderHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    orderHandler(event) {
        event.preventDefault();
        this.props.order(this.state);
    }

    inputChangeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className={CssClass.ContactData}>
                <fieldset>
                    <legend>Enter your contact data</legend>
                    <form noValidate>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={this.state.name}
                            onChange={this.inputChangeHandler}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Mail"
                            value={this.state.email}
                            onChange={this.inputChangeHandler}
                        />
                        <input
                            type="text"
                            name="street"
                            placeholder="Street"
                            value={this.state.street}
                            onChange={this.inputChangeHandler}
                        />
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal Code"
                            value={this.state.postalCode}
                            onChange={this.inputChangeHandler}
                        />
                        <select
                            name="deliveryMethod"
                            title="Delivery Method"
                            value={this.state.deliveryMethod}
                            onChange={this.inputChangeHandler}
                        >
                            <option value="fastest">Fastest</option>
                            <option value="fast">Fast</option>
                            <option value="cheapset">Cheapest</option>
                        </select>
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
