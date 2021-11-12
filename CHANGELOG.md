## 1.4.3

- Add rgb variables to support `rgba(var(--main-rgb), 0.2)`.

- Support 3 degit hex code for color.

## 1.4.0

### Breaking

Rename context name to `svelte-theme` to remove side effect with other contexts.

### Bugfix

Fix changing theme not upadting the `custom` variables.

## 1.3.0

### Enhancement

Convert `kebab-case` from `camelCase` on case like `HTMLElement`. This will be converted to `html-element`.

### Bugfix

Fix initializing css variables that did not update the store variables.

## 1.1.2

Automatically detect the `dark` mode when mounted.

## 1.1.1

Enhance `changeThemeType` behavior in themeStore. This is not and optional function and the `themeType` arg is optional.

## 1.1.0

Enhance converting key to `kebab-case` from `camelCase`.

- Previously `val10` converted to `--var-1-0` but should be `val10`.

## 1.0.3

Add missing `changeThemeType` prop at `ThemeStore`.

## 1.0.2

Update `customTheme` types which wasn't correctly typed.

## 1.0.0

First release that prototyped [@dooboo-ui/theme](https://www.npmjs.com/package/@dooboo-ui/theme).

## 0.6.2

First working version packed with typescript.
