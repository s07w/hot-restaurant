// =============
// DEPENDENCIES 
// =============

var path = require("path");

// =============
// ROUTING 
// =============

module.exports = function(app) {
    // HTML GET Requests

    app.get("/tables", function(req,res){
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });

    // if no matching route is found, default to home
    app.get(" ", function (req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};