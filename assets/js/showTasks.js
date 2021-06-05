import Card from "./components/Card.js";
import taskDelete from "./deleteTask.js";
import editTask from "./editTask.js";
import taskFinished from "./taskFinished.js";
import saveTask from "./saveTask.js";

const taskBox = document.querySelector("[task-box]");

const showTasks = () => {
  const tasksArr = JSON.parse(localStorage.getItem("tasks"));
  if (tasksArr != null) {
    tasksArr.forEach((item, id) => {
      const task = Card(item);
      taskBox.innerHTML += task;
      const checkBox = document.querySelectorAll(".checkBox");
      const content = document.querySelectorAll(".content");

      if (tasksArr[id].finished) {
        content[id].classList.add("checked");
        checkBox[id].classList.add("checkedBox");
      } else {
        content[id].classList.remove("checked");
        checkBox[id].classList.remove("checkedBox");
      }
    });

    editTask();
    saveTask();
    taskFinished();
    taskDelete();
  }
};

export default showTasks;
