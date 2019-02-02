// ===========================
// LOAD DATA
// ===========================

var tableData = require("../data/tableData");
var waitListData = require("../waitinglistData");

// ===========================
// ROUTING
// ===========================

module.exports = function(app) {
    app.get("/api/tables", function(req, res){
        res.json(tableData);
    });

    app.get("/api/waitlist", function(req, res){
        res.json(waitlistData);
    });

    // API POST REQUESTS

    app.post("/api/tables", function(req, res){
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } 
        else { 
            waitlistData.push(req.body);
            res.json(false);
        }
    });

    app.post("api/clear", function(req, res){
        tableData.length = [];
        waitListData.length = [];

        res.json({ ok: true });
    });
};