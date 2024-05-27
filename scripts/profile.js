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

const dogsBtn = document.getElementById("dogs");
dogsBtn.addEventListener("click", dogsFunction);

function dogsFunction() {
  const p = document.getElementById("dogs").parentElement.children[1]
  if (p.innerHTML != '')
    p.innerHTML = ''
  else
    p.innerHTML = `I have 3 dogs: Astro, Ion, and Xena`;
}

const tvBtn = document.getElementById("tv");
tvBtn.addEventListener("click", tvFunction);

function tvFunction() {
  const p = document.getElementById("tv").parentElement.children[1]
  if (p.innerHTML != '')
    p.innerHTML = ''
  else
    p.innerHTML = `Slugterra, Bridgeton, Brocklyn 99, Chicargo PD`;
}

const musicBtn = document.getElementById("music");
musicBtn.addEventListener("click", musicFunction);

function musicFunction() {
  const p = document.getElementById("music").parentElement.children[1]
  if (p.innerHTML != '')
    p.innerHTML = ''
  else
    p.innerHTML = `I really enjoy my music. My favourite artist is JPEGMAFIA, but I&apos;ve been liking MAVI resently`;
}

const sickBtn = document.getElementById("sick");
sickBtn.addEventListener("click", sickFunction);

function sickFunction() {
  const p = document.getElementById("sick").parentElement.children[1]
  if (p.innerHTML != '')
    p.innerHTML = ''
  else
    p.innerHTML = `As of right now I am sick. It is the flu. Watch this space for updates`;
}
