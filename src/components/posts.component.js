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
                "like": false
            }, {
                "id": 2,
                "title": "post title 2",
                "date": "02-01-2022",
                "body": "deserunt ducimus exercitationem, in minima nemo, neque nulla officia possimus quas, ipsum.",
                "like": false
            },
            {
                "id": 3,
                "title": "post title 3",
                "date": "31-12-2021",
                "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ",
                "like": true
            },{
                "id": 4,
                "title": "post title 4",
                "date": "11-12-2021",
                "body": " quia quod sed soluta ut vitae. Deserunt itaque odit quisquam. ipsum sfs",
                "like": false
            },{
                "id": 5,
                "title": "post title 5",
                "date": "01-12-2021",
                "body": " deserunt ducimus exercitationem, in minima nemo, neque nulla officia possimus quas,",
                "like": true
            }
        ]
    }
    handleLike = (id) => {
        const postState = this.state
        const post = postState.posts.find((value, idx) => value.id === id)
        post.like = post.like === false
        this.setState({
            posts: [...postState.posts],
        })
    }

    render() {
        return (
            <>
                <div className="container p-2">
                    <div className="row">
                        {
                            this.state.posts.map((value) => {
                                return <Post children={value} handleLike={this.handleLike}/>
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}