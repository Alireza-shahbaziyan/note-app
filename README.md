
# Simple Note App with Node.js

## Overview

This is a simple note-taking application built with plain Node.js (without frameworks) to help beginners learn Node.js backend programming step-by-step.

The app allows users to:

- Add new notes via a form
- Store notes in a JSON file (`notes.json`)
- Display all saved notes in a list

---

## Purpose

The purpose of this project is to provide a very basic but practical example of:

- Creating an HTTP server with Node.js
- Handling GET and POST requests
- Reading and writing JSON files for data persistence
- Modularizing code into routes and handlers
- Rendering simple HTML responses

---

## Usage

1. Run the server:

   ```bash
   node server.js


2. Open your browser and go to:

   * `http://localhost:3000/` to see the note form
   * `http://localhost:3000/notes` to view the list of notes

3. Add notes through the form and see them saved and displayed.

---

## Project Structure

* `/routes` - Contains route handlers for different URLs
* `/data` - Contains the `notes.json` file where notes are saved
* `server.js` - Main server file that initializes and runs the server

---

## Notes

* This project is intended solely for learning purposes and is not production-ready.
* No database or user authentication is implemented.
* Feel free to extend and improve the app as you learn more about Node.js.

---
