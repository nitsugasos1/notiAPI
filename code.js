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
        <div class="noti-card-section-category">
            <span class="noti-card-category">${element.category}</span>
            <span class="noti-card-category">${element.language}</span>
        </div>

        <div class="noti-card-div">
            <p class="noti-card-div-p">${element.description}</p>
        </div>

        <div class="noti-card-divButton">
            <button class="noti-card-button">Ve la noticia completa</button>
        </div>
    </article>`
    })
    return notiCard
}

NewsApis(endpoint, `.noticias`, noticias)


function filter(source){
    const uniqueEtiqueta = new Set()

    source.forEach(element => {
        uniqueEtiqueta.add(element.category)
        console.log(uniqueEtiqueta)
    })
    console.log(source)
    let etiqueta = ``

    uniqueEtiqueta.forEach(element => {
        
        etiqueta += `<button class="noti-filter-button">${element}</button>`
    })
    console.log(etiqueta)
    return etiqueta


    
}

NewsApis(endpoint, `.noti-filter`, filter)




/*const botonFilter = document.querySelector("noti-filter-button")
botonFilter.addEventListener("click", function(){

})

function filter(){

}*/