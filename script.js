const movieSearchBox = document.getElementById("movie-search-box");
const searchList = document.getElementById("search-list");
const resultGrid = document.getElementById("table-grid");

// var coinsDataArray = [];

var HEADLINE_COINS = "https://api.blockchair.com/stats";

fetch(HEADLINE_COINS,
  {
    method: "GET",
    async: true,
    scroosDomain: true,
  }).then((response)=>{
    if(response.ok){
      response.json().then((json)=>{
        console.log(json.data)
      })
    }
  });

window.onload = () => {
  fetchHeadlines();
};

const fetchHeadlines = async () => {
  // const response = await fetch(HEADLINE_COINS);
  // coinsDataArray = [];

  // const myJson = await response.json();
  // coinsDataArray = myJson.articles;

  // const coinsDataArray = await response.json();

  // console.log(coinsDataArray);
  displayCoins();
};

function displayCoins() {
  // let count = document.createElement("p");
  // count.classList.add("table__grid--coins");
  // count.innerHTML = coins[idx].name;
  // resultGrid.appendChild(count);
}
