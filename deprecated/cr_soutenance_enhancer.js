// ==UserScript==
// @name         OC CR soutenances
// @version      0.2
// @description  Creates a link to the dashboard of the student without having to create a 'soutenance' session
// @author       Tim G
// @homepage     https://github.com/timoguic/oc_beautifier
// @updateURL    https://raw.githubusercontent.com/timoguic/oc_beautifier/master/cr_soutenance_enhancer.js
// @downloadURL  https://raw.githubusercontent.com/timoguic/oc_beautifier/master/cr_soutenance_enhancer.js
// @match        http*://*openclassrooms.com/*/users/*/projects/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Add content
    var myElem = document.querySelector('#projectSessionFormComment .mce-edit-area')
    if (myElem.value.length < 1) {
        myElem.value = `
<p><strong>Avis global & verdict sur le travail de l'étudiant:</strong></p>
<p><strong>Avis sur les livrables:</strong></p>
<p><strong>Avis sur la présentation:</strong></p>
<p><strong>Avis sur la compréhension et la réalisation du projet:</strong></p>
<p><strong>Points positifs:</strong></p>
<p><ul><li>bien</li></ul></p>
<p><strong>Axes d'amélioration:</strong></p>
<p><ul><li>moins bien</li></ul></p>
`
    }
})();