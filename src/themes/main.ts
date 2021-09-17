import { ThemeBody } from './protocols';

import colors from './colors';
import fonts from './fonts';
import borders from './borders';
import breakpoints from './breakpoints';

const main: ThemeBody = {
  colors: colors,
  fonts: fonts,
  borders: borders,
  breakpoints: breakpoints,
};

export default main;
export { main };
