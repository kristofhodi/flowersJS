const express = require('express');
const path = require('path');

const app = express();
const port = 3010;

const flowers = [
  { name: "Rózsa", category: "évelő" },
  { name: "Tulipán", category: "egynyári" },
  { name: "Jácint", category: "évelő" },
  { name: "Krizantém", category: "évelő" }
];

const trees = [
  { name: "Tölgy", category: "lombhullatú" },
  { name: "Fenyő", category: "örökzöld" },
  { name: "Hárs", category: "lombhullatú" },
  { name: "Cikász", category: "örökzöld" }
];

app.get('/', (req, res) => {
  res.send('<h1>Üdvözlünk a Növények Projektben!</h1><p>Fedezd fel a virágokat és fákat!</p>');
});

app.get('/flowers', (req, res) => {
  res.json(flowers);
});

app.get('/trees', (req, res) => {
  res.json(trees);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
  console.log(`A szerver fut a ${port}-es porton`);
});
