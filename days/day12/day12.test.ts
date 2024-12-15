import { describe, expect, test } from 'bun:test';
import { run } from './day12';
import day12Input from './day12.input';

describe('Day 12', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = `AAAA
BBCD
BBCC
EEEC`;
      expect(run(input)).toBe(140);
    });

    test('test case 2', () => {
      const input = `OOOOO
OXOXO
OOOOO
OXOXO
OOOOO`;
      expect(run(input)).toBe(772);
    });

    test('test case 3', () => {
      const input = `RRRRIICCFF
RRRRIICCCF
VVRRRCCFFF
VVRCCCJFFF
VVVVCJJCFE
VVIVCCJJEE
VVIIICJJEE
MIIIIIJJEE
MIIISIJEEE
MMMISSJEEE`;
      expect(run(input)).toBe(1930);
    });

    test('real puzzle', () => {
      const result = run(day12Input);
      expect(result).toBe(1402544);
    });
  });
});

