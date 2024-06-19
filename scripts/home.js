fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
.then((r) => r.json())
.then((fact) => {
    console.log(fact)
    //randomFact(fact)
})


.catch((error) => console.log("The error:",error));
fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    const advice = data.slip.advice;
    console.log(`Advice: ${advice}`);
    document.querySelector("div").innerText = advice;
  });


const randomFact = (fact) => {
    const div = document.querySelector("div");
    const a = document.createElement("a");
    a.innerText = fact.text;
    a.setAttribute("href", fact.source_url);
    a.setAttribute("target", "_blank");
    div.appendChild(a);
}
 