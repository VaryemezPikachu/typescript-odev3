function mergeArrays<T, U>(dizi1: T[], dizi2: U[]): (T | U)[] {
  return [...dizi1, ...dizi2];
}

const merged = mergeArrays([1, 2, 3], ['a', 'b', 'c']);
console.log(merged);