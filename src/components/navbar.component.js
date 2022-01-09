import {Component} from "react";

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
                    <div className="container">
                        <a className="navbar-brand font-weight-bold text-white" href="#">
                            Facebook
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-primary" aria-current="page"
                                       href="#">Like {this.props.totalLike}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-success" href="#">Dislike {this.props.totalDisLike}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}