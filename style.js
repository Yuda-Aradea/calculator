// calculator
let result = document.getElementById('inputtext');

let calculate = (number) => {
  result.value += number;
};

let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert('Masukan input yang benar');
  }
};

function clr() {
  result.value = '';
}

function del() {
  result.value = result.value.slice(0, -1);
}

// toggler
const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calc');
const toggleIcon = document.querySelector('.theme-toggler i');

let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle('dark');
  themeToggleBtn.classList.toggle('active');
  isDark = !isDark;
  toggleIcon.classList = isDark ? 'fa-regular fa-moon' : 'fa-regular fa-lightbulb';
};
