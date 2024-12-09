const parseInput = (input: string): Array<number | '.'> => {
  const diskMap = input.split('').map((character) => Number.parseInt(character));
  let id = 0;
  // biome-ignore lint/complexity/useFlatMap: The flatMap types don't seem to work as neatly as I'd like
  const realLayout: Array<number | '.'> = diskMap
    .map((digit, index) => {
      const type = index % 2 === 0 ? 'file' : 'space';

      if (type === 'file') {
        const values = [...Array(digit)].map(() => id);
        id += 1;
        return values;
      }
      // type === 'space'
      const values: Array<'.'> = [...Array(digit)].map(() => '.');
      return values;
    })
    .flat();
  return realLayout;
};

const rearrangeEverything = (fileLayout: Array<number | '.'>): Array<number | '.'> => {
  const changedLayout = structuredClone(fileLayout);
  let emptySpaces = fileLayout
    .map((character, index) => (character === '.' ? index : null))
    .filter((index) => index !== null);
  if (emptySpaces.length === 0) return changedLayout;

  for (let index = fileLayout.length - 1; index >= 0; index -= 1) {
    const character = fileLayout[index];
    if (character === '.') {
      emptySpaces = emptySpaces.filter((space) => space !== index);
      if (emptySpaces.length === 0) break;
      continue;
    }
    const nextSpace = emptySpaces.shift();
    if (nextSpace === undefined) throw new Error();
    changedLayout[nextSpace] = character;
    changedLayout[index] = '.';

    if (emptySpaces.length === 0) break;
  }

  return changedLayout;
};

const calculateChecksum = (updatedLayout: Array<number | '.'>): number => {
  return updatedLayout.reduce((total: number, character, index) => {
    if (character === '.') return total;
    character;
    return total + character * index;
  }, 0);
};

export function run(input: string): number {
  const fileLayout = parseInput(input);
  const updatedLayout = rearrangeEverything(fileLayout);
  return calculateChecksum(updatedLayout);
}
