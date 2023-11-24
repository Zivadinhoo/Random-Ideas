const express = require("express");

const port = 5003;
const app = express();

const ideas = [
  {
    id: 1,
    text: "Positive Newsletter, a newsletter that only shares positive,uplifting news",
    tag: "Technology",
    username: "TonyStark",
    date: "2022-01-02",
  },
  {
    id: 2,
    text: "Positive Newsletter, a newsletter that only shares positive,uplifting news",
    tag: "Technology",
    username: "TonySoprano",
    date: "2022-02-02",
  },
];

app.get("/", (req, res) => {
  res.json({ message: "Welcoem to the RandomIdeas API" });
});

// Get all ideas
app.get("/api/ideas", (req, res) => {
  res.json({ success: true, data: ideas });
});

app.get("/api/ideas/:id", (req, res) => {
  const idea = ideas.find(idea => idea.id === +req.params.id);

  if (!idea) {
    res.status(404).json({ success: false, error: "Resource not found" });
  }

  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
