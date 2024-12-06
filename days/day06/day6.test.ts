import { describe, expect, test } from 'bun:test';
import { run, runAgain } from './day6';
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
      expect(result).toBe(4374);
    });
  });

  describe('part 2', () => {
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
      expect(runAgain(input)).toBe(6);
    });

    test.skip('real puzzle', () => {
      const result = runAgain(day6Input);
      expect(result).toBe(1705); // [11229.51ms]
    });
  });
});

