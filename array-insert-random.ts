import arrify = require('arrify')
import randomInt = require('random-int')

export = function arrayInsertRandom<T>(array: T[], items: T[] | T): void {
  for (let element of arrify(items)) {
    const index: number = randomInt(0, array.length)
    array.splice(index, 0, element)
  }
}
