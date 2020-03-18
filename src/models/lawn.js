class Lawn {


    constructor(horizontalSize, verticalSize) {
        this.horizontalSize = horizontalSize
        this.verticalSize = verticalSize
    }

    isInLawn(coordinate) {
        return coordinate.x >= 0 && coordinate.x <= this.horizontalSize && coordinate.y >= 0 && coordinate.y <= this.verticalSize
    }
}

module.exports = Lawn