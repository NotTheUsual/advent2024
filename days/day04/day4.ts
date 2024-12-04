type Grid = Array<Array<string>>;
type Point = { y: number; x: number };

const parseInput = (input: string): Grid => {
  return input.split('\n').map((line) => line.split(''));
};

const matchingNeighbours = (grid: Grid, { point, target }: { point: Point; target: string }): Array<Point> => {
  const matches: Array<Point> = [];

  for (let y = point.y - 1; y <= point.y + 1; y += 1) {
    for (let x = point.x - 1; x <= point.x + 1; x += 1) {
      const letter = grid[y]?.[x];
      if (letter === target) {
        matches.push({ x, y });
      }
    }
  }

  return matches;
};

const countXmases = (grid: Grid): number => {
  let count = 0;

  for (let y = 0; y < grid.length; y += 1) {
    const row = grid[y];
    for (let x = 0; x < row.length; x += 1) {
      const letter = row[x];
      if (letter !== 'X') continue;
      const point = { x, y };
      const neighbouringMs = matchingNeighbours(grid, { point, target: 'M' });

      for (const neighbour of neighbouringMs) {
        const diffX = neighbour.x - point.x;
        const diffY = neighbour.y - point.y;

        if (
          grid[neighbour.y + diffY]?.[neighbour.x + diffX] === 'A' &&
          grid[neighbour.y + diffY + diffY]?.[neighbour.x + diffX + diffX] === 'S'
        ) {
          count += 1;
        }
      }
    }
  }

  return count;
};

const findMas = (grid: Grid, point: Point): number => {
  let count = 0;

  if (grid[point.y - 1]?.[point.x - 1] === 'M' && grid[point.y + 1]?.[point.x + 1] === 'S') count += 1;
  if (grid[point.y - 1]?.[point.x + 1] === 'M' && grid[point.y + 1]?.[point.x - 1] === 'S') count += 1;
  if (grid[point.y + 1]?.[point.x - 1] === 'M' && grid[point.y - 1]?.[point.x + 1] === 'S') count += 1;
  if (grid[point.y + 1]?.[point.x + 1] === 'M' && grid[point.y - 1]?.[point.x - 1] === 'S') count += 1;
  
  return count;
}

const countXMASes = (grid: Grid): number => {
  let count = 0;

  for (let y = 0; y < grid.length; y += 1) {
    const row = grid[y];
    for (let x = 0; x < row.length; x += 1) {
      const letter = row[x];
      if (letter !== 'A') continue;
      const mases = findMas(grid, { x, y });
      if (mases === 2) count += 1;
    }
  }

  return count;
}

export function run(input: string): number {
  const grid = parseInput(input);
  return countXmases(grid);
}

export function runAgain(input: string): number {
  const grid = parseInput(input);
  return countXMASes(grid);
}
