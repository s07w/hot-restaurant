// =====================================
// DEPENDENCIES 
// =====================================

var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ===========================
// ROUTER
// ===========================


require("./routes/apiRoutes")(app);
require("./routers/htmlRoutes")(app);

// ===========================
// LISTENER
// ===========================

app.listen(PORT , function(){
    console.log("App listening on PORT: " + PORT);
});

