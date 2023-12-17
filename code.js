//GET https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
const apikey = "016ae1fe16ab4f519090f23cfbe91955"
const endpoint = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apikey}`

async function NewsApis(point, selector, template){
    try{
        const response = await fetch(point)
        if(!response.ok){
            throw new Error ("NO FUNCIONO")
        }

        const data = await response.json()
        const source = data.sources
        const etiqueta = document.querySelector(selector)
    
        if (etiqueta){
            etiqueta.innerHTML = template(source)
        }
        
    } catch (e) {
        console.error(e)
    }
} 



function noticias(source){
    console.log(source)
    let notiCard = ``
    source.forEach(element => {
        notiCard += `<article class="noti-card">
        <h2 class="noti-card-title">${element.name}</h2>
        <span class = "noti-card-category">${element.category}</span>
        <span class = "noti-card-category">${element.language}</span>
        <div class="noti-card-div">
            <p class="noti-card-div-p">${element.description}</p>
        </div>
    </article>`
    } )
    return notiCard
}

NewsApis(endpoint, `.noticias`, noticias)
