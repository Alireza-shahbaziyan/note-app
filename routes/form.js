module.exports = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
            <h1>Note form</h1>
            <form method="POST" action="/add" >
                <input type="text" name="note" placeholder="please enter your note..." />
                <button type="submit">Save</button>
            </form>
        `);
    return res.end("CODE WORKED");
}
