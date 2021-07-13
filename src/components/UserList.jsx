import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from "react"; 

class UserList extends Component {
constructor(props){
	super(props)
	this.state={
		users:[],
		fetchingData:false,
		anError:false
	}
}
async componentDidMount(){
	this.setState({fetchingData:true})
	const response= await fetch("https://jsonplaceholder.typicode.com/users ")
	if(response.ok){
		const users = await response.json()
			console.log(users)
			this.setState({users, fetchingData:false})
	}else{
		this.setState({anError:true, fetchingData:false})
	}

}
	render(){
		const {users, fetchingData,anError}=this.state
		if (fetchingData) {
			return <div>Be patient ...loading....</div>
			
		}
		if (anError) {
			return <div>Something went haywire!</div>
			
		}
		
		return <div className= "p-3 mb-2 bg-info text-dark text-xl-start">
			{users.map((userList, index)=>{
								
				return <li className="p-3 mb-2 bg-light text-dark fs-3" key={userList.id} > {userList.id +", "+ "   " + userList.name }</li>
				
			}
				)}
		</div>
		
		
	}
	
}



export  default UserList

