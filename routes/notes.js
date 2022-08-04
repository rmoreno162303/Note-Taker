const router = require('express').Router()
const {readFromFile, readAndAppend} = require('../helpers/fsUtils');

const Add = "../helpers/fsUtils.js"

// GET Route for homepage
router.get('/notes', (req, res) =>
Add.readAll()
.then( notes => res.json(notes) ) 
.catch(err => console.log(err))
  //.sendFile(path.join(__dirname, '/public/index.html'))
);

router.post('/notes', (req, res) =>
Add.addNew(req.body)
.then( notes => res.json(notes) ) 
.catch(err => console.log(err))
  //.sendFile(path.join(__dirname, '/public/index.html'))
);

//req.params
//req . id 