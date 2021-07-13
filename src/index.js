import ReactDOM from 'react-dom';
import UserList from './components/UserList.jsx';
import React, { Component } from "react";



ReactDOM.render(
    <div>
        <UserList />
       
       
    </div>,
    document.querySelector("#root")
); 



/* import ReactDOM from 'react-dom';
import React from 'react';
import UserList from './components/UserList.jsx';


class UserListing extends React.Component{
constructor(props){
    super(props);

}
handleRequestClick=(event)=>{
    event.preventDefault()
    alert("Request Sent")
    const url="https://jsonplaceholder.typicode.com/users"
    const config={
        method:"GET",
        body: JSON.stringify(this.state)
    }
fetch(url, config)
    .then(response=>response.json())
    .then(result=>console.log("Result is ", result))
    .catch(err=>console.error(err))

}

}
<button onClick="handleRequestClick()">Request User List</button>
ReactDOM.render(
    <div>
        <UserList />
        <UserListing/>
    </div>,
    document.querySelector("#root")
); */