import { roundTo } from "./rounding";

test("check round to nickels", () => {
  expect(roundTo(10.0 / 3.0, 0.05)).toBe(3.35);
});

test("check round to cents", () => {
  expect(roundTo(2.345, 0.01)).toBe(2.35);
});

test("check round to dimes", () => {
  expect(roundTo(2.34, 0.1)).toBe(2.3);
});
