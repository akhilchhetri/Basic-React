import React, {Component} from "react";
import { userInfo, homedir } from "os";

// making the component and exporting it
class Home extends Component{
    constructor(props){
        console.log("Hello from constructor");
        super()
        this.state={ 
            age: props.age,
            homeLink:props.initialLinkName
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
    // on Change Event
     onChangeLink(){
         this.props.changeLink(this.state.homeLink)
     }
    //  onChange the Input value
    onHandleChange(Event){
        this.setState({
            homeLink:Event.target.value
        });
    }
    render(){
        console.log("hello from render");
        console.log(this.props);
        return(
            <nav className="navbar navbar-default bg-danger">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <h4><u>This is Home Component</u></h4>
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
              <hr/>
              <input type="text" value={this.state.homeLink} onChange={()=>{
                  this.onHandleChange(event) }}/>
              <hr/>
              <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </nav>
        );
    }
}



export default Home;
