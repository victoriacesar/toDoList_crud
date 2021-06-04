const Card = (card) => {
  const task = `
  <div class="box__main__card">
    <div class="box__main__card__info">
      <div class="checkBox"></div>
      <p class="content">${card.content}</p>
    </div>
    <div class="box__main__card__icon">
      <i class="material-icons" id="edit">edit</i>
      <i class="material-icons" id="close">close</i>
    </div>
  </div> 
  `;

  return task;
};

export default Card;
