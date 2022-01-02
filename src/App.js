import React,{Component} from "react";
import Navbar from "./components/navbar.component";
import Products from "./components/products.component";

class App extends Component {
    state = {
        totalCart: 0
    }

    updateCart = (value) => {
        this.setState({
            totalCart: value
        })
    }

    render() {
        return (
            <>
                <Navbar totalCart={this.state.totalCart}/>
                <Products updateCart={this.updateCart}/>
            </>
        );
    }
}

export default App;
