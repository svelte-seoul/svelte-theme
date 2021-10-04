/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';

import ShowContext from './testUtil/ShowContext.svelte';
import ThemeProvider from './ThemeProvider.svelte';

describe('ThemeProvider', () => {
  it('provides theme object to children', () => {
    const { getByText } = render(ThemeProvider, {
      props: {
        Component: ShowContext,
        contextValue: { theme: { light: { primary: 'red' } } },
      },
    });

    expect(getByText(/{"light":{"primary":"red"}}/)).toBeInTheDocument();
  });
});
