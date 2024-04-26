
function fillFooter()
{
    console.log("woorkded")
    document.getElementById("footerCard").innerHTML = `
    <h4>Contact me</h4>
    <a class="p-name u-url" href="../portfolio/profile.html">Kellen Strydom</a>
    <br>
    <a class="p-org" href="https://www.wits.ac.za">University of the Witwatersrand</a>
    <br>
    <a class="u-email" href="mailto:kellenstrydom@fakemail.com">kellenstrydom@fakemail.com</a>,
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
}

fillFooter()