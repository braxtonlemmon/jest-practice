import { analyze } from './analysis.js';
const array = [1, 8, 3, 4, 2, 6];

it('returns the average', () => {
  expect(analyze(array).average).toBe(4);
});

it('returns the minimum', () => {
  expect(analyze(array).min).toBe(1);
});

it('returns the maximum value', () => {
  expect(analyze(array).max).toBe(8);
});

it('returns length of array', () => {
  expect(analyze(array).length).toBe(6);
});