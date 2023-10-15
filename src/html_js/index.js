const dropdown = document.querySelector('.dropdown');
const optionsList = document.querySelector('.options-list');
const optionsArray = document.querySelectorAll('.option');
const dropdownText = document.querySelector('.dropdown__text');
let selectedOption = document.querySelector('.option[selected="true"]')

dropdownText.textContent = Array(...optionsArray).filter(element => element.hasAttribute('selected'))[0].textContent;

const handleDropdownClick = (event) => {
  // console.log(event.target);
  dropdown.classList.toggle('dropdown_opened');
}

const handleOptionClick = (event) => {
  event.stopPropagation();
  if(event.target.classList[0] !== 'option') return;
  selectedOption.setAttribute('selected', false);
  selectedOption = event.target
  selectedOption.setAttribute('selected', true);
  dropdownText.textContent = event.target.textContent;
  handleDropdownClick();
}

dropdown.addEventListener('click', handleDropdownClick);
optionsList.addEventListener('click', handleOptionClick);