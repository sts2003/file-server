const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const firestore = require("./firebase");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/test", async (req, res) => {
  const {
    body: {
      params: { inputData },
    },
  } = req;

  let sendData = [];

  try {
    await firestore
      .collection("Memo")
      .get()
      .then((response) =>
        response.forEach((doc) =>
          sendData.push({
            refKey: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            regDate: doc.data().regDate,
          })
        )
      );
  } catch (e) {
    console.log(e);
  }

  return res.json(sendData);
});

app.post("/api/memoUploadHandler", async (req, res) => {
  const {
    body: {
      params: { inputData },
    },
  } = req;

  const D = new Date();

  let year = D.getFullYear();
  let month = D.getMonth() + 1;
  let date = D.getDate();

  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;

  const resultDate = year + month + date;

  let resultCode = 0;

  try {
    await firestore.collection("Memo").add({
      title: inputData.inputTitle,
      content: inputData.inputDesc,
      regDate: resultDate,
    });
    resultCode = 1;
  } catch (e) {
    console.log(e);
  }

  return res.json(resultCode);
});

app.post("/api/deleteBtnHandler", async (req, res) => {
  const {
    body: {
      params: { inputData },
    },
  } = req;

  let resultCode = 0;

  try {
    await firestore.collection("Memo").doc(inputData.refKey).delete();

    resultCode = 1;
  } catch (e) {
    console.log(e);
  }

  return res.json(resultCode);
});

app.listen(PORT, () => {
  console.log(`${PORT} Server Start✅`);
});
