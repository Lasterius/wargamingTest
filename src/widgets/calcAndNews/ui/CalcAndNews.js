import { Calculator } from '../../../features/calculator/index';
import { News } from '../../../features/news/index';
import { newsData } from '../../../features/news/lib/newsData';
import css from './CalcAndNews.module.scss';

export const CalcAndNews = () => {
  return `
      <div class=${css.wrapper}>
        ${Calculator()}
        ${News(newsData)}
      </div>
    `;
};
