const express = require("express");
const router = express.Router();

const Task = require("../models/taskSchema");

router.get("/", (req, res) => {
  Task.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send(err));
});

router.post("/", (req, res) => {
  const newTask = new Task({
    Name: req.body.Name,
    Description: req.body.Description,
    CreatedAt: req.body.CreatedAt || Date.now(),
    RemoveAfter: req.body.RemoveAfter || Date.now(),
  });

  newTask
    .save()
    .then((t) => res.send(t))
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  Task.findByIdAndRemove(req.params.id)
    .then((t) => res.send(t))
    .catch((err) => res.status(400).send(err));
});
module.exports = router;
