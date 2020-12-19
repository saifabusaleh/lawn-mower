
const Lawn = require( "../src/models/lawn" )

describe("Lawn", () => {
    describe("IsInLawn", () => {
        const lawn = new Lawn(2,2)

        it('should return true if cordinate is in lawn boundaries',() => {
            const cord = {x: 1, y: 2}
            expect(lawn.isInLawn(cord)).toEqual(true)
        }),
        it('should return false if cordinate is negative',() => {
            const cord = {x: -1, y: 2}
            expect(lawn.isInLawn(cord)).toEqual(false)
        }),
        it('should return false if cordinate is outside of lawn',() => {
            const cord = {x: 3, y: 2}
            expect(lawn.isInLawn(cord)).toEqual(false)
        })
    });
});
