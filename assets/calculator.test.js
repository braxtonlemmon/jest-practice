import Calculator from './calculator.js';

it('adds two numbers', () => {
  expect(Calculator.add(2, 3)).toBe(5);
})

it('subtracts b from a', () => {
  expect(Calculator.subtract(5, 2)).toBe(3);
})

it('divides a by b', () => {
  expect(Calculator.divide(10, 5)).toBe(2);
})

it('multiplies a by b', () => {
  expect(Calculator.multiply(5, 6)).toBe(30);
})