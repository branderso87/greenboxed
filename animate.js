const box = document.getElementById('box')

// TweenLite.to(box, 0.7, {left: 0, x: 0})
//to defines where animation moves to relative to the declared starting position of the element
// TweenLite.from(box, 2, {x: '-=200px', autoAlpha: 0})
//from defines where animation starts relative to position of element
//-= : subtract from starting position
//+= : add to starting position
//autoAlpha combines pacity and visibility into one property
// TweenLite.set(box, {x: '-=200px', scale: 0.3})
// TweenLite.set(box, {x: '+=100px', scale: 0.6, delay: 1})
// TweenLite.set(box, {x: '-50%', scale: 1, delay: 2})
// function start() {
//   console.log('start')
// }
// function update() {
//   console.log('animating')
// }
// function complete() {
//   console.log('end')
// }
// TweenLite.fromTo(box, 2, {x: '-=200px'}, {x: 150, ease: Power4.easeInOut, onStart: start, onUpdate: update, onComplete: complete})


TweenLite.to(box, 0.4, {top: '100%', y: '-100%', ease: Bounce.easeOut, delay: 2})
TweenLite.to(box, 0.7, {x: '-=200px', y: '-100%', ease: Back.easeInOut, delay: 3})
TweenLite.to(box, 0.8, {x: '-=200px', y: '-100%', ease: Back.easeInOut, delay: 4.2})
TweenLite.to(box, 2.5, {top: '50%', y: '-50%', ease: Power0.easeNone, delay: 5})
TweenLite.to(box, 2.5, {x: '+=400px', ease: Elastic.easeInOut, delay: 7.7})
TweenLite.to(box, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4})
