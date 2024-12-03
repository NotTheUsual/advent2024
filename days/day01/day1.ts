const parselists = (input: string): [Array<number>, Array<number>] => {
  const unsortedLists = input
    .split('\n')
    .map((line) => {
      const numbers = line.match(/(\d+)\s+(\d+)/);
      if (!numbers) throw new Error();
      const [, first, second] = numbers;

      return [Number.parseInt(first), Number.parseInt(second)];
    })
    .reduce(
      (lists, [first, second]) => {
        lists[0].push(first);
        lists[1].push(second);
        return lists;
      },
      [[], []] as [Array<number>, Array<number>]
    );

  return [unsortedLists[0], unsortedLists[1]];
};

export function run(input: string): number {
  const unsortedLists = parselists(input);

  const list1 = unsortedLists[0].toSorted();
  const list2 = unsortedLists[1].toSorted();

  let total = 0;

  list1.forEach((item, index) => {
    total += Math.abs(item - list2[index]);
  });

  return total;
}

export function runAgain(input: string): number {
  const [list1, list2] = parselists(input);

  const list2Lookup = list2.reduce(
    (lookup, item) => {
      lookup[item] ||= 0;
      lookup[item] += 1;
      return lookup;
    },
    {} as Record<number, number>
  );

  let score = 0;

  for (const item of list1) {
    const itemScore = item * (list2Lookup[item] ?? 0);
    score += itemScore;
  }

  return score;
}
