import axios from "axios";
// TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const Card = (article) => {

  const articleCard = document.createElement('div');
  const articleHeadline = document.createElement('div');
  const authorContainer = document.createElement('div');
  const imageContainer =document.createElement('div');
  const articleImage = document.createElement('img');
  const articleAuthor = document.createElement('span');

  articleHeadline.textContent = article.headline;
  articleImage.src = article.authorPhoto;
  articleAuthor.textContent = article.authorName;

  articleCard.classList.add('card');
  articleHeadline.classList.add('headline');
  authorContainer.classList.add('author');
  imageContainer.classList.add('img-container');

  articleCard.appendChild(articleHeadline);
  articleCard.appendChild(authorContainer);
  authorContainer.appendChild(imageContainer);
  imageContainer.appendChild(articleImage);
  authorContainer.appendChild(articleAuthor);

  articleCard.addEventListener('click', () => {
    console.log(articleHeadline.textContent)
  })

  return articleCard;
}

const cardAppender = (selector) => {

  axios.get(`http://localhost:5000/api/articles`)
  .then(res => {

    let articleList = null;

    for(let i = 0; i < res.data.articles.javascript.length; i++){
      articleList = Card(res.data.articles.javascript[i])
      document.querySelector(selector).appendChild(articleList)
    }
    for(let i = 0; i < res.data.articles.bootstrap.length; i++){
      articleList = Card(res.data.articles.bootstrap[i])
      document.querySelector(selector).appendChild(articleList)
    }
    for(let i = 0; i < res.data.articles.technology.length; i++){
      articleList = Card(res.data.articles.technology[i])
      document.querySelector(selector).appendChild(articleList)
    }
    for(let i = 0; i < res.data.articles.jquery.length; i++){
      articleList = Card(res.data.articles.jquery[i])
      document.querySelector(selector).appendChild(articleList)
    }
    for(let i = 0; i < res.data.articles.node.length; i++){
      articleList = Card(res.data.articles.node[i])
      document.querySelector(selector).appendChild(articleList)
    }
  })
  .catch(err => {
    console.error(err)
  })

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
