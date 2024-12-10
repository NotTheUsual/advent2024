type Point = { x: number; y: number };

class TopographicMap {
  map: Array<Array<number>>;

  constructor(map: Array<Array<number>>) {
    this.map = map;
  }

  neighboursOf(point: Point) {
    const neighbours: Array<Point> = [];
    if (this.map[point.y - 1]?.[point.x] !== undefined) neighbours.push({ ...point, y: point.y - 1 });
    if (this.map[point.y + 1]?.[point.x] !== undefined) neighbours.push({ ...point, y: point.y + 1 });
    if (this.map[point.y]?.[point.x - 1] !== undefined) neighbours.push({ ...point, x: point.x - 1 });
    if (this.map[point.y]?.[point.x + 1] !== undefined) neighbours.push({ ...point, x: point.x + 1 });
    return neighbours;
  }

  valueAt(point: Point) {
    return this.map[point.y]?.[point.x];
  }
}

const parseInput = (input: string): { map: TopographicMap; trailheads: Array<Point> } => {
  const trailheads: Array<Point> = [];
  const map = input.split('\n').map((row, y) =>
    row.split('').map((digit, x) => {
      if (digit === '0') trailheads.push({ x, y });
      return Number.parseInt(digit);
    })
  );
  return { trailheads, map: new TopographicMap(map) };
};

const sum = (total: number, value: number) => total + value;

const findEndpointsFrom = (point: Point, map: TopographicMap): Array<string> => {
  const height = map.valueAt(point);
  const neighbours = map.neighboursOf(point);
  return neighbours
    .flatMap((neighbour) => {
      const neighbouringHeight = map.valueAt(neighbour);
      if (neighbouringHeight !== height + 1) return null;
      if (neighbouringHeight === 9) return `${neighbour.x},${neighbour.y}`;
      return findEndpointsFrom(neighbour, map);
    })
    .filter((result) => result !== null);
};

export function run(input: string): number {
  const { map, trailheads } = parseInput(input);
  const scores = trailheads.map((trailhead) => {
    return new Set(findEndpointsFrom(trailhead, map)).size;
  });
  return scores.reduce(sum);
}

const scoreTrailFrom = (point: Point, map: TopographicMap): number => {
  const height = map.valueAt(point);
  const neighbours = map.neighboursOf(point);
  return neighbours.map((neighbour) => {
    const neighbouringHeight = map.valueAt(neighbour);
    if (neighbouringHeight !== height + 1) return 0;
    if (neighbouringHeight === 9) return 1;
    return scoreTrailFrom(neighbour, map);
  }).reduce(sum);
};

export function runAgain(input: string): number {
  const { map, trailheads } = parseInput(input);
  const scores = trailheads.map((trailhead) => scoreTrailFrom(trailhead, map));
  return scores.reduce(sum)

}
