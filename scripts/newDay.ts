import { $ } from 'bun';

async function generateNewDay() {
  const dayNumber = process.argv[2];

  if (!dayNumber) {
    console.error('No day provided');
    process.exitCode = 1;
    return;
  }

  const day = `${dayNumber}`.padStart(2, '0');
  await $`mkdir days/day${day}`;
  await $`touch days/day${day}/day${dayNumber}{.input.,.test.,.}ts`;

  const starterCode = `export function run(input: string): number {
  return 0;
}
`;
  await $`echo "${starterCode}" >> days/day${day}/day${dayNumber}.ts`;
  
  const starterInput = `const input = \`\`;
export default input;
`;
  await $`echo "${starterInput}" >> days/day${day}/day${dayNumber}.input.ts`;
  
  const starterTest = `import { describe, expect, test } from 'bun:test';
import { run } from './day${dayNumber}';
import day${dayNumber}Input from './day${dayNumber}.input';

describe('Day ${dayNumber}', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = \`\`;
      expect(run(input)).toBe(198);
    });

    test.skip('real puzzle', () => {
      const result = run(day${dayNumber}Input);
      expect(result).toBe(2954600);
    });
  });
});
`;
  await $`echo "${starterTest}" >> days/day${day}/day${dayNumber}.test.ts`;
}

await generateNewDay();
