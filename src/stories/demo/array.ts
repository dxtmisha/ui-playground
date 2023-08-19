export const demoArray = [
  [],
  [1, 2]
]

export const demoArrayBig = [
  ...demoArray,
  [1, [2, 3], 4],
  [1, {
    a: 2,
    b: 3
  }, 4],
  [1, {
    a: [2, 3],
    b: 4
  }, 5],
  [1, {
    a: [2, 3],
    b: {
      c: 4,
      d: 5
    }
  }, 6]
]

export const demoArrayText = [
  ['hi'],
  ['hi', 'hello'],
  ['hi', 'hello', 'bye', 'hi']
]

export const demoArrayString = [
  '[]',
  '[1, 2]',
  '[1, [2, 3], 4]'
]
