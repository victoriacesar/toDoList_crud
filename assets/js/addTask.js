import Card from "./components/Card.js";
import taskDelete from "./deleteTask.js";
import taskFinished from "./taskFinished.js";
import warningMessage from "./components/WarningMessage.js";

const addTask = document.querySelector(".btnAdd");
const inputTask = document.querySelector("[taskInput]");
const taskBox = document.querySelector("[task-box]");
const message = document.querySelector(".warning_message");

const newTask = () => {
  const taskArr = JSON.parse(localStorage.getItem("tasks")) || [];

  let inputValue = inputTask.value;
  const finished = false;

  let card = {
    content: inputValue,
    finished,
  };

  const taskUpdate = [...taskArr, card];

  if (inputValue.trim()) {
    message.classList.remove("show");
    const task = Card(card);
    saveLocalStorage("tasks", taskUpdate);
    taskBox.innerHTML += task;
    inputValue = "";
  } else {
    message.classList.add("show");
  }
};

addTask.addEventListener("click", () => {
  if (inputTask.value.length > 0) {
    newTask();
  } else {
    return;
  }
  inputTask.value = "";
  taskFinished();
  taskDelete();
});

const saveLocalStorage = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
};

export default newTask;
