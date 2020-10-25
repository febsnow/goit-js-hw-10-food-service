import './styles.css';
import cardTemplate from '../src/templates/item.hbs';
import './theme-switch';
import menuItems from './menu.json';
import cardsTemplate from '../src/templates/items.hbs';

const menu = document.querySelector('.js-menu');
const insertMenu = makeMenu(menuItems);

// Одна карточка
// function makeMenu(items) {
//   return items.map(cardTemplate).join('');
// }

function makeMenu(items) {
  return cardsTemplate(items);
}
menu.insertAdjacentHTML('beforeend', insertMenu);
