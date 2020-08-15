'use strict';
const KEY_2 = 'keywords'
var gImages = [
    { id: 1, url: 'images/1.jpg', keywords: 'politician' },
    { id: 2, url: 'images/2.jpg', keywords: 'animals' },
    { id: 3, url: 'images/3.jpg', keywords: 'animals' },
    { id: 4, url: 'images/4.jpg', keywords: 'animals' },
    { id: 5, url: 'images/5.jpg', keywords: 'children' },
    { id: 6, url: 'images/6.jpg', keywords: 'funny' },
    { id: 7, url: 'images/7.jpg', keywords: 'children' },
    { id: 8, url: 'images/8.jpg', keywords: 'funny' },
    { id: 9, url: 'images/9.jpg', keywords: 'children' },
    { id: 10, url: 'images/10.jpg', keywords: 'politician' },
    { id: 11, url: 'images/11.jpg', keywords: 'sport' },
    { id: 12, url: 'images/12.jpg', keywords: 'celebrity' },
    { id: 13, url: 'images/13.jpg', keywords: 'celebrity' },
    { id: 14, url: 'images/14.jpg', keywords: 'celebrity' },
    { id: 15, url: 'images/15.jpg', keywords: 'celebrity' },
    { id: 16, url: 'images/16.jpg', keywords: 'celebrity' },
    { id: 17, url: 'images/17.jpg', keywords: 'politician' },
    { id: 18, url: 'images/18.jpg', keywords: 'children' },
];

var gKeyWords = { 'politician': 12, 'animals': 12, 'children': 12, 'funny': 12, 'sport': 12, 'celebrity': 12 };


function getKeyWords() {
    saveToStorage(KEY_2, gKeyWords);
    return gKeyWords;
}

function getImges() {
    return gImages;
}
