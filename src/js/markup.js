import menuItems from '../menu.json';
import markup from '../templates/menu-items.hbs';

const menu = document.querySelector('ul.js-menu');
const menuMarkup = markup(menuItems);

menu.insertAdjacentHTML('beforeend', menuMarkup);
