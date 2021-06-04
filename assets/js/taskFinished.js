const taskFinished = () => {
  const checkBox = document.querySelectorAll(".checkBox");

  checkBox.forEach((check, id) => {
    check.addEventListener("click", () => {
      const tasksArr = JSON.parse(localStorage.getItem("tasks"));

      const content = check.nextElementSibling;

      tasksArr[id].finished = !tasksArr[id].finished;

      if (tasksArr[id].finished) {
        content.classList.add("checked");
        check.classList.add("checkedBox");
      } else {
        content.classList.remove("checked");
        check.classList.remove("checkedBox");
      }

      localStorage.setItem("tasks", JSON.stringify(tasksArr));
    });
  });
};

export default taskFinished;
