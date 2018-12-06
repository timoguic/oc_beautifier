'use strict';

// Span widget
const spanWidget = document.createElement('span')
spanWidget.classList.add('oc-form__widget')

const profileLink = document.createElement('a')
profileLink.id = 'showProfileLink'

spanWidget.appendChild(profileLink)

// Button
const myButton = document.createElement('button')
myButton.classList.add('button', 'button--secondary')
myButton.id = 'showProfile'
myButton.innerHTML = 'Get link'
myButton.addEventListener('click', (e) => {
    e.preventDefault()
    let optionElm = document.querySelector('.oc-form__widget span.autocomplete option');
    let newLink = '/fr/mentorship/students/' + optionElm.value + '/dashboard';

    var studentName = optionElm.text.split(' ')

    profileLink.href = newLink
    profileLink.innerHTML = studentName[0] + ' ' + studentName[1]
})

// Span button
const spanText = document.createElement('span')
spanText.classList.add('oc-form__label-text')

spanText.appendChild(myButton)

// New label
const myLabel = document.createElement('label')
myLabel.classList.add('oc-form__row')

myLabel.appendChild(spanText)
myLabel.appendChild(spanWidget)

// Form
const myForm = document.querySelector('div.oc-form__group')
myForm.appendChild(myLabel)