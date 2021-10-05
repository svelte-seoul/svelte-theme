/**
 * @jest-environment jsdom
 */

import { fireEvent, render } from '@testing-library/svelte';

import ShowContext from './testUtil/context/index.svelte';

describe('ThemeProvider', () => {
  it('provides name of current theme', () => {
    const { getByText } = render(ShowContext, {
      props: {
        themeType: 'light',
      },
    });

    expect(getByText(/light/)).toBeInTheDocument();
  });

  it('provides theme object by name', () => {
    const { getByText } = render(ShowContext, {
      props: {
        themeType: 'light',
      },
    });

    expect(getByText(/"text":"#000"/)).toBeInTheDocument();
  });

  it('provides theme toggler function', async () => {
    const { getByText, getByRole } = render(ShowContext, {
      props: {
        themeType: 'light',
      },
    });

    await fireEvent.click(getByRole('button', { name: 'toggle' }));

    expect(getByText(/dark/)).toBeInTheDocument();
    expect(getByText(/"text":"#FFF"/)).toBeInTheDocument();

    await fireEvent.click(getByRole('button', { name: 'toggle' }));

    expect(getByText(/light/)).toBeInTheDocument();
    expect(getByText(/"text":"#000"/)).toBeInTheDocument();
  });
});
