import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from "react";

class UserList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
			comments: [],
			fetchingData: false,
			anError: false
		}
	}

	fetchUsers = async () => {
		this.setState({ fetchingData: true })
		const response = await fetch("https://jsonplaceholder.typicode.com/users ")
		if (response.ok) {
			const users = await response.json()
			console.log(users)
			this.setState({ users, fetchingData: false })
		} else {
			this.setState({ anError: true, fetchingData: false })
		}

	}
	fetchComments = async () => {
		this.setState({ fetchingData: true })
		const response = await fetch("https://jsonplaceholder.typicode.com/comments")
		if (response.ok) {
			const comments = await response.json()
			console.log(comments)
			this.setState({ comments, fetchingData: false })
		} else {
			this.setState({ anError: true, fetchingData: false })
		}

	}

	//Fetch Users
	async componentDidMount() {
		this.fetchUsers()
		this.fetchComments()
	}

	render() {
		const { users, fetchingData, anError } = this.state
		if (fetchingData) {
			return <div>Be patient ...loading....</div>

		}
		if (anError) {
			return <div>Something went haywire!</div>

		}
		return <div>
			<table className="table  table-bordered">
				<thead className="thead-dark">
					<tr>
						<th scope="col">User Number</th>
						<th scope="col">Name</th>
						<th scope="col">Handle</th>
						<th scope="col">Website</th>
						<th scope="col">Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => {
						return <tr key={user.id} >
							<th scope="row">{user.id}</th>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.website}</td>
							<td>{user.email}</td>
						</tr>
					}
					)}
				</tbody>
			</table>
			<div>
				<div className="alert alert-success" role="alert">
					<h3 className="alert-heading">Comments</h3>
					<div>
						{this.state.comments.map((comment, index2) => {
							
						 
							return <div key={index2} >
												
								<p className="mb-0">
								
									{"Num. " + comment.id + "," + " Title: " + comment.name + " " + "Email: "+ comment.email}
								</p>
								<p className="alert-info">
									{"ENTRY: " + comment.body},
								</p>
									<hr />
							</div>
						
						})}
					</div>
				</div>
			</div>



		</div>


	}

}



export default UserList

