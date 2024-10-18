const express = require("express");
const PORT = 3001;
const path = require("path");

const app = express();
app.arguments(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
