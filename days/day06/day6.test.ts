import { describe, expect, test } from 'bun:test';
import { run } from './day6';
import day6Input from './day6.input';

describe('Day 6', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;
      expect(run(input)).toBe(41);
    });

    test('real puzzle', () => {
      const result = run(day6Input);
      expect(result).toBe(2954600);
    });
  });
});

