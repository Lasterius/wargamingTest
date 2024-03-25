import { ExpTooltip } from '../../../features/expTooltip';
import css from './Calculator.module.scss';

export const Calculator = props => {
  const items = props.map(item => {
    {
      return `
        <li id=${item.id} class=${css.item}>
          <img src=${item.img} alt=${item.name} class=${css.img}></img>
          <h3 class=${css.title}>${item.name}</h3>
          ${ExpTooltip(css.tltp, `tltp-${item.id}`)}
        </li>
      `;
    }
  });

  return `
      <div class=${css.wrapper}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <ul class=${css.list}>
          ${items.join('')}
        </ul>
        <div class=${css.emptyBlock}></div>
      </div>
    `;
};
