moment.locale("pt-br");

const date = document.querySelector(".box__header__date");
const dateToday = moment(new Date()).format("L");

function myDate() {
  date.innerText = dateToday;
}

export default myDate();
