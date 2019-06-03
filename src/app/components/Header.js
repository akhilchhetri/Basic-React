import React, {Component} from "react";
import {Link} from "react-router-dom"
// import { linkSync } from "fs";

// Creating the class for component Home that extends the Component
class Header extends Component{
    constructor(props){
        console.log("Hello from constructor of header");
        super(props)
        console.log(this.props);
    }
    render(){
        // console.log(this.props);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-xs-offset-1">
                        <h1>{this.props.homeLink}</h1>
                    </div>
                </div>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                            <Link to="/user">
                                <li className="">User</li>
                            </Link>
                            <Link to="/about">
                                <li className="">About</li>
                            </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
          
        );
    }
}
// expoting the Class Home created above which extends Component
export default Header;