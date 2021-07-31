const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const arr = [{
        university: "AUSTRALIAN NATIONAL UNIVERSITY",
        country: "Australia",
        expense: "10-12 Lakhs",
        deadline: "Sept 15,2019"
    },
    {
        university: "THE UNIVERSITY OF MELBOURNE",
        country: "Australia",
        expense: "10-12 Lakhs",
        deadline: "Sept 15, 2019"
    },
    {
        university: "UNIVERSITY OF COMBODIA",
        country: "Canada",
        expense: "10-12 Lakhs",
        deadline: "Sept 15, 2019"
    },
    {
        university: "UNSW SYDNEY",
        country: "Australia",
        expense: "10-12 Lakhs",
        deadline: "Sept 15,2019"
    },
    {
        university: "THE UNIVERSITY IF EDINBURGH",
        country: "United Kingdom",
        expense: "15 Lakhs",
        deadline: "Sept 15, 2019"
    },
    {
        university: "THE UNIVERSITY OF MANCHESTER",
        country: "United Kingdom",
        expense: "15 Lakhs",
        deadline: "Sept 15, 2019"
    },
    {
        university: "UNIVERSITY OF OXFORD",
        country: "United Kingdom",
        expense: "12-15 Lakhs",
        deadline: "Sept 15, 2019"
    },
    {
        university: "UNIVERSITY OF MUNICH",
        country: "Germany",
        expense: "12 Lakhs",
        deadline: "Sept 15, 2019"
    },
    {
        university: "UNIVERSITY OF SOUTHERN CALIFORNIA",
        country: "United States",
        expense: "12-15 Lakhs",
        deadline: "Sept 15, 2019"
    },
    {
        university: "UNIVERSITY OF WESTERN AUSTRALIA",
        country: "Australia",
        expense: "15 Lakhs",
        deadline: "Sept 15, 2019"
    },
];
var numberofcards = 6;
app.get("/", function(req, res) {
    res.render("home", {
        c: numberofcards,
        array: arr
    });
});
app.post("/", function(req, res) {
    if (numberofcards < 10)
        numberofcards++;
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server is running at port 3000");
});