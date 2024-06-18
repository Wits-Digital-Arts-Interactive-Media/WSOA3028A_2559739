
function fillFooter()
{
    console.log("woorkded")


    let imageSrc;
    if  (document.title == "Home"){
        imageSrc = "./images/logo.png";
    }
    else{
        imageSrc = "../images/logo.png"
    }

    const card = document.getElementById("footerCard");
    
    card.innerHTML = `
    <h4>Contact me</h4>
    <img class="u-photo" src="${imageSrc}" width="100" height="120" alt="a professional photo of Kellen Strydom"/>
    <br>
    <a class="p-name u-url" target = "_blank" href="../portfolio/profile.html">Kellen Strydom</a>
    <br>
    <a class="p-org" target = "_blank" href="https://www.wits.ac.za">University of the Witwatersrand</a>
    <br>
    <a class="u-email" target = "_blank" href="mailto:kellenstrydom@fakemail.com">kellenstrydom@fakemail.com</a>,
    <br>
    <span class="p-street-address">1 Jan Smuts Ave</span>
    <br>
    <span class="p-locality">Braamfontein</span>
    <br>
    <span class="p-region">Johannesburg</span>
    <br>
    <span class="p-postal-code">2017</span>
    <br>
    <span class="p-country-name">South Africa</span>`
    //card.attr
}

fillFooter()
