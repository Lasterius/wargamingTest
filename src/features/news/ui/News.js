import css from './News.module.scss';

export const News = props => {
  const items = props.map(item => {
    return `<li id=${item.id}>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <div><a href=${item.link}>${item.linkName}</a> ${item.date} <a href=${item.discord}>Обсудить</a></div>
      </li>`;
  });

  return `
      <div class=${css.wrapper}>
        <ul>
          ${items.join('')}
        </ul>
      </div>
    `;
};
