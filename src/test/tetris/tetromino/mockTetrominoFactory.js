import RotationalDirection from "../../../main/tetris/direction/rotationalDirection";
import MockBlockContent from "./mockBlockContent";
import MockTetromino from "./mockTetromino";
import Tetromino from "../../../main/tetris/tetromino/tetromino";
import Block from "../../../main/tetris/tetromino/block";
import Orientation from "./orientation";
import BlockCollection from "../../../main/tetris/blockCollection";

let getNewMockTetromino = function(blocks, clockwiseBlocks, counterclockwiseBlocks) {
    let blockCollection = new BlockCollection({blocks:blocks});
    let clockwiseBlockCollection = new BlockCollection({blocks: clockwiseBlocks});
    let counterclockwiseBlockCollection = new BlockCollection({blocks: counterclockwiseBlocks});

    return new MockTetromino({
        tetromino: new Tetromino({blockCollection: blockCollection}),
        clockwise: new Tetromino({blockCollection: clockwiseBlockCollection}),
        counterclockwise: new Tetromino({blockCollection: counterclockwiseBlockCollection})
    });
}

let getMockI = function() {
    let blocks = [[
        new Block({content: new MockBlockContent({content: "[0,0]", orientation: Orientation.NOON})})
    ], [
        new Block({content: new MockBlockContent({content: "[1,0]", orientation: Orientation.NOON})})
    ], [
        new Block({content: new MockBlockContent({content: "[2,0]", orientation: Orientation.NOON})})
    ], [
        new Block({content: new MockBlockContent({content: "[3,0]", orientation: Orientation.NOON})})
    ]];

    let clockwiseBlocks = [[
        new Block({content: new MockBlockContent({content: "[3,0]", orientation: Orientation.THREE})}),
        new Block({content: new MockBlockContent({content: "[2,0]", orientation: Orientation.THREE})}),
        new Block({content: new MockBlockContent({content: "[1,0]", orientation: Orientation.THREE})}),
        new Block({content: new MockBlockContent({content: "[0,0]", orientation: Orientation.THREE})})
    ]];

    let counterclockwiseBlocks = [[
        new Block({content: new MockBlockContent({content: "[0,0]", orientation: Orientation.NINE})}),
        new Block({content: new MockBlockContent({content: "[1,0]", orientation: Orientation.NINE})}),
        new Block({content: new MockBlockContent({content: "[2,0]", orientation: Orientation.NINE})}),
        new Block({content: new MockBlockContent({content: "[3,0]", orientation: Orientation.NINE})})
    ]];

    return getNewMockTetromino(blocks, clockwiseBlocks, counterclockwiseBlocks);
};

let getMockJ = function() {
    let blocks = [[
        new Block({content: null}), 
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NOON})})
    ], [
        new Block({content: null}), 
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NOON})})
    ], [
        new Block({content: new MockBlockContent({content: "[2,0]", orientation: Orientation.NOON})}),
        new Block({content: new MockBlockContent({content: "[2,1]", orientation: Orientation.NOON})})
    ]];

    let clockwiseBlocks = [[
        new Block({content: new MockBlockContent({content: "[2,0]", orientation: Orientation.THREE})}), 
        new Block({content: null}), new Block({content: null})
    ], [
        new Block({content: new MockBlockContent({content: "[2,1]", orientation: Orientation.THREE})}),
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.THREE})}),
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.THREE})})
    ]];

    let counterclockwiseBlocks = [[
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NINE})}),
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NINE})}),
        new Block({content: new MockBlockContent({content: "[2,1]", orientation: Orientation.NINE})}),
    ], [
        new Block({content: null}), new Block({content: null}), 
        new Block({content: new MockBlockContent({content: "[2,0]", orientation: Orientation.NINE})})
    ]];

    return getNewMockTetromino(blocks, clockwiseBlocks, counterclockwiseBlocks);
};

let getMockO = function() {
    let blocks = [[
        new Block({content: new MockBlockContent({content: "[0,0]", orientation: Orientation.NOON})}),
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NOON})})
    ], [
        new Block({content: new MockBlockContent({content: "[1,0]", orientation: Orientation.NOON})}),
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NOON})})
    ]];

    let clockwiseBlocks = [[
        new Block({content: new MockBlockContent({content: "[1,0]", orientation: Orientation.THREE})}),
        new Block({content: new MockBlockContent({content: "[0,0]", orientation: Orientation.THREE})})
    ], [
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.THREE})}),
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.THREE})})
    ]];

    let counterclockwiseBlocks = [[
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NINE})}),
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NINE})})
    ], [
        new Block({content: new MockBlockContent({content: "[0,0]", orientation: Orientation.NINE})}),
        new Block({content: new MockBlockContent({content: "[1,0]", orientation: Orientation.NINE})})
    ]];

    return getNewMockTetromino(blocks, clockwiseBlocks, counterclockwiseBlocks);
};

let getMockS = function() {
    let blocks = [[
        new Block({content: null}),
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NOON})}),
        new Block({content: new MockBlockContent({content: "[0,2]", orientation: Orientation.NOON})})
    ], [
        new Block({content: new MockBlockContent({content: "[1,0]", orientation: Orientation.NOON})}),
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NOON})}),
        new Block({content: null})
    ]];

    let clockwiseBlocks = [[
        new Block({content: new MockBlockContent({content: "[1,0]", orientation: Orientation.THREE})}),
        new Block({content: null})
    ], [
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.THREE})}),
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.THREE})}),
    ], [
        new Block({content: null}),
        new Block({content: new MockBlockContent({content: "[0,2]", orientation: Orientation.THREE})})
    ]];

    let counterclockwiseBlocks = [[
        new Block({content: new MockBlockContent({content: "[0,2]", orientation: Orientation.NINE})}),
        new Block({content: null})
    ], [
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NINE})}),
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NINE})}),
    ],[
        new Block({content: null}),
        new Block({content: new MockBlockContent({content: "[1,0]", orientation: Orientation.NINE})}),
    ]];

    return getNewMockTetromino(blocks, clockwiseBlocks, counterclockwiseBlocks);
};

let getMockT = function() {
    let blocks = [[
        new Block({content: new MockBlockContent({content: "[0,0]", orientation: Orientation.NOON})}),
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NOON})}),
        new Block({content: new MockBlockContent({content: "[0,2]", orientation: Orientation.NOON})})
    ], [
        new Block({content: null}),
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NOON})}),
        new Block({content: null})
    ]];

    let clockwiseBlocks = [[
        new Block({content: null}),
        new Block({content: new MockBlockContent({content: "[0,0]", orientation: Orientation.THREE})})
    ], [
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.THREE})}),
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.THREE})})
    ], [
        new Block({content: null}),
        new Block({content: new MockBlockContent({content: "[0,2]", orientation: Orientation.THREE})})
    ]];

    let counterclockwiseBlocks =[[
        new Block({content: new MockBlockContent({content: "[0,2]", orientation: Orientation.NINE})}),
        new Block({content: null})
    ], [
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NINE})}),
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NINE})})
    ], [
        new Block({content: new MockBlockContent({content: "[0,0]", orientation: Orientation.NINE})}),
        new Block({content: null})
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