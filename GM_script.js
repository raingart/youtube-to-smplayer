// ==UserScript==
// @name         YouTube: MPV button
// @namespace    yt-mpv
// @version      1.0
// @description  Hover over a thumbnail to see images from the video
// @author       raingart <test@test.com>
// @include      https://www.youtube.com/*
// @run-at       document-end
// @grant        GM_addStyle
// @noframes     
// ==/UserScript==
/*jshint esversion: 6 */

const ATTR_MARK = 'mpv';

GM_addStyle(`
a.mpv {
    font-weight: bold;
    text-align: center;
    padding: 2px 5px;
    font-size: 13px;
    border: 0px dotted #444;
    color: #fff;
    text-decoration: none;
}
a.mpv:hover {
    background-color: #3ea6ff;
}
ytd-thumbnail a.mpv {
    visibility: hidden;
    position: absolute;
    top: 0;
}
ytd-thumbnail:hover a.mpv {
    visibility: visible;
}
`);

setInterval(() => {
[...document.querySelectorAll('a#thumbnail:not([' + ATTR_MARK + ']')]
      .forEach(a => {
         a.setAttribute(ATTR_MARK, true);
         //console.debug('thumb', a);
         a.parentElement.insertAdjacentHTML("beforeend", `<a href="mpv://${a.href}" class="style-scope mpv">PLAY IN MPV</a>`);
      });
}, 1000 * 1);

document.addEventListener('yt-action', event => {
  if (event.detail?.actionName != 'ytd-watch-player-data-changed') return;
  document.querySelectorAll('.ytp-left-controls')
    .forEach(el => {
       const SELECTOR_ID = 'MPV-link';
       const boxHTML = document.getElementById(SELECTOR_ID) || (function () {
               el.insertAdjacentHTML("beforeend", `<a href="mpv://${location.href}" id="${SELECTOR_ID}" class="style-scope mpv">PLAY IN MPV</a>`);
               return document.getElementById(SELECTOR_ID);
            })();
       boxHTML.href = 'mpv://' + location.href;
    });
});
