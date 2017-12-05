import React from 'react';
import ReactDOM from 'react-dom';
import ApollloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App  from './components/App';
import CreateSong  from './components/CreateSong';
import SongDetail from './components/SongDetail';

const client = new ApollloClient({});

const Root = () => {
  return (
	  	<ApolloProvider client={client}>
	  		<Router history={hashHistory}>
	  			<Route path="/" component={App}>
	  				<IndexRoute component={SongList} />
	  				<Route path="songs/new" component={CreateSong} />
	  				<Route path="songs/:id" component={SongDetail} />
	  			</Route>
	  		</Router>
	  	</ApolloProvider>
	);
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
