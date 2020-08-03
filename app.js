//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "The upcoming month is all about focusing on self-care and finding ways to make physical and mental health a bigger part of your life, which may sound like a lot but in practice is pretty simple. We've designated one easy task per day, so you'll never feel too overwhelmed.";
const moreContent =
  "Don't think it's selfish: 'When we've taken good care of ourselves, not only do we have more energy for others, but we we tend to be more focused and more present,' Dr. Coons says. Tap a friend: When we share our goals, we do better. Get a group of two, three, or four friends for added accountability. If you miss a day, don’t give up: The goal isn't to be perfect. Even if you just do 25 or 15 days, that's still an improvement from the previous month. Keep it up afterward: Improving your wellbeing is an ongoing process, so adopt one or two new habits that changed your mood for the better.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", { startingPost: homeStartingContent });
});

app.get("/about", function (req, res) {
  res.render("about", { aboutPost: aboutContent });
});

app.get("/more", function (req, res) {
  res.render("more", { morePost: moreContent });
});

app.get("/more", function (req, res) {
  res.render("more", { morePost: moreContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const title = req.body.postTitle;
  console.log(title);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
