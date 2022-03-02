const PORT = 8000 //the server/local host
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express()
const url = 'https://www.theguardian.com/international'
const cors = require('cors')
app.use(cors())
// //structure
// app.METHOD(PATH, HANDLER)

// //get data
// app.get()
// //add data to source
// app.post()
// //edit data
// app.put()
// //delete data
// app.delete()

app.get('/', function(req, res){
    res.json('This is my webscraper')
})

app.get('/results', (req, res) => {
    axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.fc-item__title', html).each(function () { //<-- cannot be a function expression
                const title = $(this).text()
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))

})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

