
const calculate = (instruction: string): number => {
  const [first, last] = instruction.split(',');
  return parseInt(first) * parseInt(last)
}

export function run(input: string): number {
  const instructions = [...input.matchAll(/mul\((\d+,\d+)\)/g)].map(result => result[1]);
  return instructions.reduce((total, instruction) => total + calculate(instruction), 0);
}

export function runAgain(input: string): number {
  return 12;
}