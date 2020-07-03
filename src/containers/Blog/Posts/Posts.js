import React from "react";

import Axios from "axios";

import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], error: null };
    }

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

        return <section className="Posts">{posts}</section>;
    }
}

export default Posts;
