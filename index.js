const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes/task");

app = express();
app.use(express.json());

const port = process.env.PORT || 8000;
const dbUrl =
  process.env.DBURL ||
  "mongodb+srv://Jerry:Jerry007@cluster0.hisvg.mongodb.net/Database?retryWrites=true&w=majority";

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Database Connected Successfully`))
  .catch((err) => console.log(err));

app.use("/api/tasks", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
