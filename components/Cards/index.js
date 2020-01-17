// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get(" https://lambda-times-backend.herokuapp.com/articles")
.then( response => {
// console.log(response.data)
const gitArticles = cardCreator(response.data);
entryPoint.appendChild(gitArticles);
})
.catch( error => {
    console.log('an error has happen', error)
});

function cardCreator(article) {
/////Create element//////

const newCard = document.createElement('div');
const newHeadLine = document.createElement('div');
const newAuthor = document.createElement('div');
const newIMGContainer = document.createElement('div');
const newIMG = document.createElement('img');
const AuthorName = document.createElement('span');

////////////////////////
/////Add classes///////
newCard.classList.add('card');

newHeadLine.classList.add('headline');
newAuthor.classList.add('author');
newIMGContainer.classList.add('img-container');
newIMG.src = article.authorPhoto;
////////////////////////
// /////text-content///////
// newCard.textContent = `${articles.article}`
// newHeadLine.textContent = 
// newIMG.src = 
// AuthorName.textContent = 
////////////////////////////////////
///////append items///////////////
newCard.appendChild(newHeadLine);
newCard.appendChild(newHeadLine);
newCard.appendChild(newAuthor);
newCard.appendChild(newIMGContainer);

newIMGContainer.appendChild(newIMG);
newIMGContainer.appendChild(AuthorName)
////////////////////////////////

return newCard;
}
const entryPoint = document.querySelector('.cards-container');