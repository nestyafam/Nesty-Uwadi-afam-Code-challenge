const express = require ('express');
const app = express();


app.set ('view engine', 'ejs');


app.get('/', function(req,res){
    res.render('index',{title:'HELLO , WORLD'})
})

app.use(express.static('public'))


app.listen(3000, function(){
    console.log('Server listening on port 3000')
})