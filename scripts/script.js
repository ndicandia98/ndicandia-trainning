let data;
let articles = [];
let firstClick = true;
let heightIncrement;
let allowsClicks;
let clicks = 0;
window.onload = connection();

// api consume
function connection() {
  // axios
  axios({
    method: 'GET',
    url: 'http://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=95d89889601244a6a5754469720098b6'
  }).then(res => {
    data = res.data.articles;
    this.articles = data.map( (article) => {
      articles.push( {
        img: article.urlToImage,
        url: article.url,
        title: article.title,
        description: article.description
      });
    });
    allowsClicks = (articles.length / 4) - 1;
    console.log('allow clicks', allowsClicks);
    fillNews();
  }).catch(err => console.log(err))
}

//html data
function fillNews() {
  // console.log('data', data);
  console.log('articles', articles);
  urls = document.getElementsByClassName('news__card-link');
  images = document.getElementsByClassName('news__card-img');
  titles = document.getElementsByClassName('news__card-title');
  descriptions = document.getElementsByClassName('news__card-description');

  // create article cards
  for(var i=0; i<articles.length; i++) {
    var card = `
    <div class="news__card">
      <a href="#" class="news__card-link" target="_blank">
        <div
          class="news__card-img" 
          style="background-image: url('https://www.cludo.com/wp-content/uploads/2018/07/Optimizing-website-and-content-through-analytics-01-960x502.png'); background-size: cover;"
          >
        </div>
      </a>
      <div class="news__card-title">
          <p class="util__truncate">
              Facebook to add gift cards, jobs and donation tools to its COVID-19 Community Help hub
          </p>
      </div>
      <div class="news__card-description">
          <p class="util__truncate util__util__truncate-6">
              Facebook is expanding its Community Help hub to better serve local communities amid the COVID-19 pandemic. The hub has already seen significant usage by those requesting food, supplies and information about local resources, as well as use by volunteers and gr…
          </p>
      </div>
    </div>
    `
    var newDiv = document.createElement("news__card");
    newDiv.innerHTML = card;
    document.getElementsByClassName('news__cards')[0].appendChild(newDiv);
  }

  // fill data into cards
  for(var i=0; i<articles.length; i++){
    urls[i].href = articles[i].url;
    images[i].style.backgroundImage = `url(${articles[i].img})`;
    titles[i].innerHTML = articles[i].title;
    descriptions[i].innerHTML = articles[i].description;
  }
}

//show more news click
document.getElementById('showMore').addEventListener("click", ()=> {
  cardsContainer = document.getElementsByClassName('news__cards')[0];
  let elementStyle = window.getComputedStyle(cardsContainer);
  let elementHeight = elementStyle.getPropertyValue('height');
  if(firstClick) { this.heightIncrement = parseInt(elementHeight); }
  firstClick = false;
  let newHeight = parseInt(elementHeight);
  newHeight += (this.heightIncrement + 120);

  if(clicks < allowsClicks) {
    cardsContainer.style.height = `${ newHeight }px`;
    clicks ++;
  } else {
    alert('I dont have more news for you');
  }
})