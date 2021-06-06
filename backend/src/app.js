const express = require("express");
require("./config/db");
const app = express();
app.use(express.json());
require('dotenv').config();

const port = process.env.PORT || 3200;

var items = require("./routers/items");



app.use("/items", items);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
