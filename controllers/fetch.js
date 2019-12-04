// var models = require("../models");
var scrape = require("../scripts/scrape");


module.exports = {
    scrapeHeadlines: function(res) {
        console.log("scrape headline");
        scrape()
        .then(function(articles){
            console.log("look here!", articles);
        })

    }
}