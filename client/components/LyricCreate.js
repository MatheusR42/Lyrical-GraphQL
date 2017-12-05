import React, { Component } from 'react';
import gpl from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component{
	constructor(props){
		super(props);

		this.state = {
			content: ''
		}

	}
	handleSubmit(e){
		e.preventDefault();

		this.props.mutate({
			variables: {
				content: this.state.content,
				songId: this.props.songId
			}
		}).then( () => {
			this.setState( {content: ''} );
		})
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label>Lyric:</label>
				<input 
					onChange={e => { this.setState({ content: e.target.value })} }
					value={this.state.content}
				/>
			</form>
		)
	}
}

const mutation = gpl`
	mutation AddLyric($content: String, $songId: ID){
		addLyricToSong(content: $content, songId: $songId){
			id 
			lyrics{
				id
				content
			}
		}
	}
`;

export default  graphql(mutation)(LyricCreate);