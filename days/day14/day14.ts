type Point = { x: number; y: number };
type Velocity = Point;

const parseInput = (input: string): Array<{ point: Point; velocity: Velocity }> => {
  return input.split('\n').map((line) => {
    // biome-ignore lint/style/noNonNullAssertion: It's fine
    const [, pointX, pointY, velocityX, velocityY] = line.match(/p=(.+),(.+) v=(.+),(.+)/)!;
    return {
      point: { x: Number.parseInt(pointX), y: Number.parseInt(pointY) },
      velocity: { x: Number.parseInt(velocityX), y: Number.parseInt(velocityY) }
    };
  });
};

const runTheNumbers = ({
  bots,
  gridDimensions,
  iterations
}: {
  bots: Array<{ point: Point; velocity: Velocity }>;
  gridDimensions: { width: number; height: number };
  iterations: number;
}): Array<Point> => {
  return bots.map((bot) => {
    const furthestX = bot.point.x + bot.velocity.x * iterations;
    const furthestY = bot.point.y + bot.velocity.y * iterations;
    return {
      x: (gridDimensions.width + (furthestX % gridDimensions.width)) % gridDimensions.width,
      y: (gridDimensions.height + (furthestY % gridDimensions.height)) % gridDimensions.height
    };
  });
};

const quadrantOfBot = (bot: Point, gridDimensions: { width: number; height: number }): 1 | 2 | 3 | 4 | null => {
  const midX = Math.floor(gridDimensions.width / 2);
  const midY = Math.floor(gridDimensions.height / 2);

  if (bot.x === midX || bot.y === midY) return null;

  if (bot.x < midX && bot.y < midY) return 1;
  if (bot.x > midX && bot.y < midY) return 2;
  if (bot.x < midX && bot.y > midY) return 3;
  if (bot.x > midX && bot.y > midY) return 4;

  return null;
};

const scoreResults = ({
  bots,
  gridDimensions
}: { bots: Array<Point>; gridDimensions: { width: number; height: number } }): number => {
  const scores = { 1: 0, 2: 0, 3: 0, 4: 0 };
  for (const bot of bots) {
    const quadrant = quadrantOfBot(bot, gridDimensions);
    if (quadrant !== null) scores[quadrant] += 1;
  }
  return scores[1] * scores[2] * scores[3] * scores[4];
};

export function run(input: string, gridDimensions: { width: number; height: number }): number {
  const bots = parseInput(input);
  const movedBots = runTheNumbers({ bots, gridDimensions, iterations: 100 });

  return scoreResults({ bots: movedBots, gridDimensions });
}

export function runAgain(input: string, gridDimensions: { width: number; height: number }) {
  const bots = parseInput(input);
  let iterations = 10;
  const interesting: Array<number> = [];

  while (iterations < 20_000) {
    const movedBots = runTheNumbers({ bots, gridDimensions, iterations });
    const stringBots = movedBots.map(bot => `${bot.x},${bot.y}`);
    const hasDuplicates = stringBots.find((bot, index) => stringBots.indexOf(bot) !== index);

    if (!hasDuplicates) interesting.push(iterations);
    iterations += 1;

  }

  console.log({ interesting });
}
