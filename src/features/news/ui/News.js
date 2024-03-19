import Discord from '../../../../public/discord16.png';
import Link from '../../../../public/link.png';
import css from './News.module.scss';

export const News = props => {
  const items = props.map(item => {
    return `<li class=${css.item} id=${item.id}>
        <h4 class=${css.title}>${item.title}</h4>
        <p class=${css.body}>${item.body}</p>
        <div class=${css.bottomGroup}><a href=${item.link}>${item.linkName}</a> ${item.date} <a href=${item.discord}><img src=${Discord} alt='discord'></img>Обсудить</a></div>
      </li>`;
  });

  const slicedItems = items.slice(0, 3);

  return `
      <div class=${css.wrapper}>
        <div class=${css.discord}>
          <a href='https://discord.gg/world-of-tanks'>
            Обсудить в Discord
          </a>
          <img src=${Link} alt='link'></img>
        </div>
        <h3 class=${css.newsTitle}><a href='/news'>Читайте также</a></h3>
        <ul>
          ${items.length > 3 ? slicedItems.join('') : items.join('')}
        </ul>
      </div>
    `;
};
