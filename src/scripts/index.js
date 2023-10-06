/* eslint-disable indent */
/* eslint-disable eol-last */
// 'use strict'

import '../lib/style'
// console.log('Hello World')

// import '../lib/works-slider'

// import 'keen-slider/keen-slider.min.css'
// import KeenSlider from 'keen-slider'

// var slider = new KeenSlider(
//     '#my-slider',
//     {
//       loop: true,
//       created: () => {
//         console.log('created')
//       }
//     },
//     [
//       // add plugins here
//     ]
//   )

//   slider()

// function onEntry (entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//       change.target.classList.add('element-show')
//     }
//   })
// }
// let options = { threshold: [0.5] }
// let observer = new IntersectionObserver(onEntry, options)
// let elements = document.querySelectorAll('.element-animation')
// for (let elm of elements) {
//   observer.observe(elm)
// }

function onEntry (entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('skill-show')
    }
  })
}
let options = { threshold: [0.5] }
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll('.skill')
for (let elm of elements) {
  observer.observe(elm)
}

function fullEntry (entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('progect-image-full')
    }
  })
}
let observerOne = new IntersectionObserver(fullEntry)
let elementsOne = document.querySelectorAll('.progect-image')
for (let elm of elementsOne) {
  observerOne.observe(elm)
}

const observerRight = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting) {
      // добавить ему CSS-класс
      entry.target.classList.add('shift-right')
    }
  })
})

let animalsRight = document.querySelectorAll('.work-right')
for (let elm of animalsRight) {
  observerRight.observe(elm)
}

const observerLeft = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting) {
      // добавить ему CSS-класс
      entry.target.classList.add('shift-left')
    }
  })
})

let animalsLeft = document.querySelectorAll('.work-left')
for (let elm of animalsLeft) {
  observerLeft.observe(elm)
}