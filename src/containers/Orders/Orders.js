import React from "react";
import { connect } from "react-redux";

import CssClass from "./Orders.css";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import Axios from "../../axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";

class Orders extends React.Component {
    componentDidMount() {
        this.props.fetchOrders(this.props.token);
    }

    render() {
        let orders = <Spinner />;
        if (this.props.orders) {
            orders = this.props.orders.map((order) => (
                <Order
                    key={order._id}
                    id={order._id}
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
        token: state.auth.auth.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: (token) => dispatch(actions.fetchOrders(token)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Orders, Axios));
