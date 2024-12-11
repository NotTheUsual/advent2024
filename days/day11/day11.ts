const parseInput = (input: string): Array<string> => {
  return input.split(' ');
};

const splitStone = (stone: string): Array<string> => {
  const firstHalf = stone.slice(0, stone.length / 2);
  const secondHalf = stone.slice(stone.length / 2);
  const split = [`${Number.parseInt(firstHalf)}`, `${Number.parseInt(secondHalf)}`];
  return split;
};

const fullCache: Record<string, Record<number, number>> = {};

const getCachedScore = (stone: string, iterations: number): number => {
  if (fullCache[stone]?.[iterations]) return fullCache[stone]?.[iterations];
  const score = scoreStone(stone, iterations);
  fullCache[stone] ||= {};
  fullCache[stone][iterations] = score;
  return score;
};

const scoreStone = (stone: string, iterations: number): number => {
  if (iterations === 0) return 1;
  const remainingIterations = iterations - 1;

  if (stone === '0') {
    return getCachedScore('1', remainingIterations);
  }

  if (stone.length % 2 === 0) {
    const result = splitStone(stone)
      .map((newStone) => getCachedScore(newStone, remainingIterations))
      .reduce((total, score) => total + score);
    return result;
  }

  const newStone = `${Number.parseInt(stone) * 2024}`;
  return getCachedScore(newStone, remainingIterations);
};

export function run(input: string, iterations: number): number {
  const stones = parseInput(input);
  return stones.map((stone) => scoreStone(stone, iterations)).reduce((total, score) => total + score);
}
