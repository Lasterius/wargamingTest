import Logo from '../../../../public/wot-logo@2x.png';
import css from './Nav.module.scss';

export const Nav = props => {
  const items = props.map(item => {
    return `
        <li id='link-${item.id}' class=${css.item}><a href='/${item.name}'>${item.name}</a></li>
      `;
  });

  return `
      <nav class=${css.nav}>
        <ul class=${css.list}>
          <li class=${css.logo}>
            <a href='/'><img src=${Logo} alt='logo'></img></a>
          </li>
          ${items.join('')}
        </ul>
      </nav>
    `;
};
