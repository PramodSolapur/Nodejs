const express = require("express");
const app = express();
const path = require("path");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middlewares/notFound");
const PORT = 3000;

// middleware
app.use(express.static("./public"));
app.use(express.json()); // to get data from req.body

// routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};
start();

// app.get("/api/v1/tasks") ----> get all tasks
// app.post("/api/v1/tasks") ---> create a new task
// app.get("/api/v1/tasks/:id") --->  get single task
// app.patch("/api/v1/tasks/:id") ---> updating task --> PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data
// app.put("/api/v1/tasks/:id") ---> updating task  --> PUT is a method of modifying resource where the client sends data that updates the entire resource.
// app.delete("/api/v1/tasks/:id") ---> deleting task
