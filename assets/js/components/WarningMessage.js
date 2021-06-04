const message = document.querySelector(".warning_message");

const showMessage = (inputValue, cssClass) => {
  if (inputValue.length > 0) {
    message.classList.remove(cssClass);
  } else if (!inputValue.value.trim()) {
    message.classList.add(cssClass);
  }
};

export default showMessage;
