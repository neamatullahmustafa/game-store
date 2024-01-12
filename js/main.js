"use strict";

let result;
let dailies;
let wen;

async function getProductFromApi(category) {
  console.log(category);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "aa38b915d7mshf13ee4f41e5b73ap1ddf89jsn8b5dd1c909aa",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?${category}`,
    options
  );
  result = await response.json();
  console.log(result.text);
}
(async function displayCategory() {
  window.addEventListener("scroll", function () {
    wen = window.scrollY;
    if (wen > 170) {
      console.log(wen);
      document.querySelector(".navbar").style.position = "fixed";
      document.querySelector(".navbar").style.transform = "translateY(0)";
    } else {
      document.querySelector(".navbar").style.position = "relative";
      document.querySelector(".navbar").style.transform = "translateY(-50%)";
    }
  });
  await getProductFromApi("category=mmorpg");
  await displayGameCategory(result);
  document
    .getElementById("MMORPG")
    .addEventListener("click", async function () {
      await getProductFromApi("category=mmorpg");
      await console.log(result);
      await displayGameCategory(result);
    });

  document
    .getElementById("SHOOTER")
    .addEventListener("click", async function () {
      await getProductFromApi("category=shooter");
      await console.log(result);
      await displayGameCategory(result);
    });
  document
    .getElementById("SAILING")
    .addEventListener("click", async function () {
      await getProductFromApi("category=sailing");
      await console.log(result);
      await displayGameCategory(result);
    });

  document
    .getElementById("PERMADEATH")
    .addEventListener("click", async function () {
      await getProductFromApi("category=permadeath");
      await console.log(result);
      await displayGameCategory(result);
    });

  document
    .getElementById("SUPERHERO")
    .addEventListener("click", async function () {
      await getProductFromApi("category=superhero");
      await console.log(result);
      await displayGameCategory(result);
    });

  document.getElementById("PIXEL").addEventListener("click", async function () {
    await getProductFromApi("category=pixel");
    await console.log(result);
    await displayGameCategory(result);
  });
})();
function displayGameCategory(gamaCategoryArray) {
  let gameContainer = ``;
  for (let index = 0; index < gamaCategoryArray.length; index++) {
    gameContainer += `<div class="p-2">          <div class="card text-white px-2 "onclick="displayGameDetails(${gamaCategoryArray[index].id})">
        <img src=${gamaCategoryArray[index].thumbnail} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title ">${gamaCategoryArray[index].title}<span class="me-0  badge ">free</span></h5>
            <p class="card-text ">${gamaCategoryArray[index].short_description}</p>
        </div>
        <div class="card-footer text-muted">
            <span class="badge ">${gamaCategoryArray[index].genre}</span> 
            <span class="badge ">${gamaCategoryArray[index].platform}</span>
        </div>
    </div></div>`;
    console.log(gamaCategoryArray[index].id);
  }
  document.getElementById("games").innerHTML = gameContainer;
}
document.querySelector(".fa-solid.fa-xmark.fa-xl").addEventListener("click",
function () {
  console.log("hellow");
  document.getElementById("gamesDetails").classList.replace("d-block","d-none");

})
async function displayGameDetails(index) {
  document.getElementById("gamesDetails").classList.replace("d-none","d-block");
  console.log(`id=${index}`);
  await getProductFromApi(`id=${index}`);
  console.log(result);
  let gameContainer = `<div class="d-flex justify-content-between">
    <h2  class="mb-3">Details Game</h2>
    <i class="fa-solid fa-xmark fa-xl" ></i></div>
    <div class="row row-cols-md-2 container ">
 <img src=${result.thumbnail} alt="" class="mb-md-0 mb-3">
      <div> 
        <h3>Title: <span >${result.title}</span></h3>
        <p> Category: <span class="badge bg-primary">${result.genre}</span></p>
        <p> Platform: <span class="badge bg-primary">${result.platform}</span></p>
        <p>Status: <span class="badge bg-primary"> ${result.status}</span></p>
        <p>${result.description}</p>
    </div>
</div> 
`;
  console.log("hello");
  document.getElementById("gamesDetails").innerHTML = gameContainer;
  document.getElementById("gamesDetails").classList.remove("d-none");
}
developer
: 
"Blizzard Entertainment"
freetogame_profile_url
: 
"https://www.freetogame.com/overwatch-2"
game_url
: 
"https://www.freetogame.com/open/overwatch-2"
genre
: 
"Shooter"
id
: 
540
platform
: 
"PC (Windows)"
publisher
: 
"Activision Blizzard"
release_date
: 
"2022-10-04"
short_description
: 
"A hero-focused first-person team shooter from Blizzard Entertainment."
thumbnail
: 
"https://www.freetogame.com/g/540/thumbnail.jpg"
title
: 
"Overwatch 2"