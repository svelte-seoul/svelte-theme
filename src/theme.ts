export const colors = {
  primary: '#0DB293',
  primaryLight: '#75D0B8',
  secondary: '#00D9D5',
  success: '#33FF2F',
  danger: '#FF002E',
  warning: '#F2DF0F',
  info: '#3A74E7',
  brand: '#28DB98',
  dusk: '#414D6B',
  red: '#FF728D',
  orange: '#F6A623',
  yellow: '#EED100',
  green: '#24CD97',
  blue: '#679EFF',
  purple: '#B669F9',
  light: '#EDEDED',
};

export type CommonColors = typeof colors;

export const light = {
  ...colors,
  paper: '#F2F5F6',
  disabled: '#C4C4C4',
  background: '#FFFFFF',
  placeholder: '#6D6D6D',
  text: '#000000',
  textLight: '#1B1B1B',
  textContrast: '#FFFFFF',
  main: colors.primary,
  mainDark: colors.primaryLight,
  card: '#FFFFFF',
  link: '#8E9095',
  border: '#D3D4D5',
  authBackgroundLight: '#17b87c',
  authBackgroundDark: '#01886f',
};

export type Theme = typeof light;

export const dark: Theme = {
  ...colors,
  paper: '#2A2A2A',
  disabled: '#515151',
  background: '#000000',
  placeholder: '#6D6D6D',
  text: '#FFFFFF',
  textLight: '#D3D3D3',
  textContrast: '#FFFFFF',
  main: colors.primaryLight,
  mainDark: colors.primary,
  card: '#1C1C1C',
  link: '#B5B7BC',
  border: '#343536',
  authBackgroundLight: '#17b87c',
  authBackgroundDark: '#01886f',
};

export const theme = {
  light,
  dark,
};

export type ThemeType = 'light' | 'dark';
export type ThemeStore = {
  themeType: ThemeType;
  theme: Theme;
  changeThemeType: (themeType?: ThemeType) => void;
};

export interface Themes {
  light: Theme;
  dark: Theme;
}

export interface JSONObject {
  [x: string]: string;
}

export type ThemeParam = {
  light?: Partial<Theme> & JSONObject;
  dark?: Partial<Theme> & JSONObject;
};
