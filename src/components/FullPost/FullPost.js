import React, { Component } from "react";

// import Axios from "axios";
import Axios from "../../axios";

import "./FullPost.css";

class FullPost extends Component {
    state = {
        post: null,
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id) {
            if (
                this.state.post === null ||
                this.state.post.id !== this.props.id
            ) {
                Axios.get(`/posts/${this.props.id}`)
                    .then((response) => {
                        this.setState({ post: response.data });
                    })
                    .catch((error) => console.log(error));
            }
        }
    }

    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        if (this.state.post && this.state.post.id === this.props.id) {
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
        } else if (this.props.id) {
            post = <p style={{ textAlign: "center" }}>Loading...</p>;
        }
        return post;
    }
}

export default FullPost;
