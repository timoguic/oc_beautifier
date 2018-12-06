
'use strict';

// Add content
var myElem = document.getElementById('project_session_comment')
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