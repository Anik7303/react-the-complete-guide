import React, { Component } from "react";

import Axios from "axios";

import Posts from "../../containers/Blog/Posts/Posts";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.postSelectHandler = this.postSelectHandler.bind(this);
        this.postDeleteHandler = this.postDeleteHandler.bind(this);
        this.addNewPostHandler = this.addNewPostHandler.bind(this);
    }

    postSelectHandler = (postId) => {
        this.setState({ selectedPostId: postId });
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
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/new-post">New Post</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Posts />
                {/* <section className="Posts">{posts}</section> */}
                <section>
                    <FullPost
                        id={this.state.selectedPostId}
                        deleted={this.postDeleteHandler}
                    />
                </section>
                <section>
                    <NewPost addPostFn={this.addNewPostHandler} />
                </section>
            </div>
        );
    }
}

export default Blog;
