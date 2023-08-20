export const demoObject = [
  {},
  {
    a: undefined,
    b: null
  },
  {
    a: undefined,
    b: 1
  },
  {
    a: null,
    b: 1
  },
  {
    a: 1,
    b: 2
  }
]

export const demoObjectBig = [
  ...demoObject,
  {
    a: 1,
    b: 2,
    c: null
  },
  {
    a: 1,
    b: [2, 3],
    c: 4
  },
  {
    a: 1,
    b: [2, {
      c: 3,
      d: 4
    }],
    e: 5
  },
  {
    a: 1,
    b: {
      c: 2,
      d: 3
    },
    e: 4
  },
  {
    a: 1,
    b: {
      c: 2,
      d: [3, 4]
    },
    e: 5
  }
]

export const demoObjectString = [
  '{}',
  '{a: undefined, b: null}',
  '{a: undefined, b: 1}',
  '{a: null, b: 1}',
  '{a: 1, b: 2}'
]
