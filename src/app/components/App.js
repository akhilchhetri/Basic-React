// importing React, and Component from library 'react'
import React, {Component} from 'react';
// importing home and Header Component in App component
import Home from './Home';
import Header from './Header';

// function formatName that has the user as an argument
function formatName(user){
    return user.firstname + ' ' + user.lastname;
}
// user list
const user={
    firstname: "Akhil",
    lastname: "Chhetri",
    avatarUrl:"http://archives.frederatorblogs.com/random/files/2008/04/b-corrupted-by-random-noise-bit-error-rate0020.thumbnail.gif",
    hobbies:['cricket', 'footballl', 'coding', 'travelling']
}


// function getgretting
function getgretting(user){
    if(user){
        return (
            <div>
                <h1>Welcome, {formatName(user)}</h1>
                <Home/>
            </div>
        );
    }
    return <h1>Welcome, Unknown User !! :P</h1>
}
//creating App component
class App extends Component{
    // function onGreet
    onGreet(){
        alert("Hello");
    }
    render(){
       return(
        <div>
            <div className="container">
                 <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header age={15} user={user} gretting={getgretting(user)} greet={this.onGreet}/>
                    </div>
                </div>
            </div>
        </div>
       ); 
    }
}
export default App;