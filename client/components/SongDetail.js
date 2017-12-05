import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import getSong from '../queries/getSong';
import { Link } from 'react-router';
import LyricCreate from '../components/LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
	render(){
		const { song } = this.props.data;

		if(!song){
			return <div>Loading...</div>
		}

		return(
			<div>
				<Link to="/">Back</Link>
				<h1>{song.title}</h1>
				<LyricList lyrics={song.lyrics}/>
				<LyricCreate songId={this.props.params.id} />
			</div>
		)
	}
}

export default graphql(getSong, {
	options: (props) => { //props are the components props
		return{
			variables:{
				id: props.params.id //ṕarams is a prop added by react rounter and reffer to url variable
			}
		}
	}
})(SongDetail);
