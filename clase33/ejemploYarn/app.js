import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.get("/", (req, res) => {
  res.json({
    message: "Hola mundo",
  });
});
