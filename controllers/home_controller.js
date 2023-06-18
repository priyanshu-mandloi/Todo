const Todo = require('../models/todo');

module.exports.home = async (req, res) => {
  try {
    const todo = await Todo.find({}).exec();
    return res.render("home", {
      title: "Todo list!",
      todo_list: todo,                            // This is used to get the schema.
    });
  } catch (err) {
    console.log("Error in fetching from db:", err);
    return res.status(500).send("Internal Server Error");
  }
}

module.exports.createList = async (req, res) => {
  try {
    await Todo.create({
      task: req.body.task,
      date: req.body.date,
      category: req.body.category,
    });
    return res.redirect("back");
  } catch (err) {
    console.log("Error in creating a contact:", err);
    return res.status(500).send("Internal Server Error");
  }
}

module.exports.deleteList = async (req, res) => {
  try {
    // console.log("req", req.body);
    const id = req.body.ids;
    // console.log("ID is :",id);
    await Todo.findByIdAndDelete(id);
    return res.redirect("back");
  } catch (err) {
    console.log("Error in deleting the object from database:", err);
    return res.status(500).send("Internal Server Error");
  }
}