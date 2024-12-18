type Point = { x: number; y: number };
type Direction = '<' | '^' | '>' | 'v';
type MapCell = '#' | 'O' | '.' | '@';

class Warehouse {
  robotLocation: Point;
  grid: Array<Array<MapCell>>;

  constructor(input: string) {
    this.robotLocation = { x: 0, y: 0 };
    this.grid = input.split('\n').map((row, y) => {
      return row.split('').map((cell, x) => {
        if (cell === '@') this.robotLocation = { x, y };
        return cell as MapCell;
      });
    });
  }

  valueAt(point: Point) {
    return this.grid[point.y][point.x];
  }

  move(direction: Direction) {
    switch (direction) {
      case '<': {
        for (let x = this.robotLocation.x - 1; x >= 0; x -= 1) {
          if (this.valueAt({ x, y: this.robotLocation.y }) === '#') break;
          if (this.valueAt({ x, y: this.robotLocation.y }) === '.') {
            const movers = this.grid[this.robotLocation.y].slice(x + 1, this.robotLocation.x + 1);
            movers.forEach((mover, index) => {
              this.grid[this.robotLocation.y][x + index] = mover;
            });
            this.grid[this.robotLocation.y][this.robotLocation.x] = '.';
            this.robotLocation = { x: this.robotLocation.x - 1, y: this.robotLocation.y };
            break;
          }
        }
        break;
      }
      case '^': {
        for (let y = this.robotLocation.y - 1; y >= 0; y -= 1) {
          if (this.valueAt({ y, x: this.robotLocation.x }) === '#') break;
          if (this.valueAt({ y, x: this.robotLocation.x }) !== '.') continue;

          const movers: Array<MapCell> = [];
          for (let rowIndex = y + 1; rowIndex <= this.robotLocation.y; rowIndex += 1) {
            movers.push(this.grid[rowIndex][this.robotLocation.x]);
          }

          movers.forEach((mover, index) => {
            this.grid[y + index][this.robotLocation.x] = mover;
          });
          this.grid[this.robotLocation.y][this.robotLocation.x] = '.';
          this.robotLocation = { x: this.robotLocation.x, y: this.robotLocation.y - 1 };
          break;
        }
        break;
      }
      case '>': {
        for (let x = this.robotLocation.x + 1; x < this.grid[0].length; x += 1) {
          if (this.valueAt({ x, y: this.robotLocation.y }) === '#') break;
          if (this.valueAt({ x, y: this.robotLocation.y }) === '.') {
            const movers = this.grid[this.robotLocation.y].slice(this.robotLocation.x, x);
            movers.forEach((mover, index) => {
              this.grid[this.robotLocation.y][this.robotLocation.x + 1 + index] = mover;
            });
            this.grid[this.robotLocation.y][this.robotLocation.x] = '.';
            this.robotLocation = { x: this.robotLocation.x + 1, y: this.robotLocation.y };
            break;
          }
        }
        break;
      }
      case 'v': {
        for (let y = this.robotLocation.y + 1; y < this.grid.length; y += 1) {
          if (this.valueAt({ y, x: this.robotLocation.x }) === '#') break;
          if (this.valueAt({ y, x: this.robotLocation.x }) !== '.') continue;

          const movers: Array<MapCell> = [];
          for (let rowIndex = this.robotLocation.y; rowIndex < y; rowIndex += 1) {
            movers.push(this.grid[rowIndex][this.robotLocation.x]);
          }

          movers.forEach((mover, index) => {
            this.grid[this.robotLocation.y + 1 + index][this.robotLocation.x] = mover;
          });
          this.grid[this.robotLocation.y][this.robotLocation.x] = '.';
          this.robotLocation = { x: this.robotLocation.x, y: this.robotLocation.y + 1 };
          break;
        }
        break;
      }
    }
  }

  get gridAsString(): string {
    return this.grid.map((row) => row.join('')).join('\n');
  }

  get score(): number {
    let total = 0;

    for (let y = 0; y < this.grid.length; y += 1) {
      const row = this.grid[y];
      for (let x = 0; x < row.length; x += 1) {
        const value = this.valueAt({ x, y });
        if (value !== 'O') continue;
        total += y * 100 + x;
      }
    }

    return total;
  }
}

const parseInput = (input: string) => {
  const [gridString, instructionsString] = input.split('\n\n');

  const warehouse = new Warehouse(gridString);

  const instructions = instructionsString.replaceAll('\n', '').split('') as Array<Direction>;

  return {
    warehouse,
    instructions
  };
};

export function run(input: string): number {
  const { warehouse, instructions } = parseInput(input);
  for (const instruction of instructions) {
    warehouse.move(instruction);
  }
  return warehouse.score;
}
