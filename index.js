import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const tasks = [];
const worktasks = [];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/dayTasks", (req, res) => {
  res.render("dayTasks.ejs", { tasks });
});

app.post("/add", (req, res) => {
  const taskText = req.body.task;
  tasks.push({ text: taskText });
  res.redirect("/dayTasks");
});

app.get("/workTasks", (req, res) => {
  res.render("workTasks.ejs", { worktasks });
});

app.post("/wadd", (req, res) => {
  const workText = req.body.task;
  worktasks.push({ text: workText });
  res.redirect("/workTasks");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
