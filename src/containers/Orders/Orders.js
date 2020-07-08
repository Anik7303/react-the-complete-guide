import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import CssClass from "./Orders.css";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import Axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";

class Orders extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchOrders();
        // this.orderSource = axios.CancelToken.source();
        // Axios.get("/orders.json", { cancelToken: this.orderSource.token })
        //     .then((response) => {
        //         const fetchedOrders = [];
        //         for (let key in response.data) {
        //             fetchedOrders.push({ ...response.data[key], id: key });
        //         }
        //         this.setState({ orders: fetchedOrders });
        //     })
        //     .catch((err) => console.log(err));
    }

    componentWillUnmount() {
        this.orderSource.cancel();
    }

    render() {
        console.log("[Order] props: ", this.props);
        let orders = <Spinner />;
        if (this.props.orders) {
            orders = this.props.orders.map((order) => (
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

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => dispatch(actions.fetchOrders()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Orders, Axios));
