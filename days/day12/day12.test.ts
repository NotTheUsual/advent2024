import { describe, expect, test } from 'bun:test';
import { run, runAgain } from './day12';
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

  describe('part 2', () => {
    test('test case', () => {
      const input = `AAAA
BBCD
BBCC
EEEC`;
      expect(runAgain(input)).toBe(80);
    });

    test('test case 2', () => {
      const input = `OOOOO
OXOXO
OOOOO
OXOXO
OOOOO`;
      expect(runAgain(input)).toBe(436);
    });

    test('test case 3', () => {
      const input = `EEEEE
EXXXX
EEEEE
EXXXX
EEEEE`;
      expect(runAgain(input)).toBe(236);
    });

    test('test case 4', () => {
      const input = `AAAAAA
AAABBA
AAABBA
ABBAAA
ABBAAA
AAAAAA`;
      expect(runAgain(input)).toBe(368);
    });

    test('test case 5', () => {
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
      expect(runAgain(input)).toBe(1206);
    });

    test('real puzzle', () => {
      const result = runAgain(day12Input);
      expect(result).toBe(862486);
    });
  });
});

