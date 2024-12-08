type Grid = Array<Array<string>>;
type Point = { x: number; y: number };
type Lookup = Record<string, Array<Point>>;

const parseInput = (input: string): Grid => {
  return input.split('\n').map((row) => row.split(''));
};

const grabLocationMap = (grid: Grid): Lookup => {
  return grid.reduce((lookup, row, y) => {
    row.forEach((cell, x) => {
      if (cell === '.') return;
      lookup[cell] ||= [];
      lookup[cell].push({ x, y });
    });
    return lookup;
  }, {} as Lookup);
};

const distance = (pointA: Point, pointB: Point) => {
  return {
    diffX: pointB.x - pointA.x,
    diffY: pointB.y - pointA.y
  };
};

const equal = (pointA: Point, pointB: Point): boolean => {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const findAntinodeLocations = ({ grid, locationMap }: { grid: Grid; locationMap: Lookup }) => {
  const locations: Array<Point> = [];
  for (let y = 0; y < grid.length; y += 1) {
    const row = grid[y];
    for (let x = 0; x < row.length; x += 1) {
      const newLocation = { x, y };
      const locationFound = Object.entries(locationMap)
        .filter(([, antennaList]) => antennaList.length >= 2)
        .find(([, antennaList]) => {
          const differenceList = antennaList.map((antenna) => distance(newLocation, antenna));

          return differenceList.find((difference) => {
            if (difference.diffX === 0 && difference.diffY === 0) return false;
            const target: Point = { x: newLocation.x + (difference.diffX * 2), y: newLocation.y + (difference.diffY * 2) };

            return antennaList.find((antenna) => equal(antenna, target));
          });
        });

      if (locationFound) {
        locations.push(newLocation);
      }
    }
  }
  return locations;
};

export function run(input: string): number {
  const grid = parseInput(input);
  const locationMap = grabLocationMap(grid);
  const locations = findAntinodeLocations({ grid, locationMap });
  return locations.length;
}
