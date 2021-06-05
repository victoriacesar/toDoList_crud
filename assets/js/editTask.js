const editTask = () => {
  const editBtn = document.querySelectorAll("#edit");
  const editInput = document.querySelectorAll(".editInput");
  const content = document.querySelectorAll(".content");

  editBtn.forEach((button, id) => {
    button.addEventListener("click", () => {
      const saveBtn = document.querySelectorAll("#done");
      button.classList.add("hidden");
      saveBtn[id].classList.add("show");
      content[id].classList.add("hidden");
      editInput[id].classList.add("show");
    });
  });
};

export default editTask;
