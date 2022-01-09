import {Component} from "react";

export default class Like extends Component {
    render() {
        let isDisabled = false
        if (this.props.dislike === true){
            isDisabled = true
        }
        return (
            <>
                <button className="fa fa-thumbs-up  m-2" disabled={isDisabled}
                   style={{
                       'fontSize': '30px',
                       'color': this.props.like === true ? '#0d6efd' : 'black'
                   }}
                   onClick={this.props.handleLike}
                />
            </>
        )
    }
}