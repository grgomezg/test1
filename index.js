const express = require("express");
const app = express();
const morgan = require("morgan");

//settings
app.set("port", process.env.PORT || 3000);

//middelwares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.json({ title: "hello world", year: 2022 });
});

//starting server

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
