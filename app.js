const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

const app =express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get("/",(req,res)=>{

    res.render("home",{
        title:"Home Page!!"
    })
});

app.get("/contact-us",(req,res)=>{

    res.render("contact",{
        title:"Contact Us Page"
    })
});

app.get("/products",(req,res)=>{

    res.render("products",{
        title:"Products Page"
    })
});


const PORT =3000;
app.listen(PORT,()=>{

    console.log(`Web Server is connected!!!!`);
})