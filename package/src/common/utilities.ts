export async function to<T, E = Error>(promise: Promise<T>) {
  return await promise
    .then<[null, T]>(value => [null, value])
    .catch<[E, null]>((reason: E) => [reason, null]);
}
