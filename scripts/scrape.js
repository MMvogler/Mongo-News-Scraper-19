var axios = require("axios");
var cheerio = require("cheerio");


var scrape = function () {

    // First, we grab the body of the html with axios
   return axios.get("https://www.bbc.com/news/world/us_and_canada").then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);
      
      var articles = [];
      // Now, we grab every h2 within an article tag, and do the following:
      $(".gs-c-promo").each(function(i, element) {
    //     // Save an empty result object
      var headlines = $(this)
          .find("h3")
          .text()
          .trim();
      
      var paragraph = $(this)
          .find("p")
          .text()
          .trim();
          
      var link = $(this)
          .find("a")
          .attr("href");
          console.log("href", link);
        
      if (headlines && paragraph && link){
        var data = {
          headline: headlines,
          summary: paragraph,
          url: "https://www.bbc.com" + link
        }

        articles.push(data)
      }

    });
    console.log("testing!", articles);
    // return articles
  
  })
 
}

module.exports = scrape;

