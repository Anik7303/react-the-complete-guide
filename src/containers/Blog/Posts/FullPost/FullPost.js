import React, { Component } from "react";

import Axios from "../../../../axios";
import "./FullPost.css";

class FullPost extends Component {
    constructor(props) {
        super(props);
        this.state = { post: null };
        this.deletePost = this.deletePost.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.postId) {
            if (
                this.state.post === null ||
                this.state.post.id !== this.props.match.params.postId
            ) {
                Axios.get(`/posts/${this.props.match.params.postId}`)
                    .then((response) => {
                        this.setState({ post: response.data });
                    })
                    .catch((error) => console.log(error));
            }
        }
    }

    deletePost() {
        if (this.state.post) {
            Axios.delete(`/posts/${this.state.post.id}`)
                .then((response) => {
                    this.props.history.push({
                        pathname: "/posts",
                        state: { deletePostId: this.state.post.id },
                    });
                })
                .catch((error) => console.log(error));
        }
    }

    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        if (
            this.state.post &&
            this.state.post.id.toString() === this.props.match.params.postId
        ) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePost}>
                            Delete
                        </button>
                    </div>
                </div>
            );
        } else if (this.props.match.params.postId) {
            post = <p style={{ textAlign: "center" }}>Loading...</p>;
        }
        return post;
    }
}

export default FullPost;
