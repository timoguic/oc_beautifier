'use strict';

// Span widget
const spanWidget = document.createElement('span')
spanWidget.classList.add('oc-form__widget')

const profileLink = document.createElement('a')
profileLink.id = 'showProfileLink'

const h3Widget = document.createElement('h3')
h3Widget.appendChild(profileLink)
spanWidget.appendChild(h3Widget)

// New label
const myLabel = document.createElement('label')
myLabel.classList.add('oc-form__row')

// Button
const myButton = document.createElement('button')
myButton.classList.add('button', 'button--secondary')
myButton.id = 'showProfile'
myButton.innerHTML = 'Get link'
myButton.addEventListener('click', (e) => {
    e.preventDefault()
    let optionElm = document.querySelector('span.autocomplete option')
    let newLink = '/fr/mentorship/students/' + optionElm.value + '/dashboard'
    let studentName = optionElm.text.split(' ')
    profileLink.href = newLink
    profileLink.innerHTML = studentName[0] + ' ' + studentName[1]
})

// Span button
const spanText = document.createElement('span')
spanText.classList.add('oc-form__label-text')
spanText.appendChild(myButton)

myLabel.appendChild(spanText)
myLabel.appendChild(spanWidget)

// Form
const myForm = document.querySelector('div.oc-form__group')
myForm.appendChild(myLabel)