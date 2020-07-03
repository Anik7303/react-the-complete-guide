import React, { Component } from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import Posts from "../../containers/Blog/Posts/Posts";
import NewPost from "../../containers/Blog/Posts/NewPost/NewPost";
import FullPost from "../../containers/Blog/Posts/FullPost/FullPost";
import "./Blog.css";

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
                                    to={{ pathname: "/posts" }}
                                    exact
                                    activeClassName="active"
                                    // activeStyle={{ color: "pink" }}
                                >
                                    Home
                                </NavLink>
                                {/* <NavLink to="/">Home</NavLink> */}
                                {/* <Link to="/">Home</Link> */}
                            </li>
                            <li>
                                <NavLink
                                    to="/new-post"
                                    exact
                                    activeClassName="active"
                                >
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/posts" exact component={Posts} />
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/posts/:postId" exact component={FullPost} />
                    <Redirect to={{ pathname: "/posts" }} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
