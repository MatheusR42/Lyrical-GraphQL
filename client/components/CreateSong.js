import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/getSongs';

class CreateSong extends Component {
	constructor(props){
		super(props);

		this.state = {
			title: ''
		}
	}
	onSubmit(event){
		event.preventDefault();
		
		this.props.mutate({
			variables: {
				title: this.state.title
			},
			refetchQueries: [
				{
					query
				}
			]
		}).then(() => {
			hashHistory.push('/')
		}).catch(() => {

		})
	}
	render(){
		return (
			<div>
				<Link to="/">Back</Link>
				<h1> Create Song</h1>
				<form onSubmit={ this.onSubmit.bind(this) }>
					<label> Title: </label>
					<input 
						autoFocus
						onChange={e => this.setState({ title: e.target.value })}
						value={this.state.title}
					/>
				</form>
			</div>
		)
	}
}

const mutation = gql`
	mutation addSong($title: String){
		addSong(title: $title){
			id
			title
		}
	}
`;

export default graphql(mutation)(CreateSong);