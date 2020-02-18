import { capitalize } from './capitalize.js';

it('capitalizes first character of string', () => {
  expect(capitalize('small pumpkin')).toMatch('Small pumpkin');
});

it('works for empty string', () => {
  expect(capitalize('')).toMatch('');
});