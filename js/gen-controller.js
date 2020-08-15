'use strict';

var gDrag = false;
var gId;
var gCurrLine;

function onWriteOnImg(elem) {
    setMemeText(elem.value);
    drawMeme();
}



function drawMeme() {
    var meme = getMeme();
    var img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        drawText();
    }
    var currImg = getImgById(meme.selectedImgId)
    img.src = `images/${currImg + 1}.jpg`;
}

function drawText() {
    var meme = getMeme();
    var fontName = getFontFamily();
    var fontColor = getFontColor()

    meme.lines.forEach(line => {
        line.txt;
        gCtx.lineWidth = '2';
        gCtx.strokeStyle = 'black';
        gCtx.font = `${line.size}px  ${fontName}`;
        gCtx.fillStyle = `${fontColor}`;
        gCtx.textAlign = line.align;
        gCtx.strokeText(line.txt, line.x, line.y);
        gCtx.fillText(line.txt, line.x, line.y);
    });
}



function drawImgFromlocal(id) {
    gId=id;
    var images = getImges();
    var imgIdx = getImgById(id);
    var img = new Image();
    img.src = images[imgIdx].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}




function getImgById(id) {
    var images = getImges();
    var img = images.findIndex(img => {
        return id === img.id
    });
    return img;
}

function onWriteTextDown() {
   var elTxtInput = document.querySelector('.text-input');
    if (!elTxtInput.value) return;
    elTxtInput.value = '';
    writeTextDown()
}


function onIncreaseFontSize() {
    setTxtSize(1);
    drawMeme();
}


function onDecreaseFontSize() {
    setTxtSize(-1);
    drawMeme();
}

function onSetAlignTxt(position) {
    setTxtAlign(position);
    drawMeme();
}

function onSetFontFamily(val) {
    setFontFamily(val);
    drawMeme();
}

function onSetFontColor(val) {
    setFontColor(val);
    drawMeme();
}

function onClearCanvas() {
    document.querySelector('.text-input').value = '';
    drawImgFromlocal(gId);
}

function onDownloadMeme(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'meme-img.jpg';
}



function onShare() {
    var url = "http://google.com";
    window.open('http://facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
}


function onSave() {
    saveMeme();
}

function onMoveLine(val) {
    setMoveLine(val);
    drawMeme();
}



function uploadImg(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
        <div class="social-icons facebook-icon"><i class="fab fa-facebook-f"></i></div>
        </a>`
    }
    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('http://ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
    .then(function (res) {
        return res.text()
    })
    .then(onSuccess)
    .catch(function (err) {
        console.error(err)
    })
}



