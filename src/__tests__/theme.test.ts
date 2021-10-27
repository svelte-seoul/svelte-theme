// @ts-ignore
import SampleComponent from "../../test/SampleComponent.svelte";
import {render} from "@testing-library/svelte";

it("should render without error", () => {
  const testngLib = render(SampleComponent);

  expect(testngLib.container).toMatchSnapshot();
});
