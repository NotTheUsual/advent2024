import { describe, expect, test } from 'bun:test';
import { run, runAgain } from './day4';
import day4Input from './day4.input';

describe('Day 4', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;
      expect(run(input)).toBe(18);
    });

    test('real puzzle', () => {
      const result = run(day4Input);
      expect(result).toBe(2591);
    });
  });

  describe('part 2', () => {
    test('test case', () => {
      const input = `.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`;
      expect(runAgain(input)).toBe(9);
    });

    test('real puzzle', () => {
      const result = runAgain(day4Input);
      expect(result).toBe(1880);
    });
  });
});

