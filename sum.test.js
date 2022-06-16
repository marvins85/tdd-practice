import {calculator, capitalize, reverse, analyzeArray, caesar, evaluateGuess} from './sum';

test('test for first capital letter', () => {
    expect(capitalize('practice')).toBe('Practice');
  });

  test('test for reversing a string', () => {
    expect(reverse('reverse')).toBe('esrever');
  });

  test('test for adding', () => {
    expect(calculator.add(1 , 2)).toBe(3);
  });

  test('test for subtracting', () => {
    expect(calculator.subtract(6 , 2)).toBe(4);
  });

  test('test for dividing', () => {
    expect(calculator.divide(6 , 2)).toBe(3);
  });

  test('test for multiplying', () => {
    expect(calculator.multiply(3 , 2)).toBe(6);
  });

  test('[0,1,2,3,4] to be', () => {
    const expected = {
        average: 2,
        min: 0,
        max: 4,
        length: 5
    }
    const data = [0,1,2,3,4];
    expect(analyzeArray(data)).toEqual(expected);
})

test('test code', () => {
  expect(caesar('z', 24)).toBe('x');
});

test('test for number mqtch or not', () => {
  expect(evaluateGuess(3 , 5)).toBe('YOUR GUESS IS TOO BIG');
});