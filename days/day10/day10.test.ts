import { describe, expect, test } from 'bun:test';
import { run } from './day10';
import day10Input from './day10.input';

describe('Day 10', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`;
      expect(run(input)).toBe(36);
    });

    test('real puzzle', () => {
      const result = run(day10Input);
      expect(result).toBe(733);
    });
  });
});

