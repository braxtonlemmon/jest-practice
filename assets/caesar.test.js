import { caesarCipher } from './caesar.js';

it('returns correctly encrypted string', () => {
  expect(caesarCipher('apple', 3)).toMatch('dssoh');
})

it('maintains character case', () => {
  expect(caesarCipher('WaFflEs', 1)).toMatch('XbGgmFt');
})

it('does not alter punctuation', () => {
  expect(caesarCipher('Hi pal!', 2)).toMatch('Jk rcn!');
})