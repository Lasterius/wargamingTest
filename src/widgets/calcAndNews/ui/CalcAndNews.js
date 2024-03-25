import { Calculator } from '../../../entities/calculator';
import { tanksData } from '../../../entities/calculator/lib/tanksData';
import { News } from '../../../entities/news';
import { newsData } from '../../../entities/news/lib/newsData';
import css from './CalcAndNews.module.scss';

export const CalcAndNews = () => {
  return `
      <div class=${css.wrapper}>
        ${Calculator(tanksData)}
        ${News(newsData)}
      </div>
    `;
};
