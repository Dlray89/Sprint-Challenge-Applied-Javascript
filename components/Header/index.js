// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(dates, title, temp) {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const Title = document.createElement('h1');
    const temperature = document.createElement('span');

    header.classList.add("header");
    date.classList.add("date");
    temperature.classList.add('temp');

    header.appendChild(date);
    header.appendChild(Title);
    header.appendChild(temperature);

    date.textContent = "March 28, 2019";
    Title.textContent = "Lambda Times";
    temperature.textContent = "98°"

    return header
}
const attachdoc = document.querySelector('.header-container')
attachdoc.appendChild(Header());
console.log(attachdoc)
