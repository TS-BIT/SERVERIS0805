import { default as express } from "express";
const app = express();
const port = 3000;

app.use(express.static("web"));

app.get("/suma", (req, res) => {
  const sk1 = parseFloat(req.query.pirmas);
  const sk2 = parseFloat(req.query.antras);
  res.send((sk1 + sk2) + "");
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/labas', (req, res) => {
  res.send('Labas pasauli!');
});

app.get('/labukas', (req, res) => {
  res.send('<html><body><h1> Labukas!</h1></body></html>');
});

app.get('/viso', (req, res) => {
  res.send('Viso geriausio pasauli!');
});

app.get('/sveiki', (req, res) => {
  res.send('Sveiki visi!');
});
/*

app.get("/style.css", (req, res) => {
res set("Content-Type", "text/css");
  res.send(`
.zydras {
background-color: aqua;
}
`);
});
app.get("/index.html", (req, res) => {
res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<link rel="stylesheet" href="./style.css">
</head>
<body class="zydras">
zydrasis ekranas
</body>
</html>
`);
});
app.get("/viso", (req, res) => {
res.send("Viso geriausio pasauli!");
});
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});
*/




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});