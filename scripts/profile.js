const gameBtn = document.getElementById("game");
gameBtn.addEventListener("click", gameFunction);

function gameFunction() {
  const p = document.getElementById("game").parentElement.children[1]
  if (p.innerHTML != '')
    p.innerHTML = ''
  else
    p.innerHTML = `Game i like: <a href="https://store.steampowered.com/app/214510/LEGO_The_Lord_of_the_Rings/">LEGO Lord of the Rings</a>`;
}


const hobbyBtn = document.getElementById("hobby");
hobbyBtn.addEventListener("click", hobbyFunction);

function hobbyFunction() {
  const p = document.getElementById("hobby").parentElement.children[1]
  if (p.innerHTML != '')
    p.innerHTML = ''
  else
    p.innerHTML = `I play hockey`;
}

