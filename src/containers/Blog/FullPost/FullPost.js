import React, { Component } from "react";
import { Link } from "react-router-dom";

import Axios from "../../../axios";

import "./FullPost.css";

class FullPost extends Component {
    constructor(props) {
        super(props);
        this.state = { post: null };
    }

    componentDidMount() {
        const postId = this.props.match.params.postId;
        if (postId) {
            this.loadData(postId);
        }
    }

    componentDidUpdate() {
        const postId = this.props.match.params.postId;
        if (postId) {
            this.loadData(postId);
        }
    }

    loadData(postId) {
        if (
            this.state.post === null ||
            (this.state.post && this.state.post.id.toString() !== postId)
        ) {
            Axios.get(`/posts/${postId}`)
                .then((response) => {
                    this.setState({ post: response.data });
                })
                .catch((error) => console.log(error));
        }
    }

    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        const postId = this.props.match.params.postId.toString();

        if (
            this.state.post &&
            postId &&
            this.state.post.id.toString() === postId
        ) {
            post = (
                <div className="FullPost">
                    <div
                        style={{
                            position: "relative",
                        }}
                    >
                        <Link
                            style={{
                                color: "red",
                                padding: "10px",
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                backgroundColor: "transparent",
                                position: "absolute",
                                top: "0",
                                right: "0",
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: "/posts",
                            }}
                        >
                            X
                        </Link>
                    </div>
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.props.deleted}>
                            Delete
                        </button>
                    </div>
                </div>
            );
        } else if (postId) {
            post = <p style={{ textAlign: "center" }}>Loading...</p>;
        }

        return post;
    }
}

export default FullPost;
