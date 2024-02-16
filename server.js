const express = require('express');
const app = express();
const mongoose = require('./database.js');
const Teachers = require('./teachers.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/search', async (req, res) => {
    try{
        const SearchTerm = req.query.searchInput;
        console.log("Term "+SearchTerm);
        const searchTermRegex = new RegExp(SearchTerm, 'i');
        const teachersFind = await Teachers.find({name: searchTermRegex});
        console.log(teachersFind);
        if (teachersFind.length === 0){
            res.json('No teachers found');
        }else{
            res.json(teachersFind);
        }
    } catch(err){
        res.json({message: err});
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

