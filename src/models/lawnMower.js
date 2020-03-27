const Mower = require('./mower')
const Lawn = require('./lawn')
const LawnMowerCommandProcessor = require('./lawnMowerCommandProcessor')
const fs = require('fs')
const path = require('path')

class LawnMower {
    run(filePath) {
        let data = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8').split("\n")
        const commandProcessor = new LawnMowerCommandProcessor()
        let results = []
        if (!data || data.length%2 == 0) throw new Error('wrong file input')
        const lawn = this._parseLawn(data[0])

        data.forEach((dataValue, index) => {
            if(index%2 ===0 || index === 0) return;
            const mower = this._parseMower(dataValue, lawn)
            commandProcessor.processCommands(data[index+1].trim(), mower)
            results.push(mower.getLocation())
        });

        return results
    }

    _parseLawn(lawnData) {
        const lawnDataArr = lawnData.trim().split(' ')
        if(lawnDataArr.length != 2 ) throw new Error('wrong lawn input')
        const horizontalSize = parseInt(lawnDataArr[0])
        const verticalSize = parseInt(lawnDataArr[1])
        if(!Number.isInteger(horizontalSize) || !Number.isInteger(verticalSize) || horizontalSize<0 || verticalSize<0)
          throw new Error('wrong lawn input')
        return new Lawn(horizontalSize,verticalSize)
    }

    _parseMower(mowerData, lawn) {
        const positions = mowerData.trim().split(' ')
        if(positions.length != 3) throw new Error('wrong mower input')
        const xCord = parseInt(positions[0])
        const yCord = parseInt(positions[1])
        if(!Number.isInteger(xCord) || !Number.isInteger(yCord) || xCord<0 || yCord<0) 
          throw new Error('wrong mower input')
          
        const direction = positions[2]
        const coordinate = { x: xCord, y: yCord}
        return new Mower(coordinate, direction, lawn)
    }
}

module.exports = LawnMower