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

const entryPoint = document.querySelector('.cards-container')

axios.get(" https://lambda-times-backend.herokuapp.com/articles")
.then( response => {

console.log("this res from articles",response);
Object.values(response.data.articles).forEach((items, index, array) => {
    items.forEach((item, index, array) => {
        entryPoint.append(cardCreator(item));
    })
})


})
.catch( error => {
    console.log('an error has happen', error)
});

function cardCreator(info) {
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
////////////////////////
/////text-content///////
newHeadLine.textContent = info.headline;
newIMG.src = info.authorPhoto;
AuthorName.textContent = `By: ${info.authorName}`;
////////////////////////////////////
///////append items///////////////
newCard.appendChild(newHeadLine);
newCard.appendChild(newAuthor);
newAuthor.appendChild(newIMGContainer);

newIMGContainer.appendChild(newIMG);
newAuthor.appendChild(AuthorName)
////////////////////////////////


return newCard;
}
