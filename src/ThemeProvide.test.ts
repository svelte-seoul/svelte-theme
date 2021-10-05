/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';

import ShowContext from './testUtil/context/index.svelte';

describe('ThemeProvider', () => {
  it('provides theme object to children', () => {
    const { getByText } = render(ShowContext, {
      props: {
        contextValue: { theme: { light: { primary: 'red' } } },
      },
    });

    expect(getByText(/{"light":{"primary":"red"}}/)).toBeInTheDocument();
  });
});
