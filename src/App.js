import React, {Component} from "react";
import Posts from "./components/posts.component";
import Navbar from "./components/navbar.component";

class App extends Component {
    state = {
        like: 0,
        disLike: 0
    }

    totalLike = like => {
        this.setState({ like })
    }

    totalDisLike = value => {
        this.setState({ disLike:value })
    }

    render() {
        return (
            <>
                <Navbar
                    totalLike={this.state.like}
                    totalDisLike={this.state.disLike}
                />
                <Posts handleTotalLike={this.totalLike}
                       handleTotalDisLike={this.totalDisLike}
                       totalLike={this.state.like}
                       totalDisLike={this.state.disLike}
                />
            </>
        );
    }
}

export default App;
