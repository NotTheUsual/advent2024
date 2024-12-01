export function run(input: string) {
  const unsortedLists = input.split('\n')
    .map(line => {
      const numbers = line.match(/(\d+)\s+(\d+)/)
      if (!numbers) throw new Error();
      const [,first,second] = numbers;

      return [parseInt(first), parseInt(second)];
    })
    .reduce((lists, [first, second]) => {
      lists[0].push(first)
      lists[1].push(second);
      return lists;
    }, [[], []] as [Array<number>, Array<number>]);
  
  const list1 = unsortedLists[0].toSorted();
  const list2 = unsortedLists[1].toSorted();

  let total = 0;

  list1.forEach((item, index) => {
    total += Math.abs(item - list2[index])
  });

  return total;
}