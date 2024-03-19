import css from './Footer.module.scss';

export const Footer = () => {
  return `
      <footer class=${css.footer}>
        <div class=${css.wrapper}>
          <p>
          © 2009–2024 <a class=${css.link} href='http://wargaming.net/'>Wargaming.net</a> Все права защищены.
          </p>
        </div>
      </footer>
    `;
};
