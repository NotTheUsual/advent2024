const parseInput = (input: string): Array<Array<number>> => {
  return input.split('\n').map((line: string) => {
    return line.split(' ').map((number) => Number.parseInt(number));
  });
};

const isSafe = (report: Array<number>): boolean => {
  let previousChange: 'increase' | 'decrease' | undefined;

  for (let index = 1; index < report.length; index += 1) {
    const level = report[index];
    const previousLevel = report[index - 1];
    const difference = level - previousLevel;

    if (difference === 0) return false;
    if (Math.abs(difference) > 3) return false;
    if (previousChange) {
      if (previousChange === 'increase' && difference < 0) return false;
      if (previousChange === 'decrease' && difference > 0) return false;
    }

    previousChange = difference < 0 ? 'decrease' : 'increase';
  }

  return true;
};

export function run(input: string): number {
  const reports = parseInput(input);
  return reports.filter(isSafe).length;
}

const isReallySafe = (report: Array<number>): boolean => {
  if (isSafe(report)) return true;

  for (let index = 0; index < report.length; index += 1) {
    const smallerReport = report.toSpliced(index, 1);
    if (isSafe(smallerReport)) return true;
  }

  return false;
};

export function runAgain(input: string): number {
  const reports = parseInput(input);
  return reports.filter(isReallySafe).length;
}
