
const Lawn = require( "../src/models/lawn" )
const Coordinate = require('../src/models/coordinate')

describe("Lawn", () => {
    describe("IsInLawn", () => {
        const lawn = new Lawn(2,2)

        it('should return true if cordinate is in lawn boundaries',() => {
            const cord = new Coordinate(1,2)
            expect(lawn.isInLawn(cord)).toEqual(true)
        }),
        it('should return false if cordinate is negative',() => {
            const cord = new Coordinate(-1,2)
            expect(lawn.isInLawn(cord)).toEqual(false)
        }),
        it('should return false if cordinate is outside of lawn',() => {
            const cord = new Coordinate(3,2)
            expect(lawn.isInLawn(cord)).toEqual(false)
        })
    });
});
