import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useLoader from "../components/useLoader";

test("Default loader set to be false", async () => {
  const [loader, setLoader] = renderHook(useLoader).result.current
  expect(loader).toBe(false)
});