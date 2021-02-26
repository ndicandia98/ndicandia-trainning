import React from 'react';
import axios from 'axios';
import CardGrid from 'emerald-ui/lib/CardGrid';
import Card from 'emerald-ui/lib/Card';

import './styles/News.css';
import './styles/Global/Global.css';

class News extends React.Component {
	// const cardsContainer
	state = {
		articles: [],
		// news: {
		// 	firstClick: true,
		// 	cardsContainer: document.getElementsByClassName('news__cards')[0],
		// 	elementStyle: window.getComputedStyle(this.state.news.cardsContainer),
		// 	elementHeight: this.state.news.elementStyle.getPropertyValue('height'),
		// 	clicks: 0,
		// 	allowsClicks: 0,
		// 	newHeight: 0,
		// },
	};
	componentDidMount() {
		this.axiosConection();
	}
	axiosConection = () => {
		axios({
			method: 'GET',
			url:
				'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=95d89889601244a6a5754469720098b6',
		})
			.then(res => {
				const data = res.data.articles;
				console.log('data', data);
				this.setState({
					articles: data,
					// news: {
					// 	allowsClicks: data.length / 4 - 1,
					// },
				});
				console.log(this.state);
			})
			.catch(err => console.log(err));
	};
	handleClick = e => {
		this.state.news.firstClick = true;
		if (this.state.news.firstClick) {
			this.heightIncrement = parseInt(this.state.news.elementHeight);
		}
		this.state.news.firstClick = false;
		// let newHeight = parseInt(this.state.news.elementHeight);
		// newHeight += this.heightIncrement + 120;

		// if (clicks < allowsClicks) {
		// 	cardsContainer.style.height = `${newHeight}px`;
		// 	clicks++;
		// } else {
		// 	alert('I dont have more news for you');
		// }
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
