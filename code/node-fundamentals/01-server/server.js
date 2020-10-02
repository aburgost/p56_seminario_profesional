const express = require('express');
const bodyParser =require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);

router.get('/carrera', function(req,res){
    res.send('Lista de carreras')
});

router.post('/carrera',function(req,res){
    console.log(req.body);
    console.log(req.query);
})

app.use('/',express.static('public'));

app.listen(5000);
console.log("La aplicacion esta escuchando en http://localhost:5000");
