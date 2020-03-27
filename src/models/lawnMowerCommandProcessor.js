const COMMANDS = require('../enums/commands')

class LawnMowerCommandProcessor {

  processCommands(commands, mower) {


    [...commands].forEach((c) => {
      switch (c) {
        case COMMANDS.LEFT:
          mower.rotateLeft()
          break
        case COMMANDS.RIGHT:
          mower.rotateRight()
          break
        case COMMANDS.ADVANCE:
          mower.move()
          break
        default:
          throw new Error(`wrong command: ${c}`)
      }
    })
  }
}

module.exports = LawnMowerCommandProcessor