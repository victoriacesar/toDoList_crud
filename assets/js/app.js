moment.locale("pt-br");

window.onload = function () {
  insertDate();
};

const date = document.querySelector(".box__header__date");
const dateToday = moment(new Date()).format("LL");
const formatDate = capitalize(dateToday).join(" ");
const addTask = document.querySelector(".btnAdd");
const inputTask = document.querySelector("[taskInput]");

function capitalize(stringCode) {
  let myString = stringCode.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });

  return myString;
}

function insertDate() {
  date.innerText = formatDate;
}

const newTask = () => {
  let inputValue = inputTask.value;
  const taskBox = document.querySelector("[task-box]");

  const task = `
  <div class="box__main__card">
    <div class="box__main__card__info">
      <input type="checkbox" name="done" id="done" class="done" />
      <p>${inputValue}</p>
    </div>
    <div class="box__main__card__icon">
      <i class="material-icons" id="edit">edit</i>
      <i class="material-icons" id="close">close</i>
    </div>
  </div> 
  `;

  taskBox.innerHTML += task;
  inputValue = "";
};

addTask.addEventListener("click", () => {
  newTask();
  inputTask.value = "";
  taskFinished();
  taskDelete();
});

const taskFinished = () => {
  const checkBox = document.querySelectorAll(".done");

  checkBox.forEach((check) => {
    check.addEventListener("click", (event) => {
      const btnFinished = event.target;
      const taskDone = btnFinished.nextElementSibling;
      taskDone.classList.toggle("checked");
    });
  });
};

const taskDelete = () => {
  const btnDelete = document.querySelectorAll("#close");

  btnDelete.forEach((btn) => {
    btn.addEventListener("click", () => {
      const taskCard = btn.parentElement.parentElement;
      taskCard.remove();
    });
  });
};
