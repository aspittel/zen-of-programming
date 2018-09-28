# Introduction to Generative Art

DSAA  3 
## First, what is code art?                  

Code art is any art that is built using code. There are endless examples on CodePen -- for example [CSS art](https://dev.to/aspittel/learning-css-through-creating-art-54c0).

## What is generative art?

Generative art is art built with code, but, on top of that, it incorporates randomness in some way. Therefore, each time you run yoHGJHJHJH"
HGFXZ]ur script, load your page, or upon some user interaction we get a different piece of art. 

In a way, the art work becomes a collaboration between the computer and the artist. Some aspects of the artwork are controlled by the coder, but not all of them. The artist controls the randomness in the art.

Usually generative art draws inspiration from modern art.

## Examples of Generative Art

[Kate Compton's Flowers](http://www.galaxykate.com/apps/Prototypes/LTrees/)

[Cellular Automata and the Edge of Chaos](http://math.hws.edu/eck/js/edge-of-chaos/CA.html)

<iframe height='594' scrolling='no' title='Generative art with mouse interaction' src='//codepen.io/MarcoGuglielmelli/embed/eGCDn/?height=594&theme-id=0&default-tab=result&embed-version=2'
  frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/MarcoGuglielmelli/pen/eGCDn/'>Generative
    art with mouse interaction</a> by Marco Guglielmelli (<a href='https://codepen.io/MarcoGuglielmelli'>@MarcoGuglielmelli</a>)
  on <a href='https://codepen.io'>CodePen</a>.
</iframe>


<iframe height='583' scrolling='no' title='Animated generative art in multi-colour' src='//codepen.io/philnash/embed/wmermr/?height=583&theme-id=0&default-tab=result&embed-version=2'
frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/philnash/pen/wmermr/'>Animated
  generative art in multi-colour</a> by Phil Nash (<a href='https://codepen.io/philnash'>@philnash</a>) on <a
  href='https://codepen.io'>CodePen</a>.
</iframe>

<iframe height='547' scrolling='no' title='Impressionists Blobs' src='//codepen.io/murasaki/embed/BmOzMP/?height=547&theme-id=0&default-tab=result&embed-version=2'
  frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/murasaki/pen/BmOzMP/'>Impressionists
    Blobs</a> by murasaki uma (<a href='https://codepen.io/murasaki'>@murasaki</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<iframe height='591' scrolling='no' title='Generated Tree' src='//codepen.io/mknadler/embed/JRvGOz/?height=591&theme-id=0&default-tab=result&embed-version=2'
  frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mknadler/pen/JRvGOz/'>Generated
    Tree</a> by Miriam Nadler (<a href='https://codepen.io/mknadler'>@mknadler</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## What goes into a piece of generative art?

* **Randomness** is crucial for creating generative art. The art should be different each time you run the generation script, so randomness is usually a large part of that.

* **Algorithms** -- Implementing an algorithm visually can often generate awesome art, for example the binary tree above.

* **Geometry** -- Most generative art incorporates shapes, and the math from high school geometry class can aid in some really cool effects.

## How can you approach a generative art piece?

There are two main strategies for creating generative art, though most will fall between the two strategies. The first is to have no results in mind and see what the computer generates as you play around. The second is that you have a very finalized idea of what you want the art to look like, and the randomness only slightly changes the end result.

## Where should you start?

If you know JavaScript, [P5.js]() is an awesome place to start. Its goal is to "make coding accessible for artists, designers, educators, and beginners." It is a wrapper on the [Canvas API](), and it simplifies a lot of the math. It focuses on drawing, but you can also do sound, video, or webcam interaction with it if you are interested in those forms of art!

## A Quick Introduction to P5

First, load in the [P5 CDN](). Then, in your JavaScript file, you will add two functions that will be used in pretty much ever P5 script: `setup` and `draw`. These names are necessary for P5 to call them. 

`setup` is called when the program start. You will probably create a canvas to draw on within it using the `createCanvas` function, and you may set some defaults there. It is only called once!

`draw` is called after setup, and is executed constantly until you call `noLoop`, which will stop it from running again. You can control how many times `draw` runs each second with the `frameRate` function. With generative art, I usually put `noLoop` in the `setup` function, which makes `draw` only run once instead of continuously.

[Here's a P5 starter template](https://codepen.io/aspittel/pen/EeJJBm)

## P5 Lines

You can create a line in P5.js like this:

```js
line(startX, startY, endX, endY)
```

Then, you can randomly generate a bunch of lines and create a simple piece of generative art like this:

<iframe height='522' scrolling='no' title='p5 Lines' src='//codepen.io/aspittel/embed/VGNOeG/?height=522&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/aspittel/pen/VGNOeG/'>p5 Lines</a> by Ali Spittel (<a href='https://codepen.io/aspittel'>@aspittel</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Even really simple scripts can generate cool pieces of art!

## P5 Shapes

## P5 Movement

## Color

## Another Strategy: Tweaking Tutorials

You can also generate really cool generative art by taking someone else's work and building off of it. For example, here's the result of a tutorial by [Dan Shiffman](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw):

<iframe height='555' scrolling='no' title='Smoke Version 1: Randomly Generated Smoke' src='//codepen.io/superbuggy/embed/NLmmbE/?height=291&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/superbuggy/pen/NLmmbE/'>Smoke Version 1: Randomly Generated Smoke</a> by James (<a href='https://codepen.io/superbuggy'>@superbuggy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Here are two tweaks of it to create different effects:
<iframe height='555' scrolling='no' title='Smoke Version 3: Gapped Circles in Time' src='//codepen.io/superbuggy/embed/VGNNmW/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/superbuggy/pen/VGNNmW/'>Smoke Version 3: Gapped Circles in Time</a> by James (<a href='https://codepen.io/superbuggy'>@superbuggy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<iframe height='555' scrolling='no' title='Smoke Version 5: Breathing Circles in Time' src='//codepen.io/superbuggy/embed/JaVVOE/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/superbuggy/pen/JaVVOE/'>Smoke Version 5: Breathing Circles in Time</a> by James (<a href='https://codepen.io/superbuggy'>@superbuggy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[Here's](https://codepen.io/collection/nMmoem/) a Codepen Collection with even more!

You can follow tutorials, fork CodePens, or Glitch projects and create something new and unique! Just make sure to give the original artist some credit too.

## Read More

* [Generative Artistry](https://generativeartistry.com/)
* [Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw)
* [Talk by Tim Holman](https://www.youtube.com/watch?v=4Se0_w0ISYk)

## Keep in Touch

This blog post was co-written by [James Reichard](https://twitter.com/1800THEHIVE) and [Ali Spittel](https://twitter.com/ASpittel) in conjunction with a [talk we gave](https://www.alispit.tel/generative-art-talk). If you create your own art, make sure to Tweet it at us!
