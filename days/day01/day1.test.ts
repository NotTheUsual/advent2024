import { describe, test, expect } from 'bun:test';
import { run, runAgain } from './day1';
import day1Input from './day1.input';

describe('Day 1', () => {
  describe('Part 1', () => {
    test('Test case', () => {
      const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
      expect(run(input)).toBe(11);
    });

    test('Real', () => {
      expect(run(day1Input)).toBe(1660292);
    });
  });

  describe('Part 2', () => {
    test('Test case', () => {
      const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
      expect(runAgain(input)).toBe(31);
    });

    test('Real', () => {
      expect(runAgain(day1Input)).toBe(22776016);
    });
  });
});