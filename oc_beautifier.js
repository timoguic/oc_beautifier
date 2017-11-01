// ==UserScript==
// @require http://code.jquery.com/jquery-3.2.1.min.js
// @name         OC beautifier
// @version      0.1
// @description  Improves OC dashboard for mentors
// @author       Tim G
// @updateURL    https://raw.githubusercontent.com/timoguic/oc_beautifier/master/oc_beautifier.js
// @downloadURL  https://raw.githubusercontent.com/timoguic/oc_beautifier/master/oc_beautifier.js
// @match        http*://*openclassrooms.com/mentorship/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // improve user profile
    // change height of mentor profile
    $('.mentorProfile').css('min-height', '100px');
    $('.mentorProfile__content section').not('.mentorProfile__username').toggle();
    $('.mentorProfile__username').click(function() {
        $('.mentorProfile__content section').not('.mentorProfile__username').toggle();
    });
    // hide the student list
    $('table.crud-list').hide();
    $('table.crud-list').siblings('h2').click(function() {
        $('table.crud-list').toggle();
    });
})();
