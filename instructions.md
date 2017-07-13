1. Create a variable

To be able to move any DOM elements on the page with TweenLite we firstly need to create a variable, selecting the right element by ID or class.

In the JS panel of the CodePen demo include:

// 1. Create a variable
var $box = $('#box');
This creates a $box variable that we can reuse and apply our animations to it.

If you are new to jQuery and don’t know anything about selecting objects on the page, then this jQuery Guide For Complete Beginners might be a good starting point.

Lets say we want to move the box all the way to the left edge of the browser. We can do that by adding this code:

2. Create a First .to() Tween

GreenSock Tutorial – .to() tween

Lets say we want to move the box all the way to the left edge of the browser. We can do that by adding this code:

// 2. Create a First .to() Tween
TweenLite.to($box, 0.7, {left: 0});

This will move our $box all the way to the left edge of the body over the duration of 0.7 seconds.

We are animating it from the position defined in the stylesheet (left: 50%) TO the position defined in the .to() tween (left: 0).

But there is a slight issue, only half of the box is visible.

This is because in our stylesheet we’ve defined the transform: translate(–50%, –50%) and this CSS rule still applies to our $box.

To see the whole box we’ll need to also tween the x value, we can easily add this after the left tween.


// 2. Create a First .to() Tween
TweenLite.to($box, 0.7, {left: 0, x: 0});

You can animate as many CSS properties as you like, separate every property by comma.

3. Create a .from() Tween

Another method that we can use is the .from() method.

Comment out the previous tween and add this:


// 3. Create a .from() Tween
TweenLite.from($box, 2, {x: '-=200px', autoAlpha: 0});
GreenSock Tutorial - .from() tween

Now we are animating the box from the position defined in the .from() tween to the position defined in the stylesheet.

We will talk more about using the relative values such as -= and += in the next part of this tutorial.

As you can see it moves our box 200px to the left from the original stylesheet position and the animation starts from there.

autoAlpha is a GSAPs special property, that combines opacity and visibility into one property.

GreenSock - animating autoAlpha

We are starting at autoAlpha: 0, at that moment the styles applied to our box are opacity: 0; visibility: hidden.

Once this tween is animating the visibility is set to inherit and the opacity is animating to 1.

To prevent invisible links and buttons from being interactive, set visibility: hidden; on them in the stylesheet by default and then fade them in when it suits.

You don’t need to set opacity: 0 in the stylesheet, GSAP is assuming that opacity should be 0 when you set visibility: hidden.

4. Create a .set() Tween

Sometimes you just want to set a property on your element without any animations, e.g. reseting a position.

That’s what the GreenSocks’ .set() method is useful for.

Comment out all previous code except the variable and paste this into your CodePen:


// 4. Create a .set() Tween
TweenLite.set($box, {x: '-=200px', scale: 0.3});
TweenLite.set($box, {x: '+=100px', scale: 0.6, delay: 1});
TweenLite.set($box, {x: '-50%', scale: 1, delay: 2});

GreenSock Tutorial - .set() tween

You see that the box is now changing the x position and scale without any animation.

We are also including a delay (1 and 2 seconds) on the second and third tween to make them happen in “sequence”.

Without the delay, all tweens would be played at the same time.

In our case we would just see the box at the x: '-50%' position which is our last tween.

Relative vs Absolute Values

For the x property of the first two tweens we are now using the relative values.

The first tween takes 200px away from the $box default CSS position, then we are adding 100px to the new x position and lastly we are setting the x offset to an absolute value of -50%, which is the same as the original CSS position.

Note: .set() does not have any duration, in case you are copy/pasting the other tweens, don’t forget to remove the duration.

5. Create a .fromTo() Tween

The last method of tweening with GreenSock we’ll cover today is the .fromTo() method.

As the name suggest we can define the starting and ending position in one tween like this:

// 5. Create a .fromTo() Tween
TweenLite.fromTo($box, 2, {x: '-=200px'}, {x: 150});

Copy and paste the above tween in your CodePen demo and comment out everything else apart from creating the variable.

Instead of having only one set of vars we are defining the from values first and then the to values.

GreenSock Tutorial - .fromTo() tween

Again we are starting 200px to the left from the original CSS position.

The x:150 is overwriting our default CSS transform: translate(–50%, –50%) and is setting a new value of transform: matrix(1, 0, 0, 1, 150, -50);.

To better understand how GreenSock calculates and overwrites the default CSS transforms, watch this short video.

6. GreenSock Easing

Until now all our animations felt very unnatural and somewhat boring.

The one way how to add some personality and feeling to your GreenSock animations is by adding an easing.

TweenLite comes with a few standard eases:

Power0 is same as Linear
Power1 is same as Quad
Power2 is same as Cubic
Power3 is same as Quart
Power4 is same as Quint
You can add another set of eases to your arsenal by including the GreenSock EasePack.

<!-- You can find all the GreenSock Plugins on CDN -->
http://cdnjs.com/libraries/gsap

<!-- Include EasePack in your CodePen for more easing functions -->
https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js
Note: TweenMax already includes EasePack, but because we are using TweenLite we need to include it separately.

Here’s where you can download the GreenSock EasePack directly from the GreenSock website.

GreenSock - Download EasePack

This will give you a few extra eases:

Back
SlowMo
SteppedEase
RoughEase
Bounce
Circ
Elastic
Expo
Sine
All easing functions come with an easeIn, easeOut and easeInOut options.

RoughEase, SlowMo and SteppedEase can be configured to get a desired effect.

Lets add ease:Power4.easeInOut to our last tween, the easing function goes inside of the curly brackets, similar to where we have included the delay.


// 6. Easing
TweenLite.fromTo($box, 2, {x: '-=200px'}, {x: 150, ease:Power4.easeInOut});
You can see a difference to our animation straight away, now the box eases in, picks up speed and then slows down at the end.

Lets try something else and add a few more tweens with different eases.


TweenLite.to($box, 0.4, {top: '100%', y: '-100%', ease:Bounce.easeOut, delay: 2});
TweenLite.to($box, 0.7, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 3});
TweenLite.to($box, 0.8, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 4.2});
TweenLite.to($box, 2.5, {top: '50%', y: '-50%', ease:Power0.easeNone, delay: 5});
TweenLite.to($box, 2.5, {x: '+=400px', ease:Elastic.easeInOut, delay: 7.7});
TweenLite.to($box, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4});

Here we are combining a few tweens with different easings, see how each of them can be used for something else?

You can explore all the available GreenSock eases and see how they affect the feel of your animation by playing with the GreenSock Ease Visualizer.

GO TO GREENSOCK EASE VISUALIZER

Ok, that was fun, but we’re not done yet. TweenLite can do a few more things.

7. Callback Functions

There is a lot of ways how you can use callback functions, but for start lets just log a console message when a tween starts.

Keep only the .fromTo() tween and comment out the rest for now.

Create onStart function

// 7. Callback functions
function start(){
  console.log('start');
}
Call onStart function

Now add the onStart: start callback to the tween, it goes after a comma after the easing. Simple, right?


// 6. Easing
TweenLite.fromTo($box, 2, {x: '-=200px'}, {x: 150, ease:Power4.easeInOut, onStart: start});
If you look inside of the web developer tools console, you’ll see a message start printed in the log.

Similarly you can also use an onUpdate and onComplete callbacks.


// 7. Callback functions
function start(){
  console.log('start');
}
function update(){
  console.log('animating');
}
function complete(){
  console.log('end');
}
GreenSock Tutorial - Callback functions

onUpdate will fire on every frame of the animations and onComplete will fire only once the end of the tween.
