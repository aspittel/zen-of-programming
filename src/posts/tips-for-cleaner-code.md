---
title: "Extreme Makeover: Code Edition"
tags: ["tech talks", "list", "speaking"]
path: "/cleaner-code"
date: "7/23/2018"
cover: "./clean code.jpg"
published: true
---

I am a little bit obsessed with writing clean code. Code should be written for future developers (including yourself) and extendability -- it should be relatively easy to add features to your application and to maintain your code. If we were writing code for computers, we would just write binary! Here are some of my tips for writing cleaner code:

## 1. Use clear variable and function names

Code becomes much easier to read if you write out full, descriptive variable and function names. The below code isn't very clear:

```js
function avg (a) {
  let s = a.reduce((x, y) => x + y)
  return s / a.length
}
```

It becomes a lot more readable if we write out full variable names!

```js
function averageArray (array) {
  let sum = array.reduce((number, currentSum) => number + currentSum)
  return sum / array.length
}
```

> Don't minify your own code, use full variable names that the next developer can understand.

## 2. Write short functions that only do one thing

Functions are more understandable, readable, and maintainable if they do one thing only. If we have a bug when we write short functions, it is usually easier to find the source of that bug. Also, our code will be more reusable. For example, our above function could be renamed "sumAndAverageArray" because we are calculating the sum using reduce and then calculating the average of that sum.

```js
function sumAndAverageArray(array) {
  let sum = array.reduce((number, currentSum) => number + currentSum)
  return sum / array.length
}
```

We can break this into two functions, and it becomes more clear what each part of the code is doing. Also, if we are creating a large program, having the `sumArray` function could come in handy!

```js
function sumArray(array) {
  return array.reduce((number, currentSum) => number + currentSum)
}

function averageArray(array) {
  return sumArray(array) / array.length
}
```

**If you are writing a function that could be named with an "and" in it -- it really should be two functions.**

## 3. Documentation

Write good documentation for your code so that future developers understand what your code is doing and why.

The following code has "magic numbers" in it that aren't documented.

```js
function areaOfCircle (radius) {
  return 3.14 * radius ** 2
}
```

We could add comments to the above code to make it more understandable for someone who doesn't know the mathematical equation for finding the area of a circle.

```js
const PI = 3.14 // PI rounded to two decimal places

function areaOfCircle (radius) {
  // Implements the mathematical equation for the area of a circle:
  // Pi times the radius of the circle squared.
  return PI * radius ** 2
}
```

> Note: the above code is just an example! You would probably want to use Math.PI instead of creating your own PI estimation.

**Your comments should describe the "why" of your code.**

Bonus: using a documentation style for your code. For Python, I love [Google Style Docstrings](http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html), and [JSDoc](http://usejsdoc.org/) is great for JavaScript.

## 4. Sandi Metz's Rules

Sandi Metz -- an awesome Ruby developer, speaker, and author -- has four rules for writing clean code in object oriented languages.

1. Classes can be no longer than 100 lines of code
2. Methods and functions can be no longer than 5 lines of code
3. Pass no more than 4 parameters into a method
4. Controllers can instantiate only one object

I highly recommend watching [her full talk](https://www.youtube.com/watch?v=npOGOmkxuio) on these rules!

I've been following these consistently for the past two years or so, and they become so ingrained that I barely think about them! I really like them, and I think they make code more maintainable.

__These rules are only guidelines, but they can significantly clean up your code.__

## 5. Be Consistent

When writing code, consistency is key. People shouldn't be able to look at a code base and tell exactly who wrote each line of code without a git blame! If you are using semicolons in JavaScript, use them at the end of each statement. Use " vs ' consistently as well!

I would recommend using a style guide and a linter to enforce these standards -- for example, I love [Standard JS](https://standardjs.com/) for JavaScript and [PEP8](https://www.python.org/dev/peps/pep-0008/?) for Python! I even have my text editor setup to enforce these standards whenever I save!

__Find a code style and stick to it.__

## 6. Keep your code DRY

One of the first things taught to new programmers is "don't repeat yourself". If you notice patterns in your code, use code to reduce those duplications. I often encourage my students to play the game [SET](https://www.nytimes.com/crosswords/game/set) to work on their pattern recognition skills.

That being said, if you DRY up your code too much or choose the wrong patterns to abstract, your code can be close to unreadable and you may need to duplicate your code more down the road. Sandi Metz has a [great article](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction) on how "duplication is far cheaper than the wrong abstraction."

__Don't repeat yourself, but also don't abstract your code to an extent that it is not understandable.__

## 7. Encapsulation + Modularization

Group like variables and functions in order to make your code more reusable and understandable.

```js
let name = 'Ali'
let age = 24
let job = 'Software Engineer'

let getBio = (name, age, job) => `${name} is a ${age} year-old ${job}`   
```

If you have multiple people in your program, something like the following is more clear:

```js
class Person {
  constructor (name, age, job) {
    this.name = name
    this.age = age
    this.job = job
  }

  getBio () {
    return `${this.name} is a ${this.age} year-old ${this.job}` 
  }
}
```

or if you have only one person in your script:

```js
const ali = {
  name: 'Ali',
  age: 24,
  job: 'Software Engineer',
  getBio: function () {
    return `${this.name} is a ${this.age} year-old ${this.job}` 
  }
}
```

In a similar vein, break long programs into different files so that your code is more modular and digestible. Long files are often hard to sift through, and you may want to use small chunks of code from project to project.

__Group like items in your code so that it is more reusable.__

## In short...

These are some good guidelines for cleaning up your code, but they aren't written in stone! I personally don't use all of these all the time (see my personal projects!), and no code is perfect. These are just some tips for writing code that can be more easily reused, read by other developers, and extended.

If you liked this article, keep in touch! I send out a [newsletter](https://tinyletter.com/ali_writes_code) every Friday with my favorite articles and what I've written that week. Also, [Tweet](https://twitter.com/ASpittel) me your favorite tips for writing clean code!
