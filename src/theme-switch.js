const themeSwitcher = document.getElementById('theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeStatus = localStorage.getItem('Theme');

function checkTheme() {
  if (themeStatus === 'DARK') {
    themeSwitcher.checked = true;
    setDarkTheme();
  } else if (themeStatus === 'LIGHT') {
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

function onThemeSwitcherChange() {
  if (themeSwitcher.checked === true) {
    setDarkTheme();
  } else if (themeSwitcher.checked === false) {
    setLightTheme();
  }
}
