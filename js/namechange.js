// input + save name in local storage
const storageInput = document.querySelector('.header__login_name-input');
const text = document.querySelector('.header__login-text');
const storedInput = localStorage.getItem('textinput');

text.addEventListener("click", () => {
    storageInput.style.display = 'block';
    text.style.display = 'none';
    storageInput.value = text.textContent;
    storageInput.focus();
storageInput.addEventListener("blur", () => {
    storageInput.style.display = 'none';
    text.style.display = 'block';
})
});

if(storedInput) {
    text.textContent = storedInput
}
storageInput.addEventListener('input', letter => {
    text.textContent = letter.target.value
})
const saveToLocalStorage = () => {
    localStorage.setItem('textinput', text.textContent)
}
storageInput.addEventListener('blur', saveToLocalStorage)
