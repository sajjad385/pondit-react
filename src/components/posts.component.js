import {Component} from "react";
import Post from "./post.component";

export default class Posts extends Component {
    state = {
        posts: [
            {
                "id": 1,
                "title": "post title 1",
                "date": "03-01-2022",
                "body": "Your perfect pack for everyday use and walks in the forest.",
                "like": false,
                "dis_like": false
            }, {
                "id": 2,
                "title": "post title 2",
                "date": "02-01-2022",
                "body": "deserunt ducimus exercitationem, in minima nemo, neque nulla officia possimus quas, ipsum.",
                "like": false,
                "dis_like": false
            },
            {
                "id": 3,
                "title": "post title 3",
                "date": "31-12-2021",
                "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ",
                "like": false,
                "dis_like": false
            }, {
                "id": 4,
                "title": "post title 4",
                "date": "11-12-2021",
                "body": " quia quod sed soluta ut vitae. Deserunt itaque odit quisquam. ipsum sfs",
                "like": false,
                "dis_like": false
            }, {
                "id": 5,
                "title": "post title 5",
                "date": "01-12-2021",
                "body": " deserunt ducimus exercitationem, in minima nemo, neque nulla officia possimus quas,",
                "like": false,
                "dis_like": false
            }
        ]
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
                    <input type="text" placeholder='Create new post' onChange={this.handleCreatePost}/>
                    <button onClick={this.handleCreatePost}>Add New Post</button>
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