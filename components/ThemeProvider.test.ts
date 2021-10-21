import { fireEvent, render } from '@testing-library/svelte';

import ThemeWrapper from './testUtil/context/ThemeWrapper.svelte';
import ThemeProvider from './ThemeProvider.svelte';
import ShowContext from './testUtil/context/ShowContext.svelte';
import { light } from './theme';

describe('ThemeProvider', () => {
  it('provides name of current theme', () => {
    const { getByText } = render(ThemeWrapper, {
      props: {
        initialTheme: 'light',
        children: ShowContext,
      },
    });

    expect(getByText(/light/)).toBeInTheDocument();
  });

  it('provides theme object by name', () => {
    const { getByText } = render(ThemeWrapper, {
      props: {
        initialTheme: 'light',
        children: ShowContext,
      },
    });

    expect(getByText(/"text":"#000"/)).toBeInTheDocument();
  });

  it('provides theme toggler function', async () => {
    const { getByRole, getByText } = render(ThemeWrapper, {
      props: {
        initialTheme: 'light',
        children: ShowContext,
      },
    });

    await fireEvent.click(getByRole('button', { name: 'toggle' }));

    expect(getByText(/dark/)).toBeInTheDocument();
    expect(getByText(/"text":"#FFF"/)).toBeInTheDocument();

    await fireEvent.click(getByRole('button', { name: 'toggle' }));

    expect(getByText(/light/)).toBeInTheDocument();
    expect(getByText(/"text":"#000"/)).toBeInTheDocument();
  });

  it('sets golbal css variables', () => {
    render(ThemeProvider, { props: { initialTheme: 'light' } });

    Object.keys(light).forEach((type) => {
      const globalStyles = getComputedStyle(document.documentElement);

      expect(
        globalStyles.getPropertyValue(`--theme-${type}`),
      ).toBe(light[type]);
    });
  });
});
