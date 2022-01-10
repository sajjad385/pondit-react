import {Component} from "react";

export default class DisLike extends Component {
    render() {
        let isDisabled = false
        if (this.props.like === true){
            isDisabled = true
        }

        return (
            <>
                <button className="fa fa-thumbs-down btn" disabled={isDisabled}
                   style={{
                       'fontSize':'30px',
                       'color': this.props.dislike === true ? '#0d6efd' : 'black'
                        }}
                   onClick={this.props.handleDislike}
                />
            </>
        )
    }
}