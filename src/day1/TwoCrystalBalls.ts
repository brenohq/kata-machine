export default function two_crystal_balls(breaks: boolean[]): number {
  // O(N) solution

  // for (let i = 0; i < breaks.length; i++) {
  //   const element = breaks[i];

  //   if (element) return i
  // }

  // return -1

  // O(sqrt(N)) solution
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) break;
  }

  i -= jumpAmount;
  for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) return i
  }

  return -1;
}
