module.exports = function(router) {
    // Renders the home page
    router.get("/", function(req, res) {
        res.render("home");
    });

    // Renders the page with saved articles
    router.get("/saved", function(req, res) {
        res.render("saved");
    });
}