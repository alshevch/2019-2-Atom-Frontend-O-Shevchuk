/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */

import convertBytesToHuman from './convertBytesToHuman';


test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman([1])).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(Symbol("id"))).toBe(false)
  });
  
  test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0.00 B')
  expect(convertBytesToHuman(1)).toBe('1.00 B')
  expect(convertBytesToHuman(5)).toBe('5.00 B')
  expect(convertBytesToHuman(1024)).toBe('1.00 KB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  //expect(convertBytesToHuman(1024 ** 9)).toBe('1024.00 YB')
  });