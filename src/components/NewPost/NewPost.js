import React, { Component } from "react";

import Axios from "axios";

import "./NewPost.css";

class NewPost extends Component {
    state = {
        title: "",
        content: "",
        author: "Max",
    };

    postDataHandler = () => {
        let userId = 0;
        switch (this.state.author) {
            case "Max":
                userId = 1;
                break;
            case "Manu":
                userId = 2;
                break;
            default:
                userId = 0;
        }
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
            userId: userId,
        };
        Axios.post("/posts", post)
            .then((response) => {
                if (response.status === 201) {
                    this.props.addPostFn(response.data);
                }
            })
            .catch((error) => console.log(error));
    };

    render() {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) =>
                        this.setState({ title: event.target.value })
                    }
                />
                <label>Content</label>
                <textarea
                    rows="4"
                    value={this.state.content}
                    onChange={(event) =>
                        this.setState({ content: event.target.value })
                    }
                />
                <label>Author</label>
                <select
                    value={this.state.author}
                    onChange={(event) =>
                        this.setState({ author: event.target.value })
                    }
                >
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
