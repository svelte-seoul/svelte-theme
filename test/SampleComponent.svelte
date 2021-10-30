<script lang="ts">
  import {ThemeProvider, ThemeParam, ThemeStore} from '../src';

  const common = {
    primary: '#0db293',
    primaryLight: '#75d0b8',
    secondary: '#00d9d5',
    success: '#33ff2f',
    danger: '#ff002e',
    warning: '#f2df0f',
    info: '#3a74e7',
    light: '#ededed',

    green20: '#cbffdd',
    green30: '#7ee2d3',
    green40: '#8eceb9',
    green50: '#28db98',
    green70: '#0db293',
    green80: '#00715b',
    green90: '#074539',

    gray10: '#f9f9f9',
    gray20: '#f3f4f5',
    gray30: '#e3e4e5',
    gray40: '#d0d1d3',
    gray50: '#b5b6b9',
    gray60: '#8e9095',
    gray70: '#76777d',
    gray80: '#4c4d53',
    gray90: '#2a2a2c',
    gray100: '#1b1b1c',
  };

  const light = {
    ...common,
    paper: '#ededed',
    disabled: '#c4c4c4',
    text: '#000000',
    placeholder: '#6d6d6d',
    main: '#75d0b8',
    mainDark: "#0db293",
    background: '#ffffff',
    textContrast: '#ffffff',
  };

  type Theme = typeof light;

  const dark: Theme = {
    ...common,
    paper: '#414141',
    disabled: '#414141',
    text: '#ffffff',
    placeholder: '#6d6d6d',
    main: '#0db293',
    mainDark: '#75d0b8',
    background: "#000000",
    textContrast: '#000000',
  };
    
  export const themes: ThemeParam = {
    light,
    dark,
  };
</script>

<ThemeProvider initialThemeType="dark" customTheme={themes}>
  <div/>
</ThemeProvider>
