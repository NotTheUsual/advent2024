import { describe, expect, test } from 'bun:test';
import { run } from './day11';

describe('Day 11', () => {
  describe('part 1', () => {
    test('test case', () => {
      expect(run('0 1 10 99 999', 1)).toBe(7);
    });
    
    test('test case 2', () => {
      expect(run('125 17', 6)).toBe(22);
    });
    
    test('test case 3', () => {
      expect(run('125 17', 25)).toBe(55312);
    });

    test('real puzzle', () => {
      const result = run('8069 87014 98 809367 525 0 9494914 5', 25);
      expect(result).toBe(183484);
    });
  });
});

