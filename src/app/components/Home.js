import React, {Component} from "react";

// Creating the class for component Home that extends the Component
class Home extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Home</h1>
                    </div>
                </div>
            </div>
           
        );
    }
}
// expoting the Class Home created above which extends Component
export default Home;