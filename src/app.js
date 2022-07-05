const feed = document.querySelector('#feed')

fetch('http://localhost:8000/')
    .then(response => { return response.json() })
    .then(data => {
        data.forEach(article => {
            const articleItem = `<div><h3>` + article.title + `</h3><p><a target='_blank' href=` + article.url + `>GO</a></p></div>`
            feed.insertAdjacentHTML('beforeend', articleItem)
        })
    }).catch(error => console.log(error))