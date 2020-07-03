import React, { Component, Suspense, lazy } from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from "../../containers/Blog/Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent";

const NewPost = lazy(() => import("./Posts/NewPost/NewPost"));
const FullPost = asyncComponent(() => import("./Posts/FullPost/FullPost"));

class Blog extends Component {
    render() {
        console.log("[Blog] props: ", this.props, " | state: ", this.state);
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to={{ pathname: "/posts" }}
                                    activeClassName="active"
                                    // activeStyle={{ color: "pink" }}
                                >
                                    Home
                                </NavLink>
                                {/* <NavLink to="/">Home</NavLink> */}
                                {/* <Link to="/">Home</Link> */}
                            </li>
                            <li>
                                <NavLink exact to="/new-post">
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/posts" exact component={Posts} />
                    <Route
                        path="/new-post"
                        exact
                        render={() => (
                            <Suspense fallback={<div>Loading...</div>}>
                                <NewPost {...this.props} />
                            </Suspense>
                        )}
                    />
                    <Route path="/posts/:postId" exact component={FullPost} />
                    <Redirect from="/" to={{ pathname: "/posts" }} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
