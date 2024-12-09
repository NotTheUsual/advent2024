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

const parseInputAgain = (input: string): Array<Array<number> | Array<'.'>> => {
  const diskMap = input.split('').map((character) => Number.parseInt(character));
  let id = 0;
  return diskMap.map((digit, index) => {
    const type = index % 2 === 0 ? 'file' : 'space';

    if (type === 'file') {
      const values = [...Array(digit)].map(() => id);
      id += 1;
      return values;
    }
    // type === 'space'
    const values: Array<'.'> = [...Array(digit)].map(() => '.');
    return values;
  });
};

const rearrangeEverythingAgain = (fileLayout: Array<Array<number> | Array<'.'>>): Array<Array<number> | Array<'.'>> => {
  const changedLayout = structuredClone(fileLayout);

  for (let index = fileLayout.length - 1; index >= 0; index -= 1) {
    const charSet = fileLayout[index];
    const character = charSet[0];
    if (!character || character === '.') continue;
    const spaceNeeded = charSet.length;

    for (let targetIndex = 0; targetIndex <= changedLayout.length; targetIndex += 1) {
      const targetCharSet = changedLayout[targetIndex];
      if (!targetCharSet) continue;
      const targetCharacter = targetCharSet[0];
      if (targetCharacter === character) break;
      if (targetCharacter !== '.') continue;
      if (targetCharSet.length < spaceNeeded) continue;

      const oldChangedIndex = changedLayout.findIndex((set) => set[0] === character);
      changedLayout[oldChangedIndex] = [...Array(charSet.length)].map(() => '.' as const);

      changedLayout.splice(
        targetIndex,
        1,
        charSet,
        [...Array(targetCharSet.length - charSet.length)].map(() => '.' as const)
      );

      break;
    }
  }

  return changedLayout;
};

export function runAgain(input: string): number {
  const fileLayout = parseInputAgain(input);
  const updatedLayout = rearrangeEverythingAgain(fileLayout);
  return calculateChecksum(updatedLayout.flat());
}
