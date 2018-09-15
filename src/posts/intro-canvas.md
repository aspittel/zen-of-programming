Canvas is for creating graphics with JavaScript -- we can build fun, interactive tools using it.
* P5 - my site


The first thing that we need to do is to create a `<canvas>` tag in our HTML. You will also need to add in CSS to make the `canvas` take up space -- so give it a height and a width. I made a Codepen template with some starter CSS for us to work with:


https://codepen.io/aspittel/pen/vzrgGY


Now, on to the JavaScript!

The first thing that we need to do, is to select the canvas so we can interact with it. We will also have to create a variable for the context of the canvas. We will use a 2D context because our drawing will only be two dimensional:

```js
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
```

We will also want to set the size of the canvas in the JavaScript so that our images aren't distorted:

```js
canvas.setAttribute('width', window.innerWidth)
canvas.setAttribute('height', window.innerHeight)
```

Now we need to add some event listeners. For the drawing app, we want to add these:

* 'mousedown' - when a user presses their mouse we want to start drawing
* 'touchstart' - when a user is on their phone, we again want to start drawing

* 'mousemove' - when a user moves their mouse, we want to draw a line from the mouse's previous place to the current place
* 'touchmove' - the same as above, but when the user is on their phone

* 'mouseup' - when a user stops pressing down, we want to stop drawing
* 'mouseleave'- when a user's mouse leaves the area, we also want to stop drawing
* 'touchend' - when a user is on their phone and stops pressing down, we again want to stop drawing

So, we need three event handling functions that will respond to the above events. Let's start with the `startPaint` function that will run each time the person starts drawing.

We can add an event listener the same way that we can with any other element:

```js   
function startPaint (e) {

}

canvas.addEventListener('mousedown', startPaint)
canvas.addEventListener('touchstart', startPaint)
```

We want the `startPaint` function to do a couple things:

* First, we need a variable that keeps track of whether or not we are currently drawing so that the `mousemove` handler only works when we are currently painting. We need to set that to `true` whenever we start drawing.

* Then, we need to get the coordinates of where the person is clicking. We need to keep track of those coordinates so that we can move from the current point to the next one when the person then moves their mouse.

```js
let x, y, isPainting

function getCoordinates(event) {
  // check to see if mobile or desktop
  if (["mousedown", "mousemove"].includes(event.type)) {
    // click events 
    return [event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop]
  } else {
    // touch coordinates
    return [event.touches[0].pageX - canvas.offsetLeft, event.touches[0].pageY - canvas.offsetTop]
  }
}


function startPaint (e) {
  // change the old coordinates to the new ones
  isPainting = true
  let coordinates = getCoordinates(e)
  x = coordinates[0]
  y = coordinates[1]
}
```

https://codepen.io/aspittel/pen/JaZWvE?editors=0011

Then, we need to handle when the person moves their mouse to draw. Here we have to:

* Check to see if we are painting (i.e. the mouse is down)
* We need to get the new mouse coordinates
* We need to draw a line from the old coordinates to the new ones
* We need to set the old coordinates to the new ones so that our next "draw" starts at the current point

```js
function drawLine(firstX, firstY, secondX, secondY) {
  // set the attributes of the line
  context.strokeStyle = 'black'
  context.lineJoin = 'round'
  context.lineWidth = 5
  
  context.beginPath()
  context.moveTo(secondX, secondY)
  context.lineTo(firstX, firstY)
  context.closePath()

  // actually draw the path
  context.stroke()
}

function paint(e) {
  if (isPainting) {
    let [newX, newY] = getCoordinates(e)
    drawLine(x, y, newX, newY)
    // Set x and y to our new coordinates
    x = newX
    y = newY
  }
}

canvas.addEventListener('mousemove', paint)
canvas.addEventListener('touchmove', paint)
```

https://codepen.io/aspittel/pen/QVxpoX?editors=0011


Now, we just have to stop drawing when we release our mouse! We need to reset x and y 

```js
function exit() {
  isPainting = false
}

canvas.addEventListener('mouseup', exit)
canvas.addEventListener('mouseleave', exit)
canvas.addEventListener('touchend', exit)
```

Now, here's a finished version with changing colors and the ability to resize the page!


