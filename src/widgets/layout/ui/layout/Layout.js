import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import css from './Layout.module.scss';

export const Layout = props => {
  const children = props.map(item => {
    return `
        ${item}
      `;
  });

  console.log(children.join(''));

  return `
      ${Header()}
      <main class=${css.main}>
        ${children.join('')}
      </main>
      ${Footer()}
    `;
};
