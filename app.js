const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/produkt", async (req, res) => {
  const result = await db.pool.query("SELECT * FROM Produkt");
  res.send(result);
});

app.post("/produkt", async (req, res) => {
  let produkt = req.body;
  const result = await db.pool.query(
    "INSERT INTO Produkt(produktname, produktbeschreibung) VALUES (?,?)",
    [produkt.produktname, produkt.produktbeschreibung]
  );
  res.status(200).send("Successful.");
});

app.put("/produkt", async (req, res) => {
  let produkt = req.body;
  const result = await db.pool.query(
    "UPDATE Produkt SET produktname = ?, produktbeschreibung = ? WHERE produktID = ?",
    [produkt.produktname, produkt.produktbeschreibung, produkt.produktID]
  );
  res.status(200).send("Successful.");
});

app.delete("/produkt", async (req, res) => {
  let id = req.query.id;
  const result = await db.pool.query(
    "DELETE FROM Produkt WHERE produktID = ?",
    [id]
  );
  res.status(200).send("Successful.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
