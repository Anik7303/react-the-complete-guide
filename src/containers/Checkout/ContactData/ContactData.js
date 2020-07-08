import React from "react";
import { connect } from "react-redux";

import Axios from "../../../axios";
import Button from "../../../components/UI/Button/Button";
import CssClass from "./ContactData.css";
import Input from "../../../components/UI/Input/Input";
import Spinner from "../../../components/UI/Spinner/Spinner";
import * as actions from "../../../store/actions/index";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

class ContactData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderForm: this.getFormsState(),
            isFormValid: false,
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
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                type: "input",
                config: {
                    type: "email",
                    name: "email",
                    placeholder: "Your E-Mail",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            street: {
                type: "input",
                config: {
                    type: "text",
                    name: "street",
                    placeholder: "Street",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            zipCode: {
                type: "input",
                config: {
                    type: "text",
                    name: "zipCode",
                    placeholder: "ZIP Code",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 10,
                },
                valid: false,
                touched: false,
            },
            country: {
                type: "input",
                config: {
                    type: "text",
                    name: "country",
                    placeholder: "Country",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                type: "select",
                config: {
                    name: "deliveryMethod",
                },
                options: [
                    { value: "fastest", name: "Fastest" },
                    { value: "cheapest", name: "Cheapest" },
                ],
                value: "fastest",
                validation: {},
                valid: true,
            },
        };
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) return true;

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if (rules.minLength) {
            isValid = value.trim().length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.trim().length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChangeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;
        const tempOrderForm = { ...this.state.orderForm };
        let isFormValid = true;
        for (let key in tempOrderForm) {
            isFormValid = tempOrderForm[key].valid && isFormValid;
        }
        tempOrderForm[name] = {
            ...tempOrderForm[name],
            value: value,
            valid: this.checkValidity(value, tempOrderForm[name].validation),
            touched: true,
        };
        this.setState({ orderForm: tempOrderForm, isFormValid: isFormValid });
    }

    orderHandler(event) {
        event.preventDefault();
        const orderForm = this.state.orderForm;
        const orderObj = {
            ingredients: { ...this.props.ingredients },
            price: this.props.price.toFixed(2),
            orderData: {
                name: orderForm.name.value,
                address: {
                    street: orderForm.street.value,
                    zipCode: orderForm.zipCode.value,
                    country: orderForm.country.value,
                },
                email: orderForm.email.value,
            },
            deliveryMethod: orderForm.deliveryMethod.value,
        };
        this.props.onStoreOrder(orderObj);
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
        return this.props.loading ? (
            <Spinner />
        ) : (
            <div className={CssClass.ContactData}>
                <fieldset>
                    <legend style={{ fontSize: "1.2rem" }}>
                        <strong>Enter your contact data</strong>
                    </legend>
                    <form onSubmit={this.orderHandler} noValidate>
                        {formElementsArray}
                        <Button
                            btnType="Success"
                            disabled={!this.state.isFormValid}
                        >
                            Order
                        </Button>
                    </form>
                </fieldset>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burger.ingredients,
        price: state.burger.price,
        loading: state.order.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStoreOrder: (order) => dispatch(actions.purchaseBurger(order)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(ContactData, Axios));
