const saveBtn = () => {
  const saveButton = document.querySelectorAll("#done");
  const editBtn = document.querySelectorAll("#edit");
  const editInput = document.querySelectorAll(".editInput");
  const pContent = document.querySelectorAll(".content");

  saveButton.forEach((save, id) => {
    save.addEventListener("click", () => {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      const inputValue = editInput[id].value;
      tasks[id].content = inputValue;

      localStorage.setItem("tasks", JSON.stringify(tasks));

      pContent[id].innerText = inputValue;

      save.classList.remove("show");
      editBtn[id].classList.remove("hidden");
      pContent[id].classList.remove("hidden");
      editInput[id].classList.remove("show");
    });
  });
};

export default saveBtn;
