import RotationalDirection from "../../../main/tetris/direction/rotationalDirection";
import MockBlockContent from "./mockBlockContent";
import MockTetromino from "./mockTetromino";
import Tetromino from "../../../main/tetris/tetromino/tetromino";
import Block from "../../../main/tetris/tetromino/block";
import Orientation from "./orientation";

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
    return new MockTetromino({
        tetromino: new Tetromino({blocks: blocks}),
        clockwise: new Tetromino({blocks: clockwiseBlocks}),
        counterclockwise: new Tetromino({blocks: counterclockwiseBlocks})
    });
};

let getMockJ = function() {
    let blocks = [[
        new Block({content: {}}), 
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NOON})})
    ], [
        new Block({content: {}}), 
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NOON})})
    ], [
        new Block({content: new MockBlockContent({content: "[2,0]", orientation: Orientation.NOON})}),
        new Block({content: new MockBlockContent({content: "[2,1]", orientation: Orientation.NOON})})
    ]];

    let clockwiseBlocks = [[
        new Block({content: new MockBlockContent({content: "[2,0]", orientation: Orientation.THREE})}), 
        new Block({content: {}}), new Block({content: {}})
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
        new Block({content: {}}), new Block({content: {}}), 
        new Block({content: new MockBlockContent({content: "[2,0]", orientation: Orientation.NINE})})
    ]];

    return new MockTetromino({
        tetromino: new Tetromino({blocks: blocks}),
        clockwise: new Tetromino({blocks: clockwiseBlocks}),
        counterclockwise: new Tetromino({blocks: counterclockwiseBlocks})
    });
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

    return new MockTetromino({
        tetromino: new Tetromino({blocks: blocks}),
        clockwise: new Tetromino({blocks: clockwiseBlocks}),
        counterclockwise: new Tetromino({blocks: counterclockwiseBlocks})
    });
};

let getMockS = function() {
    let blocks = [[
        new Block({content: {}}),
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NOON})}),
        new Block({content: new MockBlockContent({content: "[0,2]", orientation: Orientation.NOON})})
    ], [
        new Block({content: new MockBlockContent({content: "[1,0]", orientation: Orientation.NOON})}),
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NOON})}),
        new Block({content: {}})
    ]];

    let clockwiseBlocks = [[
        new Block({content: new MockBlockContent({content: "[1,0]", orientation: Orientation.THREE})}),
        new Block({content: {}})
    ], [
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.THREE})}),
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.THREE})}),
    ], [
        new Block({content: {}}),
        new Block({content: new MockBlockContent({content: "[0,2]", orientation: Orientation.THREE})})
    ]];

    let counterclockwiseBlocks = [[
        new Block({content: new MockBlockContent({content: "[0,2]", orientation: Orientation.NINE})}),
        new Block({content: {}})
    ], [
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NINE})}),
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NINE})}),
    ],[
        new Block({content: {}}),
        new Block({content: new MockBlockContent({content: "[1,0]", orientation: Orientation.NINE})}),
    ]];

    return new MockTetromino({
        tetromino: new Tetromino({blocks: blocks}),
        clockwise: new Tetromino({blocks: clockwiseBlocks}),
        counterclockwise: new Tetromino({blocks: counterclockwiseBlocks})
    });
};

let getMockT = function() {
    let blocks = [[
        new Block({content: new MockBlockContent({content: "[0,0]", orientation: Orientation.NOON})}),
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NOON})}),
        new Block({content: new MockBlockContent({content: "[0,2]", orientation: Orientation.NOON})})
    ], [
        new Block({content: {}}),
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NOON})}),
        new Block({content: {}})
    ]];

    let clockwiseBlocks = [[
        new Block({content: {}}),
        new Block({content: new MockBlockContent({content: "[0,0]", orientation: Orientation.THREE})})
    ], [
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.THREE})}),
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.THREE})})
    ], [
        new Block({content: {}}),
        new Block({content: new MockBlockContent({content: "[0,2]", orientation: Orientation.THREE})})
    ]];

    let counterclockwiseBlocks =[[
        new Block({content: new MockBlockContent({content: "[0,0]", orientation: Orientation.NINE})}),
        new Block({content: {}})
    ], [
        new Block({content: new MockBlockContent({content: "[0,1]", orientation: Orientation.NINE})}),
        new Block({content: new MockBlockContent({content: "[1,1]", orientation: Orientation.NINE})})
    ], [
        new Block({content: new MockBlockContent({content: "[0,2]", orientation: Orientation.NINE})}),
        new Block({content: {}})
    ]];

    return new MockTetromino({
        tetromino: new Tetromino({blocks: blocks}),
        clockwise: new Tetromino({blocks: clockwiseBlocks}),
        counterclockwise: new Tetromino({blocks: counterclockwiseBlocks})
    });
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