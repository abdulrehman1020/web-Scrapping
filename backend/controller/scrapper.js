const  axios = require("axios")
const cheerio = require('cheerio');
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.scrapper = catchAsyncErrors(async (req, res, next) => {
    const URL = 'https://www.babypips.com/news'
    
// const URL = 'https://www.forexfactory.com/news'
axios(URL)
    .then(scrp => {
        // console.log(res.data)
        const htmlData = scrp.data
        const $ = cheerio.load(htmlData)
        // console.log($)
        // const articles = []

        var data = $('.summary').text()
        console.log(data)
        res.status(200).send(data)
        // console.log(data)
        // .each((index, element) => {
        //     const title = $(element).children('.dfx-articleListItem').text()
        //     // const titleURL = $(element).children('.headline').attr('href')
        //     articles.push({
        //         title,
        //         // titleURL
        //     })
        // })
        // console.log(articles)
        
    }).catch(err => console.error(err))
    // console.log(data)
    // res.send(data)
    
  });