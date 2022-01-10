import {Component} from "react";
import Post from "./post.component";
import posts from "../postData.json"
import CreatePost from "./create-post.component";

export default class Posts extends Component {
    state = {
        posts: posts
    }
    handleLike = id => {
        const {handleTotalDisLike, handleTotalLike, totalDisLike, totalLike} = this.props
        const postState = this.state
        const post = postState.posts.find((value, idx) => value.id === id)
        post.like = post.like === false
        if (post.like === true) {
            post.dis_like = false
            handleTotalLike(totalLike + 1)
            if (totalDisLike !== 0) {
                handleTotalDisLike(totalDisLike - 1)
            }
        } else {
            handleTotalLike(totalLike - 1)
        }
        this.setState({
            posts: [...postState.posts],
        })

    }
    handleDisLike = id => {
        const {handleTotalDisLike, handleTotalLike, totalDisLike, totalLike} = this.props
        const postState = this.state
        const post = postState.posts.find((value, idx) => value.id === id)
        post.dis_like = post.dis_like === false
        if (post.dis_like === true) {
            post.like = false
            handleTotalDisLike(totalDisLike + 1)
            if (totalLike !== 0) {
                handleTotalLike(totalLike - 1)
            }
        } else {
            handleTotalDisLike(totalDisLike - 1)
        }
        this.setState({
            posts: [...postState.posts]
        })
    }

    handleCreatePost = e => {
        console.log(e.target.value)
    }

    handlePostRemove = id => {
        const posts = [...this.state.posts]
        const filteredPost = posts.filter((value, idx) => value.id !== id)
        this.setState({posts: filteredPost})
    }

    render() {
        return (
            <>
                <div className="container p-2">
                    <CreatePost/>
                    <div className="row">
                        {
                            this.state.posts.map((value) => {
                                return <Post children={value}
                                             handleLike={this.handleLike}
                                             handleDisLike={this.handleDisLike}
                                             handlePostRemove={this.handlePostRemove}
                                />
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}