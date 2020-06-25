import React, { Component } from "react";

import Axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: null,
    };

    componentDidMount() {
        Axios.get("/posts")
            .then((response) => {
                const posts = response.data.slice(0, 6);
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: "Max",
                    };
                });
                this.setState({ posts: updatedPosts });
            })
            .catch((error) => this.setState({ error: error }));
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
        let posts = (
            <p style={{ textAlign: "center" }}>Something went wrong!</p>
        );
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectHandler(post.id)}
                    />
                );
            });
        }
        return (
            <div>
                <section className="Posts">{posts}</section>
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
