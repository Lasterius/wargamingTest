import { Nav } from '../../../../features/nav/ui/Nav';
import { SignUpButton } from '../../../../features/signUpButton';
import { navData } from '../../lib/navData';
import css from './Header.module.scss';

export const Header = () => {
  return `
    <header class=${css.header}>
      ${Nav(navData)}
      ${SignUpButton()}
    </header>
    `;
};
