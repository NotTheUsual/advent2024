import { describe, test, expect } from 'bun:test';
import { run, runAgain } from './day3';

const input = await Bun.file(import.meta.dir + '/day3.input.txt').text();

describe('Day 3', () => {
  describe('Part 1', () => {
    test('Test case', () => {
      const example = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
      expect(run(example)).toBe(161);
    });

    test('Real', () => {
      expect(run(input)).toBe(670);
    });
  });

//   describe('Part 2', () => {
//     test('Test case', () => {
//       const input = `7 6 4 2 1
// 1 2 7 8 9
// 9 7 6 2 1
// 1 3 2 4 5
// 8 6 4 4 1
// 1 3 6 7 9`;
//       expect(runAgain(input)).toBe(4);
//     });

//     test('Real', () => {
//       expect(runAgain(day3Input)).toBe(22776016);
//     });
//   });
});