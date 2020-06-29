import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
// import { Route, Link, NavLink } from "react-router-dom";

import Axios from "axios";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: null,
    };

    postDeleteHandler = () => {
        const index = this.state.posts.findIndex(
            (post) => post.id === this.state.selectedPostId
        );
        Axios.delete(`/posts/${this.state.posts[index].id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        const updatedPosts = [...this.state.posts];
        updatedPosts.splice(index, 1);
        this.setState({ posts: updatedPosts, selectedPostId: null });
    };

    addNewPostHandler = (post) => {
        this.setState((state, props) => {
            const updatedPosts = [...state.posts, post];
            return { posts: updatedPosts };
        });
    };

    render() {
        return (
            <div>
                <header>
                    <nav className="navigation-bar">
                        <ul>
                            <li>
                                <NavLink to="/" exact>
                                    Home
                                </NavLink>
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
                                <NavLink to={{ pathname: "/new-post" }}>
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/post/:postId" exact component={FullPost} />
                </Switch>
                {/* <section>
                    <FullPost
                        id={this.state.selectedPostId}
                        deleted={this.postDeleteHandler}
                    />
                </section>
                <section>
                    <NewPost addPostFn={this.addNewPostHandler} />
                </section> */}
            </div>
        );
    }
}

export default Blog;
