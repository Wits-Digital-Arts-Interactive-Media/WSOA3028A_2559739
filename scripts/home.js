fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
//fetch("https://api.chucknorris.io/jokes/random")
.then((r) => r.json())
.then((fact) => {
    console.log(fact)
    randomFact(fact)
})
.catch((error) => console.log("The error:",error));


const randomFact = (fact) => {
    const div = document.querySelector("div");
    const a = document.createElement("a");
    a.innerText = fact.text;
    a.setAttribute("href", fact.source_url);
    a.setAttribute("target", "_blank");
    div.appendChild(a);
}
 