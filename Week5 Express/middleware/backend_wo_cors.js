const express = require("express");
const app = express();
app.get("/frontend", function(req, res) {
  res.sendFile(__dirname + "/frontend_wo_cors.html");
});

app.get("/sum", function(req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({"sum": a+b});
});

app.listen(3001);