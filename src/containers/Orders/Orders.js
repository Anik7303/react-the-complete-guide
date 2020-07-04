import React from "react";

import CssClass from "./Orders.css";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import Axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = { orders: null };
    }
    componentDidMount() {
        Axios.get("/orders.json")
            .then((response) => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({ ...response.data[key], id: key });
                }
                this.setState({ orders: fetchedOrders });
            })
            .catch((err) => console.log(err));
    }

    render() {
        let orders = <Spinner />;
        if (this.state.orders) {
            orders = this.state.orders.map((order) => (
                <Order
                    key={order.id}
                    id={order.id}
                    ingredients={order.ingredients}
                    price={order.price}
                />
            ));
        }
        return <div className={CssClass.Orders}>{orders}</div>;
    }
}

export default withErrorHandler(Orders, Axios);
