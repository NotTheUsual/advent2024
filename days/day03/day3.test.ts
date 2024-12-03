import { describe, test, expect } from 'bun:test';
import { run, runAgain } from './day3';

const input = await Bun.file(import.meta.dir + '/day3.input.txt').text();

describe('Day 3', () => {
  describe('Part 1', () => {
    test('Test case', () => {
      const example = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
      expect(run(example)).toBe(161);
    });

    test('Real', () => {
      expect(run(input)).toBe(183788984);
    });
  });

  describe('Part 2', () => {
    test('Test case', () => {
      const example = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;
      expect(runAgain(example)).toBe(48);
    });

    test('Real', () => {
      expect(runAgain(input)).toBe(62098619);
    });
  });
});