import { MainPage } from '../pages/mainPage/index';
import '../shared/global.scss';

document.querySelector('#app').innerHTML = `
  ${MainPage()}
`;
