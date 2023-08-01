import React, { Component } from "react";
import axios from "axios";

class SearchApi extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                this.setState({ errorMsg: "Some thing ron in Api" })
            })
    }
    render() {
        const { posts } = this.state
        return (
            <div>
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}>
                            <h6> <ul> {post.title}</ul></h6>
                        </div>) : null

                }
            </div>
        )
    }
}
export default SearchApi;