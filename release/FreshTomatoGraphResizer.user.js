// ==UserScript==
// @name         Graph resizing script for Tomato firmware. 
// @namespace    https://github.com/tsg2k2
// @version      0.2
// @description  Workaround for hardcoded graph width 
// @author       tsg2k2
// @include      http*/bwm-graph.svg*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const element = top.document.getElementsByTagName("embed")[0];
    const observer = new ResizeObserver(entries => {
        if( vWidth && svgDocument) {
            vWidth = svgDocument.rootElement.clientWidth - 10;
            top.showDraw();
            top.showCTab();
        }
    });
    observer.observe(element);
})();