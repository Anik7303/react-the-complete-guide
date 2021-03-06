import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const logout = (props) => {
    props.onLogout();
    return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.logout()),
    };
};

export default connect(null, mapDispatchToProps)(logout);
