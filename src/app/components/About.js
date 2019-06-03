import React, {Component} from "react";

// Creating the class for component Home that extends the Component
class About extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-xs-offset-1">
                        <h1>This is About Page</h1>
                    </div>
                </div>
            </div>
          
        );
    }
}
// expoting the Class Home created above which extends Component
export default About;