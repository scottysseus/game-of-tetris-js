import RotationalDirection from "../../../src/tetris/direction/rotationalDirection";
import MockBlockContent from "./mockBlockContent";
import MockTetromino from "./mockTetromino";
import Tetromino from "../../../src/tetris/tetromino/tetromino";
import Block from "../../../src/tetris/tetromino/block";
import Orientation from "./orientation";
import BlockCollection from "../../../src/tetris/blockCollection";

let getNewMockTetromino = function(blocks, clockwiseBlocks, counterclockwiseBlocks) {

    return MockTetromino({
        tetromino: Tetromino({blocks: blocks}),
        clockwise: Tetromino({blocks: clockwiseBlocks}),
        counterclockwise: Tetromino({blocks: counterclockwiseBlocks})
    });
};

let getEmptyBlock = function() {
    return null;
}

let getMockI = function() {
    let blocks = [[
        Block({content: MockBlockContent({content: "[0,0]", orientation: Orientation.NOON})})
    ], [
        Block({content: MockBlockContent({content: "[1,0]", orientation: Orientation.NOON})})
    ], [
        Block({content: MockBlockContent({content: "[2,0]", orientation: Orientation.NOON})})
    ], [
        Block({content: MockBlockContent({content: "[3,0]", orientation: Orientation.NOON})})
    ]];

    let clockwiseBlocks = [[
        Block({content: MockBlockContent({content: "[3,0]", orientation: Orientation.THREE})}),
        Block({content: MockBlockContent({content: "[2,0]", orientation: Orientation.THREE})}),
        Block({content: MockBlockContent({content: "[1,0]", orientation: Orientation.THREE})}),
        Block({content: MockBlockContent({content: "[0,0]", orientation: Orientation.THREE})})
    ]];

    let counterclockwiseBlocks = [[
        Block({content: MockBlockContent({content: "[0,0]", orientation: Orientation.NINE})}),
        Block({content: MockBlockContent({content: "[1,0]", orientation: Orientation.NINE})}),
        Block({content: MockBlockContent({content: "[2,0]", orientation: Orientation.NINE})}),
        Block({content: MockBlockContent({content: "[3,0]", orientation: Orientation.NINE})})
    ]];

    return getNewMockTetromino(blocks, clockwiseBlocks, counterclockwiseBlocks);
};

let getMockJ = function() {
    let blocks = [[
        getEmptyBlock(), 
        Block({content: MockBlockContent({content: "[0,1]", orientation: Orientation.NOON})})
    ], [
        getEmptyBlock(), 
        Block({content: MockBlockContent({content: "[1,1]", orientation: Orientation.NOON})})
    ], [
        Block({content: MockBlockContent({content: "[2,0]", orientation: Orientation.NOON})}),
        Block({content: MockBlockContent({content: "[2,1]", orientation: Orientation.NOON})})
    ]];

    let clockwiseBlocks = [[
        Block({content: MockBlockContent({content: "[2,0]", orientation: Orientation.THREE})}), 
        getEmptyBlock(), getEmptyBlock()
    ], [
        Block({content: MockBlockContent({content: "[2,1]", orientation: Orientation.THREE})}),
        Block({content: MockBlockContent({content: "[1,1]", orientation: Orientation.THREE})}),
        Block({content: MockBlockContent({content: "[0,1]", orientation: Orientation.THREE})})
    ]];

    let counterclockwiseBlocks = [[
        Block({content: MockBlockContent({content: "[0,1]", orientation: Orientation.NINE})}),
        Block({content: MockBlockContent({content: "[1,1]", orientation: Orientation.NINE})}),
        Block({content: MockBlockContent({content: "[2,1]", orientation: Orientation.NINE})}),
    ], [
        getEmptyBlock(), getEmptyBlock(), 
        Block({content: MockBlockContent({content: "[2,0]", orientation: Orientation.NINE})})
    ]];

    return getNewMockTetromino(blocks, clockwiseBlocks, counterclockwiseBlocks);
};

let getMockO = function() {
    let blocks = [[
        Block({content: MockBlockContent({content: "[0,0]", orientation: Orientation.NOON})}),
        Block({content: MockBlockContent({content: "[0,1]", orientation: Orientation.NOON})})
    ], [
        Block({content: MockBlockContent({content: "[1,0]", orientation: Orientation.NOON})}),
        Block({content: MockBlockContent({content: "[1,1]", orientation: Orientation.NOON})})
    ]];

    let clockwiseBlocks = [[
        Block({content: MockBlockContent({content: "[1,0]", orientation: Orientation.THREE})}),
        Block({content: MockBlockContent({content: "[0,0]", orientation: Orientation.THREE})})
    ], [
        Block({content: MockBlockContent({content: "[1,1]", orientation: Orientation.THREE})}),
        Block({content: MockBlockContent({content: "[0,1]", orientation: Orientation.THREE})})
    ]];

    let counterclockwiseBlocks = [[
        Block({content: MockBlockContent({content: "[0,1]", orientation: Orientation.NINE})}),
        Block({content: MockBlockContent({content: "[1,1]", orientation: Orientation.NINE})})
    ], [
        Block({content: MockBlockContent({content: "[0,0]", orientation: Orientation.NINE})}),
        Block({content: MockBlockContent({content: "[1,0]", orientation: Orientation.NINE})})
    ]];

    return getNewMockTetromino(blocks, clockwiseBlocks, counterclockwiseBlocks);
};

let getMockS = function() {
    let blocks = [[
        getEmptyBlock(),
        Block({content: MockBlockContent({content: "[0,1]", orientation: Orientation.NOON})}),
        Block({content: MockBlockContent({content: "[0,2]", orientation: Orientation.NOON})})
    ], [
        Block({content: MockBlockContent({content: "[1,0]", orientation: Orientation.NOON})}),
        Block({content: MockBlockContent({content: "[1,1]", orientation: Orientation.NOON})}),
        getEmptyBlock()
    ]];

    let clockwiseBlocks = [[
        Block({content: MockBlockContent({content: "[1,0]", orientation: Orientation.THREE})}),
        getEmptyBlock()
    ], [
        Block({content: MockBlockContent({content: "[1,1]", orientation: Orientation.THREE})}),
        Block({content: MockBlockContent({content: "[0,1]", orientation: Orientation.THREE})}),
    ], [
        getEmptyBlock(),
        Block({content: MockBlockContent({content: "[0,2]", orientation: Orientation.THREE})})
    ]];

    let counterclockwiseBlocks = [[
        Block({content: MockBlockContent({content: "[0,2]", orientation: Orientation.NINE})}),
        getEmptyBlock()
    ], [
        Block({content: MockBlockContent({content: "[0,1]", orientation: Orientation.NINE})}),
        Block({content: MockBlockContent({content: "[1,1]", orientation: Orientation.NINE})}),
    ],[
        getEmptyBlock(),
        Block({content: MockBlockContent({content: "[1,0]", orientation: Orientation.NINE})}),
    ]];

    return getNewMockTetromino(blocks, clockwiseBlocks, counterclockwiseBlocks);
};

let getMockT = function() {
    let blocks = [[
        Block({content: MockBlockContent({content: "[0,0]", orientation: Orientation.NOON})}),
        Block({content: MockBlockContent({content: "[0,1]", orientation: Orientation.NOON})}),
        Block({content: MockBlockContent({content: "[0,2]", orientation: Orientation.NOON})})
    ], [
        getEmptyBlock(),
        Block({content: MockBlockContent({content: "[1,1]", orientation: Orientation.NOON})}),
        getEmptyBlock()
    ]];

    let clockwiseBlocks = [[
        getEmptyBlock(),
        Block({content: MockBlockContent({content: "[0,0]", orientation: Orientation.THREE})})
    ], [
        Block({content: MockBlockContent({content: "[1,1]", orientation: Orientation.THREE})}),
        Block({content: MockBlockContent({content: "[0,1]", orientation: Orientation.THREE})})
    ], [
        getEmptyBlock(),
        Block({content: MockBlockContent({content: "[0,2]", orientation: Orientation.THREE})})
    ]];

    let counterclockwiseBlocks =[[
        Block({content: MockBlockContent({content: "[0,2]", orientation: Orientation.NINE})}),
        getEmptyBlock()
    ], [
        Block({content: MockBlockContent({content: "[0,1]", orientation: Orientation.NINE})}),
        Block({content: MockBlockContent({content: "[1,1]", orientation: Orientation.NINE})})
    ], [
        Block({content: MockBlockContent({content: "[0,0]", orientation: Orientation.NINE})}),
        getEmptyBlock()
    ]];

    return getNewMockTetromino(blocks, clockwiseBlocks, counterclockwiseBlocks);
};

let getAllMocks = function() {
    return [
        getMockI(),
        getMockJ(),
        getMockO(),
        getMockS(),
        getMockT()
    ];
};

export default Object.freeze({
    getMockI,
    getMockJ,
    getMockO,
    getMockS,
    getMockT,
    getAllMocks
});