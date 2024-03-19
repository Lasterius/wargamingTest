import { CalcPage } from '../pages/calcPage/index';
import '../shared/global.scss';

const appContainer = document.querySelector('#app');
appContainer.insertAdjacentHTML('beforeend', CalcPage());
