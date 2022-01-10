import {Component} from "react";
import Like from "./like.component";
import DisLike from "./dislike.component";

export default class Post extends Component {
    render() {
        let {id, title, body, image, date, like, dis_like} = this.props.children
        return (
            <>
                <div className="col-4 mt-3 text-center" key={id}>
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-10">
                                    <p className="card-title text-start h6">{title}</p>
                                    <p className='text-start text-muted'><small>Published: {date}</small></p>
                                </div>
                                <div className="col-2">
                                    <button className='btn btn-danger badge'
                                            onClick={() => this.props.handlePostRemove(id)}>
                                        <i className='fa fa-trash'/>
                                    </button>
                                </div>
                            </div>

                            <img
                                className='img-fluid'
                                src={image}
                                alt=""
                            />
                            <p className="card-text text-start justify-content-between">{body.substr(0, 150)}</p>
                            <div className="row">
                                <div className="col-8">
                                    <textarea className='form-control'
                                              name="comment"
                                              id="comment"
                                              placeholder='Write a comment .....'/>
                                </div>
                                <div className="col-2">
                                    <Like
                                        like={like}
                                        dislike={dis_like}
                                        handleLike={() => this.props.handleLike(id)}
                                    />
                                </div>
                                <div className='col-2'>
                                    <DisLike
                                        like={like}
                                        dislike={dis_like}
                                        handleDislike={() => this.props.handleDisLike(id)}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}