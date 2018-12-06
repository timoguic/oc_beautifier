// ==UserScript==
// @require http://code.jquery.com/jquery-3.2.1.min.js
// @name         OC soutenances
// @version      0.1
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
    $('iframe#project_session_comment_ifr body#tinymce').val('test')
})();
