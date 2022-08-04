const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = util.promisify(fs.writeFile);

class Add {
    readFs () {
        return readFromFile('db/db.json', 'utf8')
    }
    writeFs (note) {
        return writeToFile('db/db.json', JSON.stringify(note))
    }
    readAll () {
        return this.readFs().then(notes => [...JSON.parse(notes)]) 
    }
    addNew (note) {
       let newNote = {id: Math.floor(Math.random() * 100),title:note.title, text:note.text}
       return this.readAll().then(notes => [...notes, newNote]).then(notes => this.writeFs(notes)).then(()=> this.readAll())
    } 
}

module.exports = new Add() 
