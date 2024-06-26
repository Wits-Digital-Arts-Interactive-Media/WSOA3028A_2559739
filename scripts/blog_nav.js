const root = "/WSOA3028A_2559739"

const lastBlog = 13

const blogItems = [
    {name: "", week:"0", href: ``},
    {name: "Git - The enemy", week:"1", href: `${root}/blogs/blog1.html`},
    {name: "The Wireframes", week:"2", href: `${root}/blogs/blog2.html`},
    {name: "Semantic Markup", week:"3", href: `${root}/blogs/blog3.html`},
    {name: "IxD Process", week:"4", href: `${root}/blogs/blog4.html`},
    {name: "", week:"5", href: ``},
    {name: "UX and UX of Websites", week:"6", href: `${root}/blogs/blog6.html`},
    {name: "", week:"7", href: ``},
    {name: "Ethical Dilemmas in Software Engineering", week:"8", href: `${root}/blogs/blog8.html`},
    {name: "Internet is a human right", week:"9", href: `${root}/blogs/blog9.html`},
    {name: "Fourth Industrial Revolution", week:"10", href: `${root}/blogs/blog10.html`},
    {name: "Javascript Reflection", week:"11", href: `${root}/blogs/blog11.html`},
    {name: "I am Learning CSS", week:"12", href: `${root}/blogs/blog12.html`},
    {name: "Internet Ethics: Privacy, Anonymity, and Behaviour", week:"13", href: `${root}/blogs/blog13.html`},

]

export function blogMenu()
{
    const menu = document.getElementById("menu")
    const h2 = document.createElement("h2")
    h2.innerText = `List of blogs`
    menu.appendChild(h2)
    const ul = document.createElement("ul")
    ul.className = 'blogMenu'

    for (let blogItem of blogItems){
        
        if (blogItem.href != ``)
        {
            const li = document.createElement("li")
            const a = document.createElement("a")
            a.innerText = `Week ${blogItem.week} - ${blogItem.name}`
            a.setAttribute("href", blogItem.href)
            li.appendChild(a)
            ul.appendChild(li)
        }
    }

    menu.appendChild(ul) 
}

export function blogNav(blogWeek)
{
    const topNav = document.querySelector("header > nav")
    const home = document.createElement("a")
    home.innerText = `Home`
    home.setAttribute("href", `${root}/index.html`);
    topNav.appendChild(home)
    const a = document.createElement("a")
    a.innerText = `Blog page`
    a.setAttribute("href", `${root}/blogs/index.html`)
    topNav.appendChild(a)
    
    
    console.log(String(blogWeek))
    let preNum = blogWeek - 1
    let preFound = false
    while (!preFound){
        if (preNum <1) preFound = true
        if (!preFound && blogItems[preNum].href == ``)
        {
            preNum = preNum - 1
        }
        else
        {
            preFound = true
        }
    }

    let nextNum = blogWeek + 1
    let nextFound = false
    while (!nextFound){
        if (nextNum > lastBlog) nextFound = true
        if (!nextFound && blogItems[nextNum].href == ``)
        {
            nextNum = nextNum + 1
        }
        else
        {
            nextFound = true
        }
    }


    console.log("pre "+String(preNum))
    console.log("next " +String(nextNum))

    
    //const ul = document.createElement("ul")

    if (blogWeek > 1)
    {
        const leftnav = document.getElementById("leftnav")

        const a = document.createElement("a");
        const emoji = document.createElement("span");
        emoji.className = "emoji";
        emoji.innerText = `⏪`;
        a.appendChild(emoji);
        const text = document.createElement("span");
        text.className = " navtext";
        text.innerText = `week ${blogItems[preNum].week} `
        a.setAttribute("href", blogItems[preNum].href)
        a.appendChild(text)
        leftnav.appendChild(a)
    }

    
    if (blogWeek < lastBlog)
    {
        const rightnav = document.getElementById("rightnav")

        const a = document.createElement("a")
        const text = document.createElement("span");
        text.className = " navtext";
        text.innerText = `week ${blogItems[nextNum].week} `
        a.setAttribute("href", blogItems[nextNum].href)
        a.appendChild(text)
        const emoji = document.createElement("span");
        emoji.className = "emoji";
        emoji.innerText = `⏩`;
        a.appendChild(emoji);
        rightnav.appendChild(a)
    }

}


export function blogDropDown()
{
    const blog = document.querySelector("header > nav").children[3]

}