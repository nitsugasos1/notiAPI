//GET https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
const apikey = "016ae1fe16ab4f519090f23cfbe91955"
const endpoint = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apikey}`

async function NewsApis(point, selector, template) {
    try {
        const response = await fetch(point)
        if (!response.ok) {
            throw new Error("NO FUNCIONO")
        }

        const data = await response.json()
        const source = data.sources
        const etiqueta = document.querySelector(selector)

        if (etiqueta) {
            etiqueta.innerHTML = template(source)
        }

    } catch (e) {
        console.error(e)
    }
}



function noticias(source) {
    console.log(source)
    let contador = 0
    let notiCard = ``
    source.forEach(element => {
        
        if (contador <= 50) {
            notiCard += `<section class="firstColumn">
            <article class="noti-card">
                
                    <h2 class="noti-card-title">${element.name}</h2>
                    <div class="noti-card-section-category">
                        <span class="noti-card-category">${element.category}</span>
                        <span class="noti-card-category">${element.language}</span>
                    </div>

                    <div class="noti-card-div">
                        <p class="noti-card-div-p">${element.description}</p>
                    </div>

                    <div class="noti-card-divButton">
                        <button class="noti-card-button"><a href=" ${element.url}">Ve la noticia completa</a></button>
                    </div>

            </article>
            </section>`

            contador++
            console.log(contador)
        } else if (contador > 50 && contador <= 100) {
            notiCard += `
            <section class="secondColumn">
            <article class="noti-card">
                
                    <h2 class="noti-card-title">${element.name}</h2>
                    <div class="noti-card-section-category">
                        <span class="noti-card-category">${element.category}</span>
                        <span class="noti-card-category">${element.language}</span>
                    </div>

                    <div class="noti-card-div">
                        <p class="noti-card-div-p">${element.description}</p>
                    </div>

                    <div class="noti-card-divButton">
                        <button class="noti-card-button"><a href=" ${element.url}">Ve la noticia completa</a></button>
                    </div>

            </article>
            </section>`
            contador++
            console.log(contador, " SEGUNDA COLUMNA")
        } else if (contador > 100 && contador <= 150) {
            notiCard += `
            <section class="thirdColumn">
            <article class="noti-card">
                    <h2 class="noti-card-title">${element.name}</h2>
                    <div class="noti-card-section-category">
                        <span class="noti-card-category">${element.category}</span>
                        <span class="noti-card-category">${element.language}</span>
                    </div>

                    <div class="noti-card-div">
                        <p class="noti-card-div-p">${element.description}</p>
                    </div>

                    <div class="noti-card-divButton">
                        <button class="noti-card-button"><a href=" ${element.url}">Ve la noticia completa</a></button>
                    </div>

            </article>
            </section>`
            contador++
            console.log(contador, " TERCERA COLUMNA")
        } else if (contador > 150) {
            notiCard += `
            <section class="fourColumn">
            <article class="noti-card">
                
                    <h2 class="noti-card-title">${element.name}</h2>
                    <div class="noti-card-section-category">
                        <span class="noti-card-category">${element.category}</span>
                        <span class="noti-card-category">${element.language}</span>
                    </div>

                    <div class="noti-card-div">
                        <p class="noti-card-div-p">${element.description}</p>
                    </div>

                    <div class="noti-card-divButton">
                        <button class="noti-card-button"><a href=" ${element.url}">Ve la noticia completa</a></button>
                    </div>

            </article>
            </section>`
            contador++
            console.log(contador, " CUARTA COLUMNA")
        }




    })
    return notiCard
}

NewsApis(endpoint, `.noticias`, noticias)


function filter(source) {
    const uniqueEtiqueta = new Set()

    source.forEach(element => {
        uniqueEtiqueta.add(element.category)
        console.log(uniqueEtiqueta)
    })
    console.log(source)
    let etiqueta = ``

    uniqueEtiqueta.forEach(element => {

        etiqueta += `<button class="noti-filter-button" value="${element}">${element}</button>`
    })
    console.log(etiqueta)
    return etiqueta



}

NewsApis(endpoint, `.noti-filter`, filter)




const botonFilter = document.querySelector("noti-filter-button")
botonFilter.addEventListener("click", async function (source) {
    try {
        const response = await fetch(source)
        if (!response.ok) {
            throw new Error("NO FUNCIONO")
        }
        const data = await response.json()
        const source = data.sources
        source.forEach(element => {
            if (elemento = elemento.category)
                etiqueta += `<button class="noti-filter-button">${element}</button>`
        })
        const etiqueta = document.querySelector(etiqueta);
        etiqueta.innerHTML = ``






    } catch (e) {
        console.error(e)
    }
})