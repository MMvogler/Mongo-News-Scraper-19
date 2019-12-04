var scrape = require("../scripts/scrape");
var fetchController = require("../controllers/fetch");

module.exports = function(router) {
    // Renders the home page
    router.get("/", function(req, res) {
        fetchController.scrapeHeadlines
        res.render("home");
    });

    // Renders the page with saved articles
    router.get("/saved", function(req, res) {
        res.render("saved");
    });
}