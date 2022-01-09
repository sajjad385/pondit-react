import {Component} from "react";
import Like from "./like.component";
import DisLike from "./dislike.component";

export default class Post extends Component {
    render() {
        let {id, title, body, date, like, dis_like} = this.props.children
        return (
            <>
                <div className="col-5 m-1" key={id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p>Date: {date}</p>
                            <img
                                src="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk="
                                alt=""
                                style={{'width': '150px', 'height': '150px'}}
                            />
                            <p className="card-text">{body.substr(0, 40)}</p>
                            <textarea name="comment" id="comment" cols='10' rows='1' placeholder='Write an Comment'/>
                            <Like
                                like={like}
                                dislike={dis_like}
                                handleLike={() => this.props.handleLike(id)}
                            />
                            <DisLike
                                like={like}
                                dislike={dis_like}
                                handleDislike={() => this.props.handleDisLike(id)}
                            />
                            <button
                                className='btn btn-danger'
                                onClick={() => this.props.handlePostRemove(id)}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}