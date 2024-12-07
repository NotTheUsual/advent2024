import { describe, expect, test } from 'bun:test';
import { run } from './day7';
import day7Input from './day7.input';

describe('Day 7', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;
      expect(run(input)).toBe(3749);
    });

    test('real puzzle', () => {
      const result = run(day7Input);
      expect(result).toBe(2941973819040);
    });
  });
});

