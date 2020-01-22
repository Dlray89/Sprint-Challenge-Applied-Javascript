// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const container = document.querySelector('.topics');

axios.get(" https://lambda-times-backend.herokuapp.com/topics")
.then((response) => {
    console.log("im from tabs", response);
    response.data.topics.forEach((item, index,array) => {
            container.append(tabMaker(item))
    })
}).catch((error) => {
    console.log('An error has occur', error)
});

function tabMaker(topic){
const newTab = document.createElement('div');

newTab.classList.add('tab');
newTab.textContent = topic
console.log(newTab)

return newTab
}


