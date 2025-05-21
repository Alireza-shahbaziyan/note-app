const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/notes.json');

function handleGetNotes(req, res) {
  fs.readFile(dataFilePath, 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      return res.end('<h2>Error reading notes!</h2>');
    }

    let notes = [];
    try {
      notes = JSON.parse(data);
    } catch {
      notes = [];
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Note List</h1>');

    if (notes.length === 0) {
      res.write('<p>No notes found.</p>');
    } else {
      const listItems = notes.map(note => 
        `<li>
          <strong>ID:</strong> ${note.id} <br/>
          <strong>Text:</strong> ${note.text} <br/>
          <strong>Created At:</strong> ${note.createdAt} <br/>
          <strong>Priority:</strong> ${note.priority} <br/>
          <strong>Archived:</strong> ${note.isArchived ? 'Yes' : 'No'}
        </li>`
      ).join('');
      res.write(`<ul>${listItems}</ul>`);
    }

    res.end();
  });
}

module.exports = handleGetNotes;
