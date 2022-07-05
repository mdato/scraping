const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const url = 'https://www.theguardian.com/uk'

app.get('/', (req, res) => {
    axios(url)
    .then(response => {
        const html = response.data
        // console.log(html) // show the complete page
        const $ = cheerio.load(html)
        const articles = []

        // put what we are looking for in the page
        $('.fc-item__title', html).each(function () {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        // console.log(articles)
        res.json(articles)
    }).catch(error => console.log(error))
})

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})

