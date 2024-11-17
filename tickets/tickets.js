const button = document.querySelector('button')
const number = document.getElementById('remaining-tickets')

button.addEventListener('click', () => {
    let remTkts  = parseInt(number.textContent, 10); // Convert the number in the p tag to an interger
     remTkts-- // decreament the number
    number.textContent = remTkts;
});