import React from "react";

import Axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.SHOW_POSTS = 6;
        this.state = {
            posts: [],
            error: false,
        };
        // this.postSelectHandler = this.postSelectHandler.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
        Axios.get("/posts")
            .then((response) => {
                const posts = response.data.slice(0, this.SHOW_POSTS);
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
