
const calculate = (instruction: string): number => {
  const [first, last] = instruction.split(',');
  return parseInt(first) * parseInt(last)
}

export function run(input: string): number {
  const instructions = [...input.matchAll(/mul\((\d+,\d+)\)/g)].map(result => result[1]);
  return instructions.reduce((total, instruction) => total + calculate(instruction), 0);
}

const grabRelevantResult = (matches: Array<string | undefined>): string => {
  const [, ...relevantResults] = matches;
  const result = relevantResults.filter(result => !!result).at(0);
  if (!result) throw new Error();
  return result;
}

export function runAgain(input: string): number {
  const dosDontsMulsPattern = /(?:mul\((\d+,\d+)\)|(do)\(\)|(don't)\(\))/g;
  const instructions = [...input.matchAll(dosDontsMulsPattern)].map(grabRelevantResult);
  
  let state: "do" | "don't" = "do";
  
  return instructions.reduce((total, instruction) => {
    if (instruction === 'do') {
      state = 'do';
    } else if (instruction === "don't") {
      state = "don't";
    } else {
      if (state === 'do') {
        return total + calculate(instruction);
      }
    }

    return total
  }, 0);
}