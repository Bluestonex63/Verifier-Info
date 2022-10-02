const express = require('express');
const port = 3000
const app = express();
app.use(express.static("information"))
app.get('/style.css', function(req, res) {
    res.sendFile("information/style.css");
});
app.get('/script.js', function(req, res) {
    res.sendFile("information/sript.js");
});
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));