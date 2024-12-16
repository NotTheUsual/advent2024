interface Machine {
  a: { x: number; y: number; }
  b: { x: number; y: number; }
  prize: { x: number; y: number; }
}

const parseMachine = (input: string): Machine => {
  const [buttonAString, buttonBString, prizeString] = input.split('\n');
  // biome-ignore lint/style/noNonNullAssertion: It's fine
  const [,buttonAX, buttonAY] = buttonAString.match(/.+X\+(\d+), Y\+(\d+)/)!;
  // biome-ignore lint/style/noNonNullAssertion: It's fine
  const [,buttonBX, buttonBY] = buttonBString.match(/.+X\+(\d+), Y\+(\d+)/)!;
  // biome-ignore lint/style/noNonNullAssertion: It's fine
  const [,prizeX, prizeY] = prizeString.match(/.+X=(\d+), Y=(\d+)/)!
  
  return {
    a: { x: Number.parseInt(buttonAX), y: Number.parseInt(buttonAY) },
    b: { x: Number.parseInt(buttonBX), y: Number.parseInt(buttonBY) },
    prize: { x: Number.parseInt(prizeX), y: Number.parseInt(prizeY) }
  }
}

const parseInput = (input: string) => {
  return input.split('\n\n').map(parseMachine);
}

const calculateMachineTokens = (machine: Machine): number => {
  const aValue = ((machine.b.y * machine.prize.x) - (machine.b.x * machine.prize.y)) / ((machine.b.y * machine.a.x)  - (machine.b.x * machine.a.y));
  const bValue = ((machine.a.y * machine.prize.x) - (machine.a.x * machine.prize.y)) / ((machine.a.y * machine.b.x)  - (machine.a.x * machine.b.y));

  if (aValue % 1 !== 0 || bValue % 1 !== 0) return 0;

  return (aValue * 3) + bValue;
}

export function run(input: string): number {
  const machines = parseInput(input);
  return machines.reduce((total, machine) => total + calculateMachineTokens(machine), 0);
}

const parseMachineAgain = (input: string): Machine => {
  const [buttonAString, buttonBString, prizeString] = input.split('\n');
  // biome-ignore lint/style/noNonNullAssertion: It's fine
  const [,buttonAX, buttonAY] = buttonAString.match(/.+X\+(\d+), Y\+(\d+)/)!;
  // biome-ignore lint/style/noNonNullAssertion: It's fine
  const [,buttonBX, buttonBY] = buttonBString.match(/.+X\+(\d+), Y\+(\d+)/)!;
  // biome-ignore lint/style/noNonNullAssertion: It's fine
  const [,prizeX, prizeY] = prizeString.match(/.+X=(\d+), Y=(\d+)/)!
  
  return {
    a: { x: Number.parseInt(buttonAX), y: Number.parseInt(buttonAY) },
    b: { x: Number.parseInt(buttonBX), y: Number.parseInt(buttonBY) },
    prize: { x: Number.parseInt(prizeX) + 10000000000000, y: Number.parseInt(prizeY) + 10000000000000 }
  }
}

const parseInputAgain = (input: string) => {
  return input.split('\n\n').map(parseMachineAgain);
}

export function runAgain(input: string): number {
  const machines = parseInputAgain(input);
  return machines.reduce((total, machine) => total + calculateMachineTokens(machine), 0);
}

