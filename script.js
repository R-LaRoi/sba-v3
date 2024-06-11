// sba.v3  ---------

let navData = [
  { id: 1, title: "MBC" },
  { id: 3, title: "Explore" },
  { id: 3, title: "Book List" },
];

console.log(navData);

// selectElementbyID
document.getElementById("section-two").style.display = "none";

document.getElementById("start-btn").addEventListener("click", (e) => {
  e.preventDefault("");
  let userName = prompt("What is your name?").toUpperCase();

  // create element <h1>
  let greeting = (document.createElement(
    "div"
  ).innerHTML = `<h1>Welcome ${userName}!</h1><p>
Let's check out some new books!
  </p>
`);
  console.log(greeting);

  // select using querySelector
  //  display new text inside of h3
  let subText = document.querySelector("h3");
  subText.innerHTML = greeting;

  let readBtn = document.querySelector("button");
  readBtn.style.display = "none";

  // append to parent element

  let nextArrow = document.createElement("img");
  nextArrow.classList.add("arrow-gif");
  nextArrow.src =
    "https://github.com/R-LaRoi/sba-v3/assets/114012059/71db82a0-9cf7-46b8-9055-896e714e3307";

  document.getElementById("arrow").appendChild(nextArrow);
});

let showNextScreen = document.getElementById("arrow");
showNextScreen.addEventListener("click", (e) => {
  e.preventDefault();

  let screenOne = document.getElementById("section-one");
  screenOne.remove();

  // -----screen two---------
  document.getElementById("section-two").style.display = "block";

  // nav styles
  let navBar = document.getElementById("nav");
  navBar.style.background = "#121716";
  navBar.style.height = "75px";
  navBar.style.boxShadow =
    "box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;";
  navBar.style.display = "flex";
  navBar.style.gap = "20px";

  navData.map((link) => {
    // 2. create an a element
    // 3. add href
    let ulink = document.createElement("li");
    ulink.innerHTML = `${link.title}`;
    console.log(ulink);

    // 5. append element
    navBar.append(ulink);
  });
});

// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.

// // Use appendChild and/or prepend to add new elements to the DOM.

// selector or selector All

// Create at least one element using createElement.

// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
