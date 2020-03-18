const LawnMower = require( "../src/models/lawnMower" )
jest.mock('fs')

describe('LawnMower', () => {

    describe('run', () => {
        it('should parse and process commands correctly and return correct results', ()=> {
            MOCK_FILE_INFO = "5 5\n1 2 N\nLFLFLFLFF\n3 3 E\nFFRFFRFRRF"
            require('fs').__setMockFileData(MOCK_FILE_INFO)
            const lawnMower = new LawnMower()
            const resultArr = lawnMower.run('ss.txt')
            expect(resultArr.length).toEqual(2)
            expect(resultArr[0]).toEqual('1 3 N')
            expect(resultArr[1]).toEqual('5 1 E')
        }),
    
        it('should throw error if input length is incorrect', ()=> {
            MOCK_FILE_INFO = "5 5\n1 2 N"
            require('fs').__setMockFileData(MOCK_FILE_INFO)
            try {
                const lawnMower = new LawnMower()
                lawnMower.run('ss.txt')
                expect(true).toEqual(false)
            } catch(e) {
                expect(e.message).toContain('wrong file input')
            }
        }),
    
        it('should throw error if lawn input parameters is incorrect', ()=> {
            MOCK_FILE_INFO = "5 5 3\n1 2 N\nLFLFLFLFF"
            require('fs').__setMockFileData(MOCK_FILE_INFO)
            try {
                const lawnMower = new LawnMower()
                lawnMower.run('ss.txt')
                expect(true).toEqual(false)
            } catch(e) {
                expect(e.message).toContain('wrong lawn input')
            }
        }),

        it('should throw error if lawn input type is not number', ()=> {
            MOCK_FILE_INFO = "5 D\n1 2 N\nLFLFLFLFF"
            require('fs').__setMockFileData(MOCK_FILE_INFO)
            try {
                const lawnMower = new LawnMower()
                lawnMower.run('ss.txt')
                expect(true).toEqual(false)
            } catch(e) {
                expect(e.message).toContain('wrong lawn input')
            }
        }),

        it('should throw error if lawn input type is negative', ()=> {
            MOCK_FILE_INFO = "5 D\n1 2 N\nLFLFLFLFF"
            require('fs').__setMockFileData(MOCK_FILE_INFO)
            try {
                const lawnMower = new LawnMower()
                lawnMower.run('ss.txt')
                expect(true).toEqual(false)
            } catch(e) {
                expect(e.message).toContain('wrong lawn input')
            }
        }),
    
        it('should throw error if mower input parameters is incorrect', ()=> {
            MOCK_FILE_INFO = "5 5\n1 2 N 5\nLFLFLFLFF"
            require('fs').__setMockFileData(MOCK_FILE_INFO)
            try {
                const lawnMower = new LawnMower()
                lawnMower.run('ss.txt')
                expect(true).toEqual(false)
            } catch(e) {
                expect(e.message).toContain('wrong mower input')
            }
        }),

        it('should throw error if mower input type is not number', ()=> {
            MOCK_FILE_INFO = "5 5\n1 D N\nLFLFLFLFF"
            require('fs').__setMockFileData(MOCK_FILE_INFO)
            try {
                const lawnMower = new LawnMower()
                lawnMower.run('ss.txt')
                expect(true).toEqual(false)
            } catch(e) {
                expect(e.message).toContain('wrong mower input')
            }
        }),

        it('should throw error if mower input type is negative', ()=> {
            MOCK_FILE_INFO = "5 5\n1 -2 N\nLFLFLFLFF"
            require('fs').__setMockFileData(MOCK_FILE_INFO)
            try {
                const lawnMower = new LawnMower()
                lawnMower.run('ss.txt')
                expect(true).toEqual(false)
            } catch(e) {
                expect(e.message).toContain('wrong mower input')
            }
        }),

        it('should throw error if argument is wrong', ()=> {
            MOCK_FILE_INFO = "5 5\n1 1 N\nLFLDLFLFF"
            require('fs').__setMockFileData(MOCK_FILE_INFO)
            try {
                const lawnMower = new LawnMower()
                lawnMower.run('ss.txt')
                expect(true).toEqual(false)
            } catch(e) {
                expect(e.message).toContain('wrong command')
            }
        })
    })
})