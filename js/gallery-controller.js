'use strict';


var gCanvas;
var gCtx;



function onInit() {
    renderImges();
    var elMemGen = document.querySelector('.memGen');
    elMemGen.classList.add('hide');

    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}



function renderImges() {
    let images = getImges();
    var strHTML = images.map(img => {
        return `<img onclick="editPic(${img.id})" src="${img.url}" alt=""></img>`
    });
    document.querySelector('.img-gallery').innerHTML = strHTML.join('');
    renderKeyWords();
}


function editPic(id) {
    setMemeId(id)
    var elMemGen = document.querySelector('.memGen');
    elMemGen.classList.remove('hide');

    var elGallery = document.querySelector('.gallery-container');
    elGallery.classList.add('hide');
    drawImgFromlocal(id);
}

function searchImg(ev) {
    if (ev.key === 'Enter') {
        var elSearchBar = document.querySelector('.search-bar');
        var searchWord = elSearchBar.value.toLowerCase();
        let images = getImges();
        var imgSearch = images.filter(image => {
            return image.keywords === searchWord;
        });
        renderSearchImg(imgSearch);
    }
    if (ev.key === 'Escape') renderImges();
}

function renderSearchImg(imgList) {
    var strHTML = imgList.map(img => {
        return `<img onclick="editPic(${img.id})" src="${img.url}" alt=""></img>`
    });
    document.querySelector('.img-gallery').innerHTML = strHTML.join('');
}


function renderKeyWords() {
    var words = loadFromStorage(KEY_2);
    if (!words) words = getKeyWords();
    var strHTML = '';
    var x;
    for (x in words) {
        strHTML += `<span style="font-size:${words[x]}px" onclick="filterImages('${x}')">${x}</span> `;
    }
    saveToStorage(KEY_2, words);
    document.querySelector('.search-words').innerHTML = strHTML;
}

function increaseFontSize(word) {
    var words = loadFromStorage(KEY_2);
    if (!words) words = getKeyWords();
    var x;
    for (x in words) {
        if (x === word) {
            if (words[x] >= 42) return
            else words[x] += 3;
        }
    }
    saveToStorage(KEY_2, words);
    renderKeyWords();
}

function filterImages(word) {
    increaseFontSize(word);
    var words = loadFromStorage(KEY_2);
    if (!words) words = getKeyWords();
    let images = getImges();
    var imgSearch = images.filter(image => {
        return image.keywords === word
    });

    saveToStorage(KEY_2, words);
    renderSearchImg(imgSearch);
}


