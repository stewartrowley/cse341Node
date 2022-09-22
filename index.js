const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", require("./routes")).use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// mongodb.initDb((err, mongodb) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port);
//     console.log(`Connected to DB and listening on ${port}`);
//   }
// });
