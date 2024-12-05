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

const calculateScore = (updates: Updates): number => {
  return updates.reduce((total, update) => {
    const middleIndex = Math.floor(update.length / 2);
    return total + Number.parseInt(update[middleIndex]);
  }, 0);
};

export function run(input: string): number {
  const [rules, updates] = parseInput(input);
  const validUpdates = findValidUpdates(rules, updates);

  return calculateScore(validUpdates);
}

const findInvalidUpdates = (rules: Rules, updates: Updates): Updates => {
  const invalid: Updates = [];

  for (const update of updates) {
    const indices = update.reduce(
      (lookup, page, index) => Object.assign(lookup, { [page]: index }),
      {} as Record<string, number>
    );

    const isValid = update.every((page) => {
      if (!rules[page]) return true;

      return [...rules[page]].every((otherPage) => {
        if (indices[otherPage] === undefined) return true;
        return indices[page] < indices[otherPage];
      });
    });

    if (!isValid) invalid.push(update);
  }

  return invalid;
};

const createUpdateSorter =
  (rules: Rules) =>
  (update: Array<string>): Array<string> => {
    return update.toSorted((a, b) => {
      if (rules[a]?.has(b)) return -1;
      if (rules[b]?.has(a)) return 1;
      return 0;
    });
  };

export function runAgain(input: string): number {
  const [rules, updates] = parseInput(input);
  const invalidUpdates = findInvalidUpdates(rules, updates);
  const sortByRules = createUpdateSorter(rules);
  const validUpdates = invalidUpdates.map(sortByRules);

  return calculateScore(validUpdates);
}
