type Point = { x: number; y: number };
type StringPoint = `${number},${number}`;
type Direction = 'N' | 'E' | 'S' | 'W';
type ImmediateBorders = { N: Point | undefined; E: Point | undefined; S: Point | undefined; W: Point | undefined };

const stringPoint = (point: Point): StringPoint => `${point.x},${point.y}`;
const pointPoint = (point: StringPoint): Point => {
  const [x, y] = point.split(',');
  return { x: Number.parseInt(x), y: Number.parseInt(y) };
};

class Plot {
  plot: Array<Array<string>>;

  constructor(plot: Array<Array<string>>) {
    this.plot = plot;
  }

  neighboursOf(point: Point) {
    const neighbours: Array<Point> = [];
    if (this.plot[point.y - 1]?.[point.x] !== undefined) neighbours.push({ ...point, y: point.y - 1 });
    if (this.plot[point.y + 1]?.[point.x] !== undefined) neighbours.push({ ...point, y: point.y + 1 });
    if (this.plot[point.y]?.[point.x - 1] !== undefined) neighbours.push({ ...point, x: point.x - 1 });
    if (this.plot[point.y]?.[point.x + 1] !== undefined) neighbours.push({ ...point, x: point.x + 1 });
    return neighbours;
  }

  matchingNeighboursOf(point: Point) {
    const targetPlant = this.plantAt(point);
    const neighbours: Array<Point> = [];
    if (this.plot[point.y - 1]?.[point.x] === targetPlant) neighbours.push({ ...point, y: point.y - 1 });
    if (this.plot[point.y + 1]?.[point.x] === targetPlant) neighbours.push({ ...point, y: point.y + 1 });
    if (this.plot[point.y]?.[point.x - 1] === targetPlant) neighbours.push({ ...point, x: point.x - 1 });
    if (this.plot[point.y]?.[point.x + 1] === targetPlant) neighbours.push({ ...point, x: point.x + 1 });
    return neighbours;
  }

  borderSegmentsOf(point: Point): ImmediateBorders {
    const targetPlant = this.plantAt(point);
    const borders: ImmediateBorders = { N: undefined, E: undefined, S: undefined, W: undefined };

    if (this.plot[point.y - 1]?.[point.x] !== targetPlant) borders.N = point;
    if (this.plot[point.y + 1]?.[point.x] !== targetPlant) borders.S = { ...point, y: point.y + 1 };
    if (this.plot[point.y]?.[point.x - 1] !== targetPlant) borders.W = point;
    if (this.plot[point.y]?.[point.x + 1] !== targetPlant) borders.E = { ...point, x: point.x + 1 };

    return borders;
  }

  plantAt(point: Point) {
    return this.plot[point.y]?.[point.x];
  }

  get width() {
    return this.plot[0].length;
  }

  get height() {
    return this.plot.length;
  }
}

const parseInput = (input: string): Plot => {
  const plot = input.split('\n').map((row) => row.split(''));
  return new Plot(plot);
};

type Area = Set<StringPoint>;

const delveFurtherFrom = (point: Point, plot: Plot, area: Area) => {
  const targetPlant = plot.plantAt(point);

  for (const neighbour of plot.neighboursOf(point)) {
    if (area.has(stringPoint(neighbour))) continue;
    if (plot.plantAt(neighbour) !== targetPlant) continue;
    area.add(stringPoint(neighbour));

    delveFurtherFrom(neighbour, plot, area);
  }
};

const findAreaFrom = (point: Point, plot: Plot) => {
  const area = new Set<StringPoint>([stringPoint(point)]);

  delveFurtherFrom(point, plot, area);

  return area;
};

const findAreas = (plot: Plot) => {
  const areas: Record<string, Array<Area>> = {};

  for (let y = 0; y < plot.height; y += 1) {
    for (let x = 0; x < plot.width; x += 1) {
      const point = { x, y };
      const plant = plot.plantAt(point);
      if (areas[plant]?.find((area) => area.has(stringPoint(point)))) continue;
      const area = findAreaFrom(point, plot);
      areas[plant] ||= [];
      areas[plant].push(area);
    }
  }

  return areas;
};

const scoreArea = (area: Area, plot: Plot): number => {
  const size = area.size;
  const perimeter = [...area].reduce((total, point) => {
    const neighbours = plot.matchingNeighboursOf(pointPoint(point));
    return total + (4 - neighbours.length);
  }, 0);

  return size * perimeter;
};

export function run(input: string): number {
  const plot = parseInput(input);
  const areas = findAreas(plot);
  return Object.values(areas).reduce((total, plantAreas) => {
    const plantScore = plantAreas.reduce((subTotal, area) => subTotal + scoreArea(area, plot), 0);
    return total + plantScore;
  }, 0);
}

const scoreAreaAgain = (area: Area, plot: Plot): number => {
  type Borders = Record<`${Direction}${number}`, Set<number>>;
  const borderRecord: Borders = {};

  for (const plant of area) {
    const borderSegments = plot.borderSegmentsOf(pointPoint(plant));
    if (borderSegments.N) {
      const key = `N${borderSegments.N.y}` as const;
      borderRecord[key] ||= new Set();
      borderRecord[key].add(borderSegments.N.x);
    }
    if (borderSegments.S) {
      const key = `S${borderSegments.S.y}` as const;
      borderRecord[key] ||= new Set();
      borderRecord[key].add(borderSegments.S.x);
    }
    if (borderSegments.E) {
      const key = `E${borderSegments.E.x}` as const;
      borderRecord[key] ||= new Set();
      borderRecord[key].add(borderSegments.E.y);
    }
    if (borderSegments.W) {
      const key = `W${borderSegments.W.x}` as const;
      borderRecord[key] ||= new Set();
      borderRecord[key].add(borderSegments.W.y);
    }
  }

  const borders = Object.values(borderRecord).reduce((total, borderLocations) => {
    const sortedBorders = [...borderLocations].sort((a, b) => a - b);
    let localCount = 0;
    sortedBorders.forEach((segment, index) => {
      if (index === 0) {
        localCount += 1;
        return;
      }
      const previousSegment = sortedBorders[index - 1];
      if (previousSegment !== segment - 1) {
        localCount += 1;
      }
    });

    return total + localCount;
  }, 0);

  const size = area.size;

  return borders * size;
};

export function runAgain(input: string): number {
  const plot = parseInput(input);
  const areas = findAreas(plot);

  return Object.values(areas).reduce((total, plantAreas) => {
    const plantScore = plantAreas.reduce((subTotal, area) => subTotal + scoreAreaAgain(area, plot), 0);
    return total + plantScore;
  }, 0);
}
