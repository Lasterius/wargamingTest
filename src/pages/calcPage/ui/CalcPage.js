import { Banner } from '../../../entities/banner';
import { CalcAndNews } from '../../../widgets/calcAndNews';
import { Layout } from '../../../widgets/layout';

const props = [Banner(), CalcAndNews()];

export const CalcPage = () => {
  return `
      ${Layout(props)}
    `;
};
