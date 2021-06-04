const taskDelete = () => {
  const btnDelete = document.querySelectorAll("i#close");

  btnDelete.forEach((btn, index) => {
    btn.addEventListener("click", (event) => {
      const tasksArr = JSON.parse(localStorage.getItem("tasks"));
      const taskCard = event.target.parentNode.parentNode;
      taskCard.remove();

      if (tasksArr.length > 0) {
        tasksArr.splice(index, 1);
      }

      localStorage.setItem("tasks", JSON.stringify(tasksArr));
    });
  });
};

export default taskDelete;
