const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const path = require('path');


app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('form', path.join(__dirname, '/form'));


const user = [
  {
    name: "Node Node",
    email: "Node@gmail.com",
    age: 23,
    city: "WB",
    profession: "Software Engineer",
  },
  {
    name: "May",
    email: "may@gmail.com",
    age: 22,
    city: "DGP",
    profession: "Artist",
  },
];

app.get("/", (req, res) => {
  res.render("index", { user });
});

app.get("/user/add", (req, res) => {
  res.render("index1");
});
app.post("/user/add", (req, res) => {
  const { name, email, age, city, profession } = req.body;
  user.push({ name, email, age, city, profession });
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("Server is Running ...");
});