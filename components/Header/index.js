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

function Header() {
    //Class Elements
    const header = document.createElement("div")
    const span = document.createElement("span")
    const h1 = document.createElement("h1")
    const span1 = document.createElement("span")
    //Class Structure
    header.appendChild(span)
    header.appendChild(h1)
    header.appendChild(span1)
    //Class Names
    header.classList.add("header")
    span.classList.add("date")
    span1.classList.add("temp")
    //Text Content
    span.textContent = "March 28, 2019"
    h1.textContent = "Lambda Times"
    span1.textContent = "98°"
    return header
}
const headerContainer = document.querySelector(".header-container")
headerContainer.appendChild(Header())
