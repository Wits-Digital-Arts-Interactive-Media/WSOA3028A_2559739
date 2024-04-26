const gameBtn = document.getElementById("game");
gameBtn.addEventListener("click", gameFunction);

function gameFunction() {
  document.getElementById("btnDisplay").innerHTML = `Game i like: <a href="https://store.steampowered.com/app/214510/LEGO_The_Lord_of_the_Rings/">LEGO Lord of the Rings</a>`;
}


const hobbyBtn = document.getElementById("hobby");
hobbyBtn.addEventListener("click", hobbyFunction);

function hobbyFunction() {
  document.getElementById("btnDisplay").innerHTML = `I play hockey`;
}