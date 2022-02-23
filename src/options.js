import $ from 'jquery'

$('ul>li:odd').css({
    color: 'red'
})

$('ul>li:even').css({
    color: 'green'
})

import imgObj from './assets/1.gif'

let img = document.createElement('img')
img.src = imgObj
document.body.appendChild(img)