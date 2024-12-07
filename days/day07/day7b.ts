interface Equation {
  total: number;
  values: Array<number>;
}

const OPERATIONS = ['+', '*', '||'] as const;
type Operation = (typeof OPERATIONS)[number];

const parseInput = (input: string): Array<Equation> => {
  return input.split('\n').map((line) => {
    const [stringTotal, valuesString] = line.split(': ');
    return {
      total: Number.parseInt(stringTotal),
      values: valuesString.split(' ').map((stringValue) => Number.parseInt(stringValue))
    };
  });
};

const operate = (operation: Operation, first: number, second: number): number => {
  if (operation === '+') return first + second;
  if (operation === '||') return Number.parseInt(`${first}${second}`);
  return first * second;
};

type PseudoResult = Array<string> | null;

const runNextEvaluations = ({
  index,
  currentRunningTotal,
  values,
  total
}: { index: number; currentRunningTotal: number; values: Array<number>; total: number }): Array<PseudoResult> => {
  const nextValue = values[index];
  const isLastItem = index === values.length - 1;

  return OPERATIONS.map((operation) => {
    // console.log(`Running ${currentRunningTotal} ${operation} ${nextValue}`)
    const nextRunningTotal = operate(operation, currentRunningTotal, nextValue);
    if (nextRunningTotal > total) {
      // console.log(`${nextRunningTotal} is larger than ${total}. Failing.`)
      return null;
    }
    if (isLastItem) {
      if (nextRunningTotal !== total) {
        // console.log(`Final result ${nextRunningTotal} does not equal ${total}. Failing.`)
        return null;
      }
      // console.log(`Final result ${nextRunningTotal} does equal ${total}! Returning.`)
      return [operation];
    }
    const futureOperations = runNextEvaluations({
      index: index + 1,
      currentRunningTotal: nextRunningTotal,
      values,
      total
    });
    if (futureOperations.length === 0) return null;
    return futureOperations.map((futureOperation) => operation + futureOperation);
  }).filter((result) => result !== null);
};

const evaluateEquation = ({ total, values }: Equation) => {
  const startingIndex = 1;
  const initialValue = values[0];

  return runNextEvaluations({ index: startingIndex, currentRunningTotal: initialValue, total, values });
};

export function runAgain(input: string): number {
  const tests = parseInput(input);

  return tests.reduce((total, test) => {
    const result = evaluateEquation(test);
    const additon = result.length ? test.total : 0;
    return total + additon;
  }, 0);
}
