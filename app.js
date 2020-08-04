//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require("lodash");

const homeStartingContent =
  "Daily reminders, whether you write 'em in your calendar, add them as events to your phone, or put Post-It's on your bedroom mirror, will help you stay on track, but bookmark this page and check back if you're ever unsure of the day's goal.";
const aboutContent =
  "The upcoming month is all about focusing on self-care and finding ways to make physical and mental health a bigger part of your life, which may sound like a lot but in practice is pretty simple. We've designated one easy task per day, so you'll never feel too overwhelmed.";
const moreContent =
  "Don't think it's selfish: 'When we've taken good care of ourselves, not only do we have more energy for others, but we we tend to be more focused and more present,' Dr. Coons says. Tap a friend: When we share our goals, we do better. Get a group of two, three, or four friends for added accountability. If you miss a day, don’t give up: The goal isn't to be perfect. Even if you just do 25 or 15 days, that's still an improvement from the previous month. Keep it up afterward: Improving your wellbeing is an ongoing process, so adopt one or two new habits that changed your mood for the better.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const posts = [
  {
    title: "Day 1. Do a deep breathing exercise.",
    body:
      "Count backwards from 10, breathing low and slow. Try it before a meeting, in the car, or before you greet your kids or partner after a long day.",
  },
  {
    title: "Day 2. Catch up with a good friend.",
    body:
      "Having a strong social support system is linked with a reduced risk of depression and high blood pressure, according to Mayo Clinic. And you'll probably get a good rec on what to watch next on Netflix too.",
  },
  {
    title: "Day 3. Schedule something to look forward to.",
    body:
      "Plan a fun day later this month, whether you sign up for a cooking class, plan a mother-daughter movie marathon, or use the weekend to go on a mini road trip.",
  },
];

app.get("/", function (req, res) {
  res.render("home", { startingPost: homeStartingContent, posts: posts });
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
  const body = req.body.postBody;

  const post = {
    title: title,
    body: body,
  };

  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postName", function (req, res) {
  const requestedTitle = _.lowerCase(req.params.postName);
  posts.forEach((post) => {
    const storedTitle = _.lowerCase(post.title);
    if (storedTitle === requestedTitle) {
      res.render("post", { title: post.title, body: post.body });
    }
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
