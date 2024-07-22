const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const PORT = 8080;

app.use(express.json());

app.use(express.static(__dirname + "/public"));
app.set("views", "./views");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set("view engine", "ejs");

app.get("/", async function (req, res) {
  res.redirect("/home");
});

app.get("/home", async function (req, res) {
  res.render("home", {
    title: "home",
    // Other data
  });
});

app.get("/about", async function (req, res) {
  res.render("about", {
    title: "about us",
    // Other data
  });
});

app.get("/contact", async function (req, res) {
  res.render("contact", {
    title: "contact",
    // Other data
  });
});

app.get("/ring", async function (req, res) {
  res.render("rings", {
    title: "rings",
    // Other data
  });
});





// This is the route that will handle the form submission on the server-side and display the submitted information on a new page.

let user = {};

app.get("/user-info", (req, res) => {
  res.render("user", { title: "User Info", user });
});

app.post("/user", (req, res) => {
  const newUser = req.body;
  user = newUser;
  res.json(user);
});

//This is the route when there is a error this will go to show the error page

app.get('*', function(req, res){
  res.status(404).render('404', { title: '404 - Page Not Found' });
});



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
