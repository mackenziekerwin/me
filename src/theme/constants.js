export const PRIMARY_BLUE = '#283593';
export const PRIMARY_GREEN = '#E6F1E4';
export const PRIMARY_ORANGE = '#FF4500';

export const MOBILE = '576px';
export const TABLET = '768px';
export const DESKTOP_SMALL = '992px';
export const DESKTOP_LARGE = '1200px';
export const DESKTOP_XL = '1440px';

const breakpoints = {
  MOBILE,
  TABLET,
  DESKTOP_SMALL,
  DESKTOP_LARGE,
  DESKTOP_XL,
};

export const min = Object.entries(breakpoints).reduce(
  (acc, [name, size]) => ({
    ...acc,
    [name]: `@media screen and (min-width: ${size})`,
  }),
  {}
);
