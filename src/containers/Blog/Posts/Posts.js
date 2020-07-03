import React from "react";
import { Route } from "react-router";

// import { Link } from "react-router-dom";
import Axios from "../../../axios";
import Post from "../../../components/Post/Post";
// import FullPost from "../FullPost/FullPost";
import "./Posts.css";
import asyncComponent from "../../../hoc/asyncComponent";
const FullPost = asyncComponent(() => import("../FullPost/FullPost"));

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
        this.props.history.push({ pathname: `/posts/${postId}` });
        // this.props.history.push(`/post/${postId}`);
    };

    render() {
        let posts = (
            <p style={{ textAlign: "center" }}>Something went wrong!</p>
        );

        if (!this.state.error) {
            posts = this.state.posts.map((post) => (
                // <Link to={`/post/${post.id}`} key={post.id}>
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectHandler(post.id)}
                />
                // </Link>
            ));
        }

        return (
            <React.Fragment>
                <section className="Posts">{posts}</section>
                <Route path="/posts/:postId" exact component={FullPost} />
            </React.Fragment>
        );
    }
}

export default Posts;
