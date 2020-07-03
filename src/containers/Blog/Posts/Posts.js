import React from "react";
import Axios from "axios";

import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], error: null };
        this.postSelectHandler = this.postSelectHandler.bind(this);
    }

    componentDidMount() {
        Axios.get("/posts")
            .then((response) => {
                const posts = response.data.slice(0, 6);
                let updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: "Max",
                    };
                });
                if (this.props.location.state) {
                    if (this.props.location.state.newPost) {
                        updatedPosts.push(this.props.location.state.newPost);
                    }
                    if (this.props.location.state.deletePostId) {
                        updatedPosts = updatedPosts.filter(
                            (post) =>
                                post.id !==
                                this.props.location.state.deletePostId
                        );
                    }
                }
                this.setState({ posts: updatedPosts });
            })
            .catch((error) => this.setState({ error: error }));
    }

    postSelectHandler(postId) {
        this.props.history.push(`/posts/${postId}`);
    }

    render() {
        console.log("[Posts] props: ", this.props);
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

        return <section className="Posts">{posts}</section>;
    }
}

export default Posts;
