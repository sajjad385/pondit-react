import {Component} from "react";
import Like from "./like.component";

export default class Post extends Component {
    render() {
        let {id, title, body, date, like} = this.props.children
        return (
            <>
                <div className="col-3 m-1" id={id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p>Date: {date}</p>
                            <p className="card-text">{body.substr(0,40)}</p>
                            <textarea name="comment" id="comment" cols='10' rows='1' placeholder='Write an Comment'/>
                            <Like
                                like={like}
                                handleLike={()=> this.props.handleLike(id)}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}