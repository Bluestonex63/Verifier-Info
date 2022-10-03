import {opine} from "https://deno.land/x/opine@2.3.3/mod.ts";
const __dirname = new URL('.', import.meta.url).pathname;
const app = opine();
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'X-API-key,Content-Type');
    next();
});

app.get('/', function(req, res) {
    res.sendFile("information/index.html", { root: __dirname });
});
app.get('/style.css', function(req, res) {
    res.sendFile("information/style.css", { root: __dirname });
});
app.get('/script.js', function(req, res) {
    res.sendFile("information/script.js", { root: __dirname });
});
app.listen(3000);
console.log(`App listening at http://localhost:3000`)