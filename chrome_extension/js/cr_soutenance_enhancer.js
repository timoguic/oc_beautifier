
'use strict';

const TEMPLATE = `
<p><strong>Avis global & verdict sur le travail de l'étudiant:</strong></p>
<p><strong>Avis sur les livrables:</strong></p>
<p><strong>Avis sur la présentation:</strong></p>
<p><strong>Avis sur la compréhension et la réalisation du projet:</strong></p>
<p><strong>Points positifs:</strong></p>
<p><ul><li>bien</li></ul></p>
<p><strong>Axes d'amélioration:</strong></p>
<p><ul><li>moins bien</li></ul></p>
`

// Add content
var myElem = document.querySelector('#projectSessionFormComment')
var observer = new MutationObserver(function(mutationList) {
    for (var mutation of mutationList) {
        for (var child of mutation.addedNodes) {
            try {
                var txtArea = child.querySelector('#project_session_comment')
                if (!!txtArea) {
                    txtArea.value = TEMPLATE
                    observer.disconnect()
                }
            }
            catch (err) {
                // whatever
            }
        }
    }
});
observer.observe(document, {childList: true, subtree: true})