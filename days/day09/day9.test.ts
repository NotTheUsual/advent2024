import { describe, expect, test } from 'bun:test';
import { run } from './day9';
import day9Input from './day9.input';

describe('Day 9', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = '2333133121414131402';
      expect(run(input)).toBe(1928);
    });

    test('real puzzle', () => {
      const result = run(day9Input);
      expect(result).toBe(6310675819476); // [2.29s]
    });
  });
});

