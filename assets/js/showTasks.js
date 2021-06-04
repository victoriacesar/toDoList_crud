import Card from "./components/Card.js";
import taskDelete from "./deleteTask.js";
import taskFinished from "./taskFinished.js";

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

    taskFinished();
    taskDelete();
  }
};

export default showTasks;
