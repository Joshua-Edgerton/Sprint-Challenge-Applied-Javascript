// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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

const cardContainer = document.querySelector(".cards-container")

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {
    const dataList = response.data.articles.bootstrap;
    const dataBefore = response.data;
    console.log(dataBefore)
    console.log(dataList)
    dataList.forEach(item => {
        cardContainer.appendChild(articleCreator(item))
    });
    const dataList1 = response.data.articles.javascript;
    console.log(dataList1)
    dataList1.forEach(item => {
        cardContainer.appendChild(articleCreator(item))
    });
    const dataList2 = response.data.articles.jquery;
    console.log(dataList2)
    dataList2.forEach(item => {
        cardContainer.appendChild(articleCreator(item))
    });
    const dataList3 = response.data.articles.node;
    console.log(dataList3)
    dataList3.forEach(item => {
        cardContainer.appendChild(articleCreator(item))
    });
    const dataList4 = response.data.articles.technology;
    console.log(dataList4)
    dataList4.forEach(item => {
        cardContainer.appendChild(articleCreator(item))
    });
})


function articleCreator(cardInfo){
    //Class Elements
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const div4 = document.createElement("div")
    const img1 = document.createElement("img")
    const span1 = document.createElement("span")
    //Class Structure
    div1.appendChild(div2)
    div1.appendChild(div3)
    div3.appendChild(div4)
    div4.appendChild(span1)
    div4.appendChild(img1)
    //Class Names
    div1.classList.add("card")
    div2.classList.add("headline")
    div3.classList.add("author")
    div4.classList.add("img-container")
    img1.src = cardInfo.authorPhoto
    console.log(img1)
    //Text Content
    div2.textContent = cardInfo.headline
    span1.textContent = cardInfo.authorName
    return div1
}