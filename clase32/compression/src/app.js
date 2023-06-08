import express from "express";
import gzip from "express-compression";

const app = express();
app.use(gzip({ brotli: { enabled: true, zlib: {} } }));
let str = "";

const server = app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/stringridiculamentelarga", (req, res) => {
  for (let i = 0; i < 10e4; i++) {
    str += "Cadena de texto ridiculamente larga";
  }

  res.send(str);
});
