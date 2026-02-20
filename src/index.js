const express = require("express");
const { items } = require("./data"); // Importing our mock model
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// GET: Your groupmates can use this to see the list in Postman
app.get("/items", (req, res) => {
  res.json(items);
});

// POST: Use this to show them how to add data
app.post("/items", (req, res) => {
  const newItem = { id: items.length + 1, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(port, () => console.log(`Server live at http://localhost:${port}`));
