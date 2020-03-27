const DIRECTIONS = require('../enums/directions')


class Mower {

    constructor(coordinates, currentDirection, lawn) {

        this.cardinality = ['N', 'E', 'S', 'W']
        this.coordinates = coordinates
        this.currentDirection = currentDirection
        this.lawn = lawn
    }

    rotateLeft() {
        if (this.lawn.isInLawn(this.coordinates)) {
            const directionIndex = this._getDirectionIndexFromCardinality()
            this._throwErrorIfDirectionDoesntExist(directionIndex)
            this.currentDirection = directionIndex > 0 ? this.cardinality[directionIndex - 1] : this.cardinality[this.cardinality.length - 1]
        }
    }

    rotateRight() {
        if (this.lawn.isInLawn(this.coordinates)) {
            const directionIndex = this._getDirectionIndexFromCardinality()
            this._throwErrorIfDirectionDoesntExist(directionIndex)
            this.currentDirection = directionIndex < this.cardinality.length - 1 ? this.cardinality[directionIndex + 1] : this.cardinality[0]
        }

    }

    move() {
        switch (this.currentDirection) {
            case DIRECTIONS.N:
                if (this.lawn.isInLawn({x: this.coordinates.x, y: this.coordinates.y + 1})) { this.coordinates.y += 1 }
                break
            case DIRECTIONS.E:
                if (this.lawn.isInLawn({x: this.coordinates.x+1, y: this.coordinates.y })) { this.coordinates.x += 1 }
                break
            case DIRECTIONS.S:
                if (this.lawn.isInLawn({x: this.coordinates.x, y: this.coordinates.y - 1})) { this.coordinates.y -= 1 }
                break
            case DIRECTIONS.W:
                if (this.lawn.isInLawn({x: this.coordinates.x -1, y: this.coordinates.y})) { this.coordinates.x -= 1 }
                break

            default:
                throw new Error(`unknown Direction: ${this.currentDirection}`)
        }
    }

    getLocation() {
        return `${this.coordinates.x} ${this.coordinates.y} ${this.currentDirection}`
    }

    _getDirectionIndexFromCardinality() {
        return this.cardinality.indexOf(this.currentDirection)
    }

    _throwErrorIfDirectionDoesntExist(index) {
        if (index < 0) throw new Error(`wrong direction: ${this.currentDirection}`)
    }
}

module.exports = Mower