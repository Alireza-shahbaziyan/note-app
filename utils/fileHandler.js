const fs = require('fs');

function saveNote(note, callback) {
    fs.appendFile('note.txt', note + '\n', callback);
}

function readNotes(callback) {
    fs.readFile('note.txt', 'utf-8', callback);
}

module.exports = {
    saveNote,
    readNotes
};
