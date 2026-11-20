export function chunk<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  const limit = Math.floor(array.length / size) * size;
  for (let i = 0; i < limit; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
