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

