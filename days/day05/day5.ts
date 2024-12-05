type Rules = Record<string, Set<string>>;
type Updates = Array<Array<string>>;

const parseInput = (input: string): [Rules, Updates] => {
  const [ruleInput, updateInput] = input.split('\n\n');

  const rules = ruleInput.split('\n').reduce((ruleLookup, line) => {
    const [before, after] = line.split('|');
    ruleLookup[before] ||= new Set<string>();
    ruleLookup[before].add(after);
    return ruleLookup;
  }, {} as Rules);

  const updates: Updates = updateInput.split('\n').map((line) => line.split(','));

  return [rules, updates];
};

const findValidUpdates = (rules: Rules, updates: Updates): Updates => {
  return updates.filter((update) => {
    const indices = update.reduce(
      (lookup, page, index) => Object.assign(lookup, { [page]: index }),
      {} as Record<string, number>
    );

    return update.every((page) => {
      if (!rules[page]) return true;

      return [...rules[page]].every((otherPage) => {
        if (indices[otherPage] === undefined) return true;
        return indices[page] < indices[otherPage];
      });
    });
  });
};

export function run(input: string): number {
  const [rules, updates] = parseInput(input);
  const validUpdates = findValidUpdates(rules, updates);

  return validUpdates.reduce((total, update) => {
    const middleIndex = Math.floor(update.length / 2);
    return total + Number.parseInt(update[middleIndex]);
  }, 0);
}
