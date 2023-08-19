export const demoElement = [
  document.body,
  document.querySelector('#storybook-root'),
  document.createElement('div')
]

export const demoElementWindow = [
  ...demoElement,
  window
]

export const demoElementString = [
  'body',
  '#storybook-root',
  '.test'
]

export const demoElementItem = [
  'className',
  'id',
  'dataset'
]
