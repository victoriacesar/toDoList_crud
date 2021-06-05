import addTask from "./addTask.js";
import myDate from "./components/Date.js";
import showTasks from "./showTasks.js";
import editTask from "./editTask.js";
import saveBtn from "./saveTask.js";
import taskDelete from "./deleteTask.js";

window.onload = function () {
  myDate;
  addTask;
  showTasks();
  editTask();
  saveBtn();
  taskDelete();
};
