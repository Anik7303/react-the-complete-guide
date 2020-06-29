import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Axios from "axios";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

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
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to={{ pathname: "/new-post" }}>
                                    New Post
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
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
