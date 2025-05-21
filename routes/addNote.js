const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // To generate unique IDs

const dataFilePath = path.join(__dirname, '../data/notes.json');

function handleAddNote(req, res) {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const parsedBody = new URLSearchParams(body);
    const text = parsedBody.get('note');

    if (!text) {
      res.writeHead(400, { 'Content-Type': 'text/html' });
      return res.end('<h2>Note text is required!</h2>');
    }

    // Read existing notes
    fs.readFile(dataFilePath, 'utf-8', (err, data) => {
      let notes = [];
      if (!err) {
        try {
          notes = JSON.parse(data);
        } catch {
          notes = [];
        }
      }

      // Create new note object
      const newNote = {
        id: uuidv4(),
        text: text,
        createdAt: new Date().toISOString(),
        updatedAt: null,
        isArchived: false,
        tags: [],
        priority: 'normal'
      };

      // Add new note to notes array
      notes.push(newNote);

      // Save updated notes array
      fs.writeFile(dataFilePath, JSON.stringify(notes, null, 2), err => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          return res.end('<h2>Error saving note!</h2>');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Note saved successfully!</h2>');
        res.write(`<p>${newNote.text}</p>`);
        return res.end();
      });
    });
  });
}

module.exports = handleAddNote;
