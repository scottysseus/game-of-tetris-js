import {RotationalDirection} from "../../../main/tetris/direction/rotationalDirection";
import MockBlockContent from "./mockBlockContent";
import MockTetromino from "./mockTetromino";
import Tetromino from "../../../main/tetris/tetromino/tetromino";
import Block from "../../../main/tetris/tetromino/block";

let getMockI = function() {
    let blocks = [[
        new Block({content: [0,0]})   
    ], [
        new Block({content: [1,0]})   
    ], [
        new Block({content: [2,0]})
    ], [
        new Block({content: [3,0]})
    ]];

    let clockwiseBlocks = [[
        new Block({content: [3,0]}),
        new Block({content: [2,0]}),
        new Block({content: [1,0]}),
        new Block({content: [0,0]})
    ]];

    let counterclockwiseBlocks = [[
        new Block({content: [0,0]}),
        new Block({content: [1,0]}),
        new Block({content: [2,0]}),
        new Block({content: [3,0]})
    ]];
    return new MockTetromino({
        tetromino: new Tetromino({blocks: blocks}),
        clockwise: new Tetromino({blocks: clockwiseBlocks}),
        counterclockwise: new Tetromino({blocks: counterclockwiseBlocks})
    });
};

let getMockJ = function() {

};

let getMockL = function() {

};

let getMockO = function() {

};

let getMockS = function() {

};

let getMockT = function() {

};

let getMockZ = function() {
    
};

let getAllMocks = function() {

};

export default Object.freeze({
    getMockI,
    getMockJ,
    getMockL,
    getMockO,
    getMockS,
    getMockT,
    getMockZ,
    getAllMocks
});