import React, { Component } from 'react';

class LyricList extends Component{
	onlike(id){
		console.log(id)
	}

	renderLyrics(){
		return this.props.lyrics.map( ({id, content}) =>{
			return (
				<li className="collection-item" key={id}>
					{content}
					<i className="material-icons"
						onClick={() => this.onlike(id)}>
						thumb_up
					</i>
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

export default LyricList;