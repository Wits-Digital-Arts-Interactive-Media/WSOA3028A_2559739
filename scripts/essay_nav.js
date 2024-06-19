const root = "/WSOA3028A_2559739"

const essayItems = [
    {name:"UX & UI Analysis - temu.com", href: `${root}/essays/essay1.html`},
    {name:"Digital Colonialism", href: `${root}/essays/essay2.html`},    
]

function essayMenu()
{
    const menu = document.getElementById("menu")
    const h2 = document.createElement("h2")
    h2.innerText = `List of essays`
    menu.appendChild(h2)
    const ul = document.createElement("ul")

    let count = 0
    for (let essayItem of essayItems){
        count = count + 1
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.innerText = `Essay ${count}: ${essayItem.name}`
        a.setAttribute("href", essayItem.href)
        li.appendChild(a)
        ul.appendChild(li)
    }

    menu.appendChild(ul) 
}

essayMenu()