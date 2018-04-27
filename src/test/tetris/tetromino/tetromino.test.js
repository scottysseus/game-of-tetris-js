import Tetromino from "../../../main/tetris/tetromino/tetromino";
import {RotationalDirection} from "../../../main/tetris/direction/rotationalDirection";
import MockBlockContent from "./mockBlockContent";
import Block from "../../../main/tetris/tetromino/block";

test('can rotate block counterclockwise', () => {
    let blocks = [[
        new Block({content: new MockBlockContent()})   
    ], [
        new Block({content: new MockBlockContent()})   
    ], [
        new Block({content: new MockBlockContent()})
    ]];
});