const root = "/WSOA3028A_2559739"

const lastBlog = 10

const blogItems = [
    {name:"0", href: ``},
    {name:"1", href: `${root}/blogs/blog1.html`},
    {name:"2", href: `${root}/blogs/blog2.html`},
    {name:"3", href: `${root}/blogs/blog3.html`},
    {name:"4", href: `${root}/blogs/blog4.html`},
    {name:"5", href: ``},
    {name:"6", href: `${root}/blogs/blog6.html`},
    {name:"7", href: ``},
    {name:"8", href: `${root}/blogs/blog8.html`},
    {name:"9", href: `${root}/blogs/blog9.html`},
    {name:"10", href: `${root}/blogs/blog10.html`},

]

export function blogMenu()
{
    const p = document.querySelector("p")
    const ul = document.createElement("ul")

    for (let blogItem of blogItems){
        
        if (blogItem.href != ``)
        {
            const li = document.createElement("li")
            const a = document.createElement("a")
            a.innerText = `Week ${blogItem.name}`
            a.setAttribute("href", blogItem.href)
            li.appendChild(a)
            ul.appendChild(li)
        }
    }

    p.appendChild(ul) 
}

export function blogNav(blogWeek)
{
    const topNav = document.querySelector("header > nav")
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
        if (nextNum <1) nextFound = true
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

    const footerNav = document.querySelector("footer > nav")

    const ul = document.createElement("ul")

    if (blogWeek > 1)
    {
        console.log("not first")
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.innerText = `previous blog - week ${blogItems[preNum].name}`
        a.setAttribute("href", blogItems[preNum].href)
        li.appendChild(a)
        ul.appendChild(li)
    }

    
    if (blogWeek < lastBlog)
    {
        console.log("not last")
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.innerText = `next blog - week ${blogItems[nextNum].name}`
        a.setAttribute("href", blogItems[nextNum].href)
        li.appendChild(a)
        ul.appendChild(li)
    }
        
    footerNav.appendChild(ul)

}