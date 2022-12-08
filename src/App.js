import './App.css';
import RSSFeedList from './components/rssfeedlist';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

	const [rssfeeds, setRSSFeeds] = useState('Loading...');

	const getRSSFeeds = async () => {
		const res = await axios.get('/api/rssfeeds');
		const list = res.data;
		setRSSFeeds(list);
	}

	useEffect(() => {
		console.log('In useEffect');
		getRSSFeeds();
	}, [])

	return (
		<div className="App">
			<RSSFeedList rssfeeds={rssfeeds}/>
		</div>
	);
}

export default App;
