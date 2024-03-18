import css from './SignUpButton.module.scss';

export const SignUpButton = () => {
  return `
      <div class=${css.wrapper}>
        <a href='/signup' class=${css.link}>
          Зарегистрироваться
        </a>
      </div>
    `;
};
