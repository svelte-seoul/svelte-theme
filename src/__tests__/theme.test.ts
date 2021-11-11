import {render} from "@testing-library/svelte";

import SampleComponent from "../../test/SampleComponent.svelte";

describe('svelte-theme', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  
  it("renders without error", () => {
    const testngLib = render(SampleComponent);
  
    expect(testngLib.container).toMatchSnapshot();
  });
});
