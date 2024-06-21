// if (typeof(Storage) !== "undefined") 
// {
//   if (localStorage.homedisplay) {
//     if (homedisplay == 'A')
//     {
//       DisplayAdvice();
//     }
//     else{
//       DisplayFact();
//     }
//   } 
//   else {
//     localStorage.clickcount = 1;
//   }
//   document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
// } 
// else {
//   document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
// }



function DisplayFact(){
  fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
  .then((r) => r.json())
  .then((fact) => {
      console.log(fact)
      DisplayText(fact.text)
  })
  .catch((error) => console.log("The error:",error));
}

function DisplayAdvice(){
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    const advice = data.slip.advice;
    console.log(`Advice: ${advice}`);
    //document.querySelector("div").innerText = advice;
    DisplayText(advice);
  });
}



function DisplayText(text){
  const div = document.querySelector("div");
  const textbox = document.createElement("section");
  textbox.className = "textbox"
  textbox.innerText = text;
  div.appendChild(textbox);
}

//DisplayAdvice();
DisplayFact();
 