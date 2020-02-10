const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res) => {
  res.json({ done: true });
});

app.listen(3000, () => {
  console.log("Server listening at *:3000");
});
