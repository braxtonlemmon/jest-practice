import { reverseString } from './reverse.js';

it('returns reverse of string input', () => {
  expect(reverseString('donkey')).toMatch('yeknod');
})

it('includes character case', () => {
  expect(reverseString('BanAna')).toMatch('anAnaB');
})