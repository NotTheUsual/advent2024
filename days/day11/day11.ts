const parseInput = (input: string): Array<string> => {
  return input.split(' ');
};

const splitStone = (stone: string): Array<string> => {
  const firstHalf = stone.slice(0, stone.length / 2);
  const secondHalf = stone.slice(stone.length / 2);
  const split = [`${Number.parseInt(firstHalf)}`, `${Number.parseInt(secondHalf)}`];
  return split;
};

const scoreStone = (stone: string, iterations: number): number => {
  if (iterations === 0) return 1;

  if (stone === '0') return scoreStone('1', iterations - 1);

  if (stone.length % 2 === 0) {
    const result = splitStone(stone)
      .map((newStone) => scoreStone(newStone, iterations - 1))
      .reduce((total, score) => total + score);
    return result;
  }

  const newStone = `${Number.parseInt(stone) * 2024}`;
  return scoreStone(newStone, iterations - 1);
};

export function run(input: string, iterations: number): number {
  const stones = parseInput(input);
  return stones.map((stone) => scoreStone(stone, iterations)).reduce((total, score) => total + score);
}
