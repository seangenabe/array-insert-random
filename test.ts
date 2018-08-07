import test from 'ava'
import arrayInsertRandom = require('./')

test('single item', t => {
  const arr = ['a','b','c']
  const item = 'd'
  arrayInsertRandom(arr, item)
  arr.sort()
  t.deepEqual(arr, ['a', 'b', 'c' ,'d'])
})

test('multiple items', t => {
  const arr = ['a' , 'b']
  const items = ['c', 'd']
  arrayInsertRandom(arr, items)
  arr.sort()
  t.deepEqual(arr, ['a', 'b', 'c', 'd'])
})
