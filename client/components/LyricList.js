import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component{
	onlike(id){
		this.props.mutate({ variables: { id } })
	}

	renderLyrics(){
		return this.props.lyrics.map( ({ id, content, likes }) =>{
			return (
				<li className="collection-item" key={id}>
					<div className="vote-box">
						{content}
						<i className="material-icons"
							onClick={() => this.onlike(id)}>
							thumb_up
						</i>
						{likes}
					</div>
				</li>
			)
		})
	}
	render(){
		return (
			<ul className="collection">
				{this.renderLyrics()}
			</ul>
		)
	}
}

const mutation = gql`
	mutation likeLyric($id: ID) {
		likeLyric(id: $id) {
			id
			likes
		}
	}
`;

export default graphql(mutation)(LyricList);
