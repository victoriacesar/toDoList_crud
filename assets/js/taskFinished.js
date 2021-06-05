const taskFinished = () => {
  const checkBox = document.querySelectorAll(".checkBox");
  const pContent = document.querySelectorAll(".content");

  checkBox.forEach((check, id) => {
    check.addEventListener("click", () => {
      const tasksArr = JSON.parse(localStorage.getItem("tasks"));

      const pContent = document.querySelectorAll(".content");

      tasksArr[id].finished = !tasksArr[id].finished;

      if (tasksArr[id].finished) {
        pContent[id].classList.add("checked");
        check.classList.add("checkedBox");
      } else {
        pContent[id].classList.remove("checked");
        check.classList.remove("checkedBox");
      }

      localStorage.setItem("tasks", JSON.stringify(tasksArr));
    });
  });
};

export default taskFinished;
