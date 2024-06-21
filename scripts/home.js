const typeswitch = document.getElementById("typeswitch");
typeswitch.addEventListener("click",SwitchDisplayType)



const div = document.querySelector("div");
const textbox = document.createElement("section");
textbox.className = "textbox";
div.appendChild(textbox);



if (typeof(Storage) !== "undefined") 
{
  if (localStorage.homedisplay) {
    ButtonText();
  }
  else
  {
    localStorage.homedisplay = 'A';
  }
  console.log(`show type: ${localStorage.homedisplay}`);
  TypeDisplay();
  
} 
else {
  DisplayAdvice();
}

function ButtonText()
{
  if (localStorage.homedisplay == 'A')
    {
      typeswitch.innerText = "Advice:";
    }
    else{
      typeswitch.innerText = "Fact:";
    }
}

function TypeDisplay()
{
  if (localStorage.homedisplay == 'A')
    {
      DisplayAdvice();
    }
    else{
      DisplayFact();
    }
}


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

  
  
  textbox.innerText = text;
  
}

function SwitchDisplayType()
{
  if (localStorage.homedisplay == 'A')
    {
      localStorage.homedisplay = 'F';
    }
    else{
      localStorage.homedisplay = 'A';
    }

  ButtonText();
  TypeDisplay();
}
 