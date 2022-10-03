import {opine} from "https://deno.land/x/opine@2.3.3/mod.ts";
const app = opine();
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'X-API-key,Content-Type');
    next();
});

app.get('/', function(req, res) {
    res.sendFile("information/index.html");
});
app.get('/style.css', function(req, res) {
    res.sendFile("information/style.css");
});
app.get('/script.js', function(req, res) {
    res.sendFile("information/sript.js");
});
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));