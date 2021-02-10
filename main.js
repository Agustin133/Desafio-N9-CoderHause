const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8000, ()=>{ 
    try {
        console.log('Server running on port 8000');
    } catch (error) {
        console.log('Error al ejecutar el servidor');
    }
})

app.get('/form', (req,res) => {
    res.sendFile(__dirname+'/form.html');
})

app.post('/myform', (req,res) => {
    console.log(req.body);
    res.send(req.body);
})

app.use('/items',require('./products'));


