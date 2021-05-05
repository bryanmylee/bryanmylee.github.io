export const zip = <A, B>(a: A[], b: B[]): [A, B][] => {
  const minLength = Math.min(a.length, b.length);
  const result = [];
  for (let i = 0; i < minLength; i++) {
    result.push([a[i], b[i]]);
  }
  return result;
};
