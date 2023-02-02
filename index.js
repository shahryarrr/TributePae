const todayDateHtml = document.querySelector('#todayDate');

const today = new Date();
const todayDate = today.toDateString();

todayDateHtml.textContent = todayDate;
