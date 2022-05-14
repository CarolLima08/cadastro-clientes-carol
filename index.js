//npm install ejs
<<<<<<< HEAD
=======
const express = require('express');
const app = express();

>>>>>>> da85714e97f985c344a45c1997ac6c0ea324653e
app.engine('hmtl', require('ejs').renderFile);
app.set('view engine', 'ejs')
var path = require('path');
app.set('views', path.join(__dirname, '/view'));

<<<<<<< HEAD
const express = require('express');
const app = express();

app.listen(8081, function(){
    console.log("Servidor na url http://localhost:8081");
});

//npm install body-parser
bodyParser = require('body-parser');
app.arguments(bodyParser.urlencoded({ extends: true}));

//npm install consign
var consign = require('consign');
consign().include('controller/routes', ).into(app);
=======

//npm install body-parser
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//npm install consign
var consign = require('consign');
consign().include('controller/routes').into(app);

app.listen(8081,function(){
    console.log("Servidor na url http://localhost:8081");
});
>>>>>>> da85714e97f985c344a45c1997ac6c0ea324653e
