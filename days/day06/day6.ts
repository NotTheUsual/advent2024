type Location = '.' | '#' | '^';
type Point = { x: number; y: number };
type StringPoint = `${number},${number}`;
type Grid<TContent> = Array<Array<TContent>>;
type Direction = 'up' | 'down' | 'left' | 'right';
type DirectionalStringPoint = `${number},${number}/${Direction}`;

const parseInput = (input: string): Grid<Location> => {
  return input.split('\n').map((line) => line.split('') as Array<Location>);
};

const properly = (a: number, b: number) => a - b;

const grabLookups = (grid: Grid<Location>) => {
  let startingPoint: Point | undefined = undefined;
  const blockersByX: Record<number, Array<number>> = {};
  const blockersByY: Record<number, Array<number>> = {};

  for (let y = 0; y < grid.length; y += 1) {
    const row = grid[y];
    for (let x = 0; x < row.length; x += 1) {
      const location = row[x];

      if (location === '^') {
        startingPoint = { x, y };
      } else if (location === '#') {
        blockersByX[x] ||= [];
        blockersByX[x].push(y);
        blockersByX[x].sort(properly);

        blockersByY[y] ||= [];
        blockersByY[y].push(x);
        blockersByY[y].sort(properly);
      }
    }
  }

  if (!startingPoint) throw new Error('No start found');

  return {
    startingPoint,
    blockersByX,
    blockersByY
  };
};

const turn90 = (direction: Direction): Direction => {
  switch (direction) {
    case 'up':
      return 'right';
    case 'right':
      return 'down';
    case 'down':
      return 'left';
    case 'left':
      return 'up';
  }
};

const pointToString = (point: Point): StringPoint => `${point.x},${point.y}`;
const pointToDirectionString = (point: Point, direction: Direction): DirectionalStringPoint => `${point.x},${point.y}/${direction}`;

const findVisitedLocationCount = ({
  grid,
  startingPoint,
  blockersByX,
  blockersByY
}: ReturnType<typeof grabLookups> & { grid: Grid<Location> }): number => {
  const gridYMax = grid.length;
  const gridXMax = grid[0].length;

  let position: Point = startingPoint;
  let direction: Direction = 'up';
  let ended = false;
  let loops = 0;
  const stops: Set<StringPoint> = new Set();

  while (!ended && loops < 10000) {
    switch (direction) {
      case 'up': {
        const nextBlockers = blockersByX[position.x];
        const nextBlockerY = nextBlockers?.toReversed().find((blocker) => blocker < position.y);

        if (nextBlockerY === undefined) {
          for (let y = position.y; y >= 0; y -= 1) {
            stops.add(pointToString({ x: position.x, y }));
          }
          ended = true;
        } else {
          for (let y = position.y; y > nextBlockerY; y -= 1) {
            stops.add(pointToString({ x: position.x, y }));
          }
          position = { x: position.x, y: nextBlockerY + 1 };
          direction = turn90(direction);
        }
        break;
      }

      case 'right': {
        const nextBlockers = blockersByY[position.y];
        const nextBlockerX = nextBlockers?.find((blocker) => blocker > position.x);
        if (nextBlockerX === undefined) {
          for (let x = position.x; x < gridXMax; x += 1) {
            stops.add(pointToString({ y: position.y, x }));
          }
          ended = true;
        } else {
          for (let x = position.x; x < nextBlockerX; x += 1) {
            stops.add(pointToString({ y: position.y, x }));
          }
          position = { y: position.y, x: nextBlockerX - 1 };
          direction = turn90(direction);
        }
        break;
      }

      case 'down': {
        const nextBlockers = blockersByX[position.x];
        const nextBlockerY = nextBlockers?.find((blocker) => blocker > position.y);
        if (nextBlockerY === undefined) {
          for (let y = position.y; y < gridYMax; y += 1) {
            stops.add(pointToString({ x: position.x, y }));
          }
          ended = true;
        } else {
          for (let y = position.y; y < nextBlockerY; y += 1) {
            stops.add(pointToString({ x: position.x, y }));
          }
          position = { x: position.x, y: nextBlockerY - 1 };
          direction = turn90(direction);
        }
        break;
      }

      case 'left': {
        const nextBlockers = blockersByY[position.y];
        const nextBlockerX = nextBlockers?.toReversed().find((blocker) => blocker < position.x);
        if (nextBlockerX === undefined) {
          for (let x = position.x; x >= 0; x -= 1) {
            stops.add(pointToString({ y: position.y, x }));
          }
          ended = true;
        } else {
          for (let x = position.x; x > nextBlockerX; x -= 1) {
            stops.add(pointToString({ y: position.y, x }));
          }
          position = { y: position.y, x: nextBlockerX + 1 };
          direction = turn90(direction);
        }
        break;
      }
    }
    loops += 1;
  }

  if (!ended) {
    throw new Error(`Gave up after ${loops} loops`);
  }

  return stops.size;
};

export function run(input: string): number {
  const grid = parseInput(input);
  const { startingPoint, blockersByX, blockersByY } = grabLookups(grid);
  return findVisitedLocationCount({ grid, startingPoint, blockersByX, blockersByY });
}

const grabAltGrids = (grid: Grid<Location>): Array<Grid<Location>> => {
  const grids: Array<Grid<Location>> = [];

  for (let y = 0; y < grid.length; y += 1) {
    const row = grid[y];
    for (let x = 0; x < row.length; x += 1) {
      const cell = row[x];
      if (cell === '.') {
        const clone = structuredClone(grid)
        clone[y][x] = '#';
        grids.push(clone)
      }
    }
  }

  return grids;
}

const checkIfThisLoops = ({
  grid,
  startingPoint,
  blockersByX,
  blockersByY
}: ReturnType<typeof grabLookups> & { grid: Grid<Location> }): boolean => {
  const gridYMax = grid.length;
  const gridXMax = grid[0].length;

  let position: Point = startingPoint;
  let direction: Direction = 'up';
  const positionLog: Set<DirectionalStringPoint> = new Set([pointToDirectionString(startingPoint, direction)]);
  let ended: false | 'finished' | 'looped' = false;
  let loops = 0;
  const stops: Set<StringPoint> = new Set();

  while (!ended && loops < 10000) {
    switch (direction) {
      case 'up': {
        const nextBlockers = blockersByX[position.x];
        const nextBlockerY = nextBlockers?.toReversed().find((blocker) => blocker < position.y);

        if (nextBlockerY === undefined) {
          for (let y = position.y; y >= 0; y -= 1) {
            stops.add(pointToString({ x: position.x, y }));
          }
          ended = 'finished';
        } else {
          for (let y = position.y; y > nextBlockerY; y -= 1) {
            stops.add(pointToString({ x: position.x, y }));
          }
          position = { x: position.x, y: nextBlockerY + 1 };
          direction = turn90(direction);
          const stringPosition = pointToDirectionString(position, direction);
          if (positionLog.has(stringPosition)) {
            ended = 'looped'
          } else {
            positionLog.add(stringPosition)
          }
        }
        break;
      }

      case 'right': {
        const nextBlockers = blockersByY[position.y];
        const nextBlockerX = nextBlockers?.find((blocker) => blocker > position.x);
        if (nextBlockerX === undefined) {
          for (let x = position.x; x < gridXMax; x += 1) {
            stops.add(pointToString({ y: position.y, x }));
          }
          ended = 'finished';
        } else {
          for (let x = position.x; x < nextBlockerX; x += 1) {
            stops.add(pointToString({ y: position.y, x }));
          }
          position = { y: position.y, x: nextBlockerX - 1 };
          direction = turn90(direction);
          const stringPosition = pointToDirectionString(position, direction);
          if (positionLog.has(stringPosition)) {
            ended = 'looped'
          } else {
            positionLog.add(stringPosition)
          }
        }
        break;
      }

      case 'down': {
        const nextBlockers = blockersByX[position.x];
        const nextBlockerY = nextBlockers?.find((blocker) => blocker > position.y);
        if (nextBlockerY === undefined) {
          for (let y = position.y; y < gridYMax; y += 1) {
            stops.add(pointToString({ x: position.x, y }));
          }
          ended = 'finished';
        } else {
          for (let y = position.y; y < nextBlockerY; y += 1) {
            stops.add(pointToString({ x: position.x, y }));
          }
          position = { x: position.x, y: nextBlockerY - 1 };
          direction = turn90(direction);
          const stringPosition = pointToDirectionString(position, direction);
          if (positionLog.has(stringPosition)) {
            ended = 'looped'
          } else {
            positionLog.add(stringPosition)
          }
        }
        break;
      }

      case 'left': {
        const nextBlockers = blockersByY[position.y];
        const nextBlockerX = nextBlockers?.toReversed().find((blocker) => blocker < position.x);
        if (nextBlockerX === undefined) {
          for (let x = position.x; x >= 0; x -= 1) {
            stops.add(pointToString({ y: position.y, x }));
          }
          ended = 'finished';
        } else {
          for (let x = position.x; x > nextBlockerX; x -= 1) {
            stops.add(pointToString({ y: position.y, x }));
          }
          position = { y: position.y, x: nextBlockerX + 1 };
          direction = turn90(direction);
          const stringPosition = pointToDirectionString(position, direction);
          if (positionLog.has(stringPosition)) {
            ended = 'looped'
          } else {
            positionLog.add(stringPosition)
          }
        }
        break;
      }
    }
    loops += 1;
  }

  if (!ended) {
    throw new Error(`Gave up after ${loops} loops`);
  }

  return ended === 'looped';
};

export function runAgain(input: string): number {
  const grid = parseInput(input);
  const altGrids = grabAltGrids(grid);

  return altGrids.reduce((total, altGrid) => {
    const { startingPoint, blockersByX, blockersByY } = grabLookups(altGrid);
    const loops = checkIfThisLoops({ grid: altGrid, startingPoint, blockersByX, blockersByY });
    return loops ? total + 1 : total;
  }, 0);
}
