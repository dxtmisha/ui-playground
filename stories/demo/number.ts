import { random } from '../../functions/number.ts'

export const demoNumber = [
  0,
  1,
  123,
  1.2
]

export const demoNumberString = [
  '0',
  '1',
  '123',
  '1.2'
]

export const demoNumberStringBig = [
  ...demoNumberString,
  '1.234',
  '1.2345',
  '1.234.5',
  '1.234.566',
  '1.234,5',
  '1.234,567',
  '1,234',
  '1,234.5',
  '1,234.567',
  '1,234,567.890',
  '1 234',
  '1 234.5',
  '1 234.567',
  '1 234 567.890',
  '1 234',
  '1 234,5',
  '1 234,567',
  '1 234 567,890'
]

export const demoNumberRandom = [
  () => random(100, 999)
]
