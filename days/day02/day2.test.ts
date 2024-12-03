import { describe, expect, test } from 'bun:test';
import { run, runAgain } from './day2';
import day2Input from './day2.input';

describe('Day 2', () => {
  describe('Part 1', () => {
    test('Test case', () => {
      const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
      expect(run(input)).toBe(2);
    });

    test('Real', () => {
      expect(run(day2Input)).toBe(670);
    });
  });

  describe('Part 2', () => {
    test('Test case', () => {
      const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
      expect(runAgain(input)).toBe(4);
    });

    test('Real', () => {
      expect(runAgain(day2Input)).toBe(22776016);
    });
  });
});
