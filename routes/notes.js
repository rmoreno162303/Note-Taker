const router = require('express').Router()
const {readFromFile, readAndAppend} = require('../helpers/fsUtils');

const Add = require("../helpers/fsUtils.js")

// GET Route for homepage
router.get('/', (req, res) => {
  Add.readAll()
    .then(notes => res.json(notes) ) 
    .catch(err => console.log(err))
}
// Add.readAll()

  //.sendFile(path.join(__dirname, '/public/index.html'))
);

router.post('/', (req, res) =>
Add.addNew(req.body)
.then( notes => res.json(notes) ) 
.catch(err => console.log(err))
  //.sendFile(path.join(__dirname, '/public/index.html'))
);

//req.params
//req . id 

module.exports = router;
