import React, {Component} from "react";

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
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>{this.props.homeLink}</h1>
                    </div>
                </div>
            </div> 
        );
    }
}
// expoting the Class Home created above which extends Component
export default Header;