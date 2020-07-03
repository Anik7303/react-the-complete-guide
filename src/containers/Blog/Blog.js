import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
// import { Route, Link, NavLink } from "react-router-dom";

import Axios from "axios";
import "./Blog.css";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";
const NewPost = asyncComponent(() => import("./NewPost/NewPost"));

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { auth: false };
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navigation-bar">
                        <ul>
                            <li>
                                <NavLink to="/posts">Posts</NavLink>
                                {/* <NavLink
                                    to="/"
                                    exact
                                    activeClassName="activeLink"
                                    activeStyle={{
                                        backgroundColor: "#eee",
                                        color: "black",
                                    }}
                                >
                                    Home
                                </NavLink> */}
                                {/* <Link to="/" exact>Home</Link> */}
                            </li>
                            <li>
                                <NavLink exact to={{ pathname: "/new-post" }}>
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* in case of 'Switch' once a match is found no other Route will be checked */}
                <Switch>
                    <Route path="/posts" component={Posts} />
                    <Route path="/new-post" exact component={NewPost} />
                    {/* {this.state.auth ? (
                        <Route path="/new-post" exact component={NewPost} />
                    ) : null} */}
                    {/* <Route path="/post/:postId" exact component={FullPost} /> */}
                    <Route render={() => <h1>Page not found!</h1>} />
                    {/* or an 404 Component */}
                    <Redirect from="/" to="/posts" />
                    {/* <Redirect to="/posts" /> */}
                    {/* <Redirect to="/" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
