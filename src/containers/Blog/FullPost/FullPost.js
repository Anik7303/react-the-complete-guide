import React, { Component } from "react";

// import Axios from "axios";
import Axios from "../../../axios";

import "./FullPost.css";

class FullPost extends Component {
    constructor(props) {
        super(props);
        this.state = { post: null };
    }

    componentDidMount() {
        const postId = Number.parseInt(this.props.match.params.postId) | null;
        if (postId) {
            if (
                this.state.post === null ||
                (this.state.post && this.state.post.id !== postId)
            ) {
                Axios.get(`/posts/${postId}`)
                    .then((response) => {
                        this.setState({ post: response.data });
                    })
                    .catch((error) => console.log(error));
            }
        }
    }

    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        const postId = Number.parseInt(this.props.match.params.postId);

        if (this.state.post && postId && this.state.post.id === postId) {
            post = (
                <div className="FullPost">
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
