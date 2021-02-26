import React from 'react';
import CardGrid from 'emerald-ui/lib/CardGrid';
import Card from 'emerald-ui/lib/Card';

import './styles/News.css';
import './styles/Global/Global.css';

class News extends React.Component {
	// const cardsContainer
	state = {
		articles: [],
	};
	componentDidMount() {
		this.axiosConection();
	}
	axiosConection = () => {
		const axios = require('axios').default;
		const getApi = () => {
			axios
				.get(
					'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=95d89889601244a6a5754469720098b6'
				)
				.then(res => {
					this.setState({
						articles: res.data.articles,
					});
					console.log(this.state);
				})
				.catch(e => {
					console.log(e);
				});
		};
		getApi();
	};

	handleClick = e => {
		this.state.news.firstClick = true;
		if (this.state.news.firstClick) {
			this.heightIncrement = parseInt(this.state.news.elementHeight);
		}
		this.state.news.firstClick = false;
	};

	render() {
		return (
			<div className="news grid-y">
				<div className="grid-y margin-auto">
					<h1 className="news__title">Top News</h1>
					<CardGrid className="news__cards">
						{this.state.articles.map(news => (
							<Card key={news.url}>
								<img
									className="news__card-img"
									style={{ backgroundImage: `url(${news.urlToImage})` }}
									alt=""
								/>
								<h1 className="eui-card-title">{news.title}</h1>
								<p className="truncate">{news.content}</p>
							</Card>
						))}
					</CardGrid>
					<div className="news__button">
						<button className="btn" onClick={this.handleClick}>
							<p className="btn-txt">View more stories</p>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default News;
