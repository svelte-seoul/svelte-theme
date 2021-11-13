# Svelte Theme

> The `theme` module easily provides ability to make `light` and `dark` theme.

[![Npm Version](http://img.shields.io/npm/v/svelte-theme.svg?style=flat-square)](https://npmjs.org/package/svelte-theme)
[![Downloads](http://img.shields.io/npm/dm/svelte-theme.svg?style=flat-square)](https://npmjs.org/package/svelte-theme)
[![CI](https://github.com/wecount-dev/svelte-theme/actions/workflows/ci.yml/badge.svg)](https://github.com/wecount-dev/svelte-theme/actions/workflows/ci.yml)
[![publish-package](https://github.com/wecount-dev/svelte-theme/actions/workflows/release.yml/badge.svg)](https://github.com/wecount-dev/svelte-theme/actions/workflows/release.yml)

## Installation

```sh
yarn add svelte-theme
```

## Usage

#### 1. Wrap your `App` with `ThemeProvider`.

```ts
import {ThemeProvider} from 'svelte-theme';
```

#### 2. Retrieve the theme with Svelte Context API

```ts
const {theme} = getContext<ThemeStore>('svelte-theme');
```

> Note that `generic` type `ThemeStore` help you see theme props with autocomplete when using `typescript`.

## Usage in css style

The `theme` props will be converted to `kebab-case` in global css variables. For `mainDark` prop, it will be converted to `--main-dark` css variable. Thereofre inside `style` tag, you can you it like below.

```js
<style>
  p {
    color: var(--main-dark);
  }
</style>
```

If you want to add opacity to theme color, you should use `color-rgb` instead of `color`.

```js
<style>
  p {
    color: rgba(var(--main-dark-rgb), 0.2);
  }
</style>
```

Note that `rgb value` is calculated based on hex value, such as `#000` or `#0DB293`.

## Customizing theme

#### 1. Define colors for `light` and `dark` theme.

```ts
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
  background: '#FFF',
  placeholder: '#6D6D6D',
  text: '#000',
  textLight: '#1B1B1B',
  textContrast: '#FFF',
  main: colors.primary,
  mainDark: colors.primaryLight,
  card: '#FFF',
  link: '#8E9095',
  border: '#D3D4D5',
};

export type Theme = typeof light;

export const dark: Theme = {
  ...colors,
  paper: '#2A2A2A',
  disabled: '#515151',
  background: '#000',
  placeholder: '#6D6D6D',
  text: '#FFF',
  textLight: '#D3D3D3',
  textContrast: '#FFF',
  main: colors.primaryLight,
  mainDark: colors.primary,
  card: '#1C1C1C',
  link: '#B5B7BC',
  border: '#343536',
};
```

#### 2. Wrap your component with `ThemeProvider` with given customTheme.

```tsx
<ThemeProvider customTheme={{light, dark}}>
  <App />
</ThemeProvider>
```
