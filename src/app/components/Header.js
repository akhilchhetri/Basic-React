import React, {Component} from "react";
import { userInfo, homedir } from "os";
// making the component and exporting it
class Header extends Component{
    constructor(props){
        console.log("Hello from constructor");
        super(props)
        this.state={ 
            age: props.age
        }
    }
    static getDerivedStateFromProps(){
        console.log("Hello before rendering");
    }
    componentDidMount(){
        console.log("Hello after mounting");
    }
    onMakeOlder(){
        this.setState({
            age: this.state.age +3
        })
     }

    render(){
        console.log("hello from render");
        console.log(this.props);
        return(
            <nav className="navbar navbar-default bg-danger">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <h1>This is header Component</h1>
                            <p> Hey, {this.props.user.firstname}</p>
                            <p>Your age is {this.state.age}</p>
                            {/* <p>{this.props.gretting}</p> */}
                            <hr/>
                        </ul>
                        <img src={this.props.user.avatarUrl}/>
                        <h4>Your Hobbies are</h4>
                        <ul>
                            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                        </ul>
                        <hr/>
                    </div>
                </div>
              {/* Here i am going to make a button  */}
              <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older !!</button>
              <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
            </nav>
        );
    }
}



export default Header;
