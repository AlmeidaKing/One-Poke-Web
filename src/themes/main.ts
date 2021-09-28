import { ThemeBody } from './protocols';

import colors from './colors';
import fonts from './fonts';
import borders from './borders';
import breakpoints from './breakpoints';
import box from './box';

const main: ThemeBody = {
  colors: colors,
  fonts: fonts,
  borders: borders,
  breakpoints: breakpoints,
  box: box,
};

export default main;
export { main };
