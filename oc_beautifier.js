// ==UserScript==
// @require http://code.jquery.com/jquery-3.2.1.min.js
// @name         OC beautifier
// @version      0.1
// @description  Improves OC dashboard for mentors
// @author       Tim G
// @homepage     https://github.com/timoguic/oc_beautifier
// @updateURL    https://raw.githubusercontent.com/timoguic/oc_beautifier/master/oc_beautifier.js
// @downloadURL  https://raw.githubusercontent.com/timoguic/oc_beautifier/master/oc_beautifier.js
// @match        http*://*openclassrooms.com/mentorship/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // change height of mentor profile
    $('.mentorProfile').css('min-height', '100px');

    // hide sections of the profile
    var mentorProfileSectionElems = $('.mentorProfile__content section').not('.mentorProfile__username');
    $(mentorProfileSectionElems).hide();
    $('.mentorProfile__username').click(function() {
        $(mentorProfileSectionElems).toggle();
    });

    // hide the student list
    var studentListElem = $('div.mentorProfile').siblings('.spacer-big').find('table.crud-list');
    $(studentListElem).hide();
    $(studentListElem).siblings('h2').click(function() {
        $(studentListElem).toggle();
    });
})();
