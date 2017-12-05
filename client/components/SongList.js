import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/getSongs';

class SongList extends Component {
	onSongDelete(id){
		this.props.mutate({
			variables: {
				id
			}
		}).then(e => {
			this.props.data.refetch()
		})
	}

	renderSongs(){
		return this.props.data.songs.map( ({id, title}) => {
			return (
				<li key={id} className="collection-item">
					<Link to={`/songs/${id}`}>{title}</Link>
					<i className="material-icons" onClick={() => this.onSongDelete(id)}>delete</i>
				</li>
			)
		})
	}

	render(){
		if(this.props.data.loading){
			return <div>loading...</div>
		}

		return (
			<div>
				<ul className="collection">
					{this.renderSongs()}
				</ul>
				<Link to="songs/new" className="btn-floating btn-large right red">
					<i className="material-icons">add</i>
				</Link>
			</div>
		)
	}
}

const mutate = gql`
	mutation DeleteSong($id: ID){
	  deleteSong(id: $id){
	    id
	  }
	}
`;

export default graphql(mutate)(
	graphql(query)(SongList)
);