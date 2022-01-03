import {Component} from "react";

export default class Like extends Component {
    render() {
        return (
            <>
                <i className="fa fa-thumbs-up  m-2"
                   style={{
                       'cursor':'pointer',
                       'fontSize':'30px',
                       'color': this.props.like === true ? '#0d6efd' : 'black'
                        }}
                   onClick={this.props.handleLike}
                />
            </>
        )
    }
}