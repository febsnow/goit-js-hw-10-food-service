const themeSwitcher = document.getElementById('theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const currentTheme = localStorage.getItem('Theme');

function checkTheme() {
  if (currentTheme === 'DARK') {
    themeSwitcher.checked = true;
    setDarkTheme();
  } else {
    themeSwitcher.checked = false;
    setLightTheme();
  }
}

checkTheme();

themeSwitcher.addEventListener('change', onThemeSwitcherChange);

function setDarkTheme() {
  body.classList.add('dark-theme');
  body.classList.remove('light-theme');
  localStorage.setItem('Theme', 'DARK');
}
function setLightTheme() {
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
  localStorage.setItem('Theme', 'LIGHT');
}

// function onThemeSwitcherChange() {
//   // if (themeSwitcher.checked) {
//   //   setDarkTheme();
//   // } else {
//   //   setLightTheme();
//   // }
//   themeSwitcher.checked ? setDarkTheme() : setLightTheme();
// }
function onThemeSwitcherChange() {
  themeSwitcher.checked && setDarkTheme();
  !themeSwitcher.checked && setLightTheme();
}
