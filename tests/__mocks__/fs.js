const fs = jest.genMockFromModule("fs")

let mockFileData
function __setMockFileData(newMockFiles) {
    mockFileData = newMockFiles
}
function readFileSync(){
  return mockFileData
}

fs.__setMockFileData = __setMockFileData
fs.readFileSync = readFileSync


module.exports = fs