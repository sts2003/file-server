const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/test", (req, res) => {
  console.log("Server is called by Cilent");
  console.log(req.body.params.inputData);

  const {
    body: {
      params: { inputData },
    },
  } = req;

  console.log(inputData);
});

app.listen(PORT, () => {
  console.log(`${PORT} Server Start✅`);
});
