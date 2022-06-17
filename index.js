const express= require('express');
const app = express();
const cors =require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('I can code Node now yay!! Front end')
});

const users = [
    {id:1, name: 'mahfuz', email: 'mahfuz@gmail.com', phone:'017123654789'},
    {id:2, name: 'jubaer', email: 'mahfuz@gmail.com', phone:'017123654789'},
    {id:3, name: 'rubel', email: 'mahfuz@gmail.com', phone:'017123654789'},
    {id:4, name: 'talukder', email: 'mahfuz@gmail.com', phone:'017123654789'}
]
app.get('/users', (req, res) =>{
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
       res.send(matched);
    }
    else{
        res.send(users);
    }
   
    
})

app.get('/user/:id', (req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u=>u.id === id);
    res.send(user)
});


app.post('/user', (req, res) =>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length +1;
    users.push(user);    
    res.send(user);
})


app.listen(port, () => {
    console.log('Lisitening to port', port);
})