const Mower = require("../src/models/mower")
const Coordinate = require('../src/models/coordinate')
const DIRECTIONS = require('../src/enums/directions')
const Lawn = require("../src/models/lawn")


describe("Mower", () => {

    describe('rotateLeft', () => {
        const coordinate = new Coordinate(1, 1)
        const currentDirection = DIRECTIONS.N
        const lawn = new Lawn(3, 3)
        const mower = new Mower(coordinate, currentDirection, lawn)

        it('should rotate to west from north', () => {
            mower.rotateLeft()
            expect(mower.currentDirection).toEqual(DIRECTIONS.W)
            expect(mower.coordinates).toEqual(coordinate)
        }),

            it('should rotate to south from west', () => {
                mower.rotateLeft()
                expect(mower.currentDirection).toEqual(DIRECTIONS.S)
                expect(mower.coordinates).toEqual(coordinate)
            }),


            it('should not rotate left if outside of the lawn', () => {
                const outsideCoordinate = new Coordinate(3, 3)
                const outsideMower = new Mower(outsideCoordinate, DIRECTIONS.N, new Lawn(1, 1))
                outsideMower.rotateLeft()
                expect(outsideMower.currentDirection).toEqual(DIRECTIONS.N)
                expect(outsideMower.coordinates).toEqual(outsideCoordinate)
            })
    }),
        describe('rotateRight', () => {
            const coordinate = new Coordinate(1, 1)
            const currentDirection = DIRECTIONS.W
            const lawn = new Lawn(3, 3)
            const mower = new Mower(coordinate, currentDirection, lawn)

            it('should rotate to north from west', () => {
                mower.rotateRight()
                expect(mower.currentDirection).toEqual(DIRECTIONS.N)
                expect(mower.coordinates).toEqual(coordinate)
            }),

                it('should rotate to east from north', () => {
                    mower.rotateRight()
                    expect(mower.currentDirection).toEqual(DIRECTIONS.E)
                    expect(mower.coordinates).toEqual(coordinate)
                }),

                it('should throw error on wrong direction', () => {
                    try {
                        mower.currentDirection = 'Z'
                        mower.rotateRight()
                        expect(true).toEqual(false)
                    } catch (e) {
                        expect(e.message).toContain('wrong direction')
                    }
                }),

                it('should not rotate right if outside of the lawn', () => {
                    const outsideCoordinate = new Coordinate(3, 3)
                    const outsideMower = new Mower(outsideCoordinate, DIRECTIONS.N, new Lawn(1, 1))
                    outsideMower.rotateRight()
                    expect(outsideMower.currentDirection).toEqual(DIRECTIONS.N)
                    expect(outsideMower.coordinates).toEqual(outsideCoordinate)
                })

        }),
        describe('move', () => {

            it('should move correctly to north inside the lawn', () => {
                const mower = new Mower(new Coordinate(1, 1), DIRECTIONS.N, new Lawn(3, 3))
                mower.move()
                expect(mower.currentDirection).toEqual(DIRECTIONS.N)
                expect(mower.coordinates.x).toEqual(1)
                expect(mower.coordinates.y).toEqual(2)
            }),

                it('should move correctly to east inside the lawn', () => {
                    const mower = new Mower(new Coordinate(1, 1), DIRECTIONS.E, new Lawn(3, 3))
                    mower.move()
                    expect(mower.currentDirection).toEqual(DIRECTIONS.E)
                    expect(mower.coordinates.x).toEqual(2)
                    expect(mower.coordinates.y).toEqual(1)
                }),

                it('should move correctly to west inside the lawn', () => {
                    const mower = new Mower(new Coordinate(1, 1), DIRECTIONS.W, new Lawn(3, 3))
                    mower.move()
                    expect(mower.currentDirection).toEqual(DIRECTIONS.W)
                    expect(mower.coordinates.x).toEqual(0)
                    expect(mower.coordinates.y).toEqual(1)
                }),

                it('should move correctly to south inside the lawn', () => {
                    const mower = new Mower(new Coordinate(1, 1), DIRECTIONS.S, new Lawn(3, 3))
                    mower.move()
                    expect(mower.currentDirection).toEqual(DIRECTIONS.S)
                    expect(mower.coordinates.x).toEqual(1)
                    expect(mower.coordinates.y).toEqual(0)
                }),

                it('should not move if trying to move to outside of the lawn', () => {
                    const mower = new Mower(new Coordinate(3, 3), DIRECTIONS.N, new Lawn(2, 2))
                    mower.move()
                    expect(mower.currentDirection).toEqual(DIRECTIONS.N)
                    expect(mower.coordinates.x).toEqual(3)
                    expect(mower.coordinates.y).toEqual(3)
                }),

                it('should not move if direction is unknown', () => {
                    try {
                        const mower = new Mower(new Coordinate(3, 3), 'D', new Lawn(3, 3))
                        mower.move()
                        expect(true).toEqual(false)
                    } catch (e) {
                        expect(e.message).toContain('unknown Direction')
                    }
                })
        })
});
