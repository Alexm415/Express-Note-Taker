const express = require("express");
const PORT = 3001;
const path = require("path");
const db = require("./db/db.json");
const app = express();
app.use(express.urlencoded({ extended: true }));
//app.use("/api", api);
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
app.get("/api/notes", (req, res) => res.json(db));
app.get("/jss", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/js/index.js"))
);
app.get("/css", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/css/styles.css"))
);
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
