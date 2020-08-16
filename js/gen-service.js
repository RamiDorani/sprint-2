'use-strict';

const KEY = 'meme';
var CANVAS_POS = 50;
var gMeme = createMeme(1);
var gFont = 'impact';
var gColor = 'white';
var gReadyMemes = [];

function createMeme(id) {
    return {
        selectedImgId: id,
        selectedLineIdx: 0,
        lines: [
            {
                id: 0,
                txt: '',
                size: 40,
                align: 'center',
                x: 200,
                y: 50
            }
        ]
    };
}

function writeTextDown() {
    gMeme.selectedLineIdx = gMeme.lines.length;
    var lineIdx = gMeme.selectedLineIdx;
    var yPos;
    if (lineIdx === 1) yPos = 350;
    if (lineIdx > 1) yPos = 200;
    var line = {
        id: gMeme.lines.length,
        txt: '',
        size: 40,
        align: 'center',
        x: 200,
        y: yPos
    }

    if (gMeme.lines.length === 0) gMeme.lines[0] = line;
    else gMeme.lines.push(line);
}

function switchLines() {
    var meme = getMeme();
    meme.selectedLineIdx = meme.selectedLineIdx === 0 ? meme.lines.length - 1 : meme.selectedLineIdx - 1;
    document.querySelector('.text-input').value = meme.lines[meme.selectedLineIdx].txt;
    gCurrLine = meme.selectedLineIdx;
}


function getMeme() {
    return gMeme;
}

function setMemeId(id) {
    gMeme.selectedImgId = id;
}

function setMemeText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}


function setTxtSize(size) {
    gMeme.lines[gMeme.selectedLineIdx].size += size;
}

function setTxtAlign(alignPos) {
    if(alignPos==='left')gMeme.lines[gMeme.selectedLineIdx].x=250
    else if(alignPos==='center')gMeme.lines[gMeme.selectedLineIdx].x=200
    else if(alignPos==='right')gMeme.lines[gMeme.selectedLineIdx].x=150
    gMeme.lines[gMeme.selectedLineIdx].align = alignPos;
}

function setFontFamily(fontFamily) {
    gFont = fontFamily;
}

function getFontFamily() {
    return gFont;
}

function setFontColor(val) {
    gColor = val;
}

function getFontColor() {
    return gColor;
}

function saveMeme() {
    saveToStorage(KEY, gMeme);
    gCtx.save();
}



function setMoveLine(val) {
    gMeme.lines[gMeme.selectedLineIdx].y -= val;
}




