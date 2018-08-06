// ==UserScript==
// @require http://code.jquery.com/jquery-3.2.1.min.js
// @name         OC soutenances
// @version      0.1
// @description  Creates a link to the dashboard of the student without having to create a 'soutenance' session
// @author       Tim G
// @homepage     https://github.com/timoguic/oc_beautifier
// @updateURL    https://raw.githubusercontent.com/timoguic/oc_beautifier/master/oc_soutenances_enhancer.js
// @downloadURL  https://raw.githubusercontent.com/timoguic/oc_beautifier/master/oc_soutenances_enhancer.js
// @match        http*://*openclassrooms.com/*mentorship/defense-sessions/new
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Add button
    $('div.oc-form__group').first().append('<label class="oc-form__row"><span class="oc-form__label-text"><button class="button button--secondary" id="showProfile">Get link</button></span><span class="oc-form__widget"><a href="#" id="showProfileLink"></a></span></label>');
    $('button#showProfile').click(function(e) {
        e.preventDefault();
        optionElm = $('.oc-form__widget').find('span.autocomplete option').first();
        var idStudent = optionElm.val();
        var studentName = optionElm.text().split(' ')
        var newLink = '/fr/mentorship/students/' + idStudent + '/dashboard';
        console.log(idStudent);
        $('#showProfileLink').attr('href', newLink).text(studentName[0] + ' ' + studentName[1]);
        return false
    });
})();
