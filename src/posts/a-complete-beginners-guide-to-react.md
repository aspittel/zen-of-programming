---
title: A Complete Beginner's Guide to React
tags: ["react", "javascript"]
path: "/beginners-guide-react"
date: "2018-08-26"
cover: "/speaking/speaking.jpg"
published: false
---

I want to get back into writing more technical content, and React is one of my favorite technologies, so I thought I would create a React intro! This post requires knowledge of at least basic CSS, HTML, and JavaScript -- I am of the strong opinion that people should know these before moving on to libraries built on them!

## What is React

React is a JavaScript library build in 2013 by the Facebook development teach in order to make user interfaces more modular (or reusable) and easier to maintain. According to React's website it is used to "Build encapsulated components that manage their own state, then compose them to make complex UIs."

I'm going to use a lot of Facebook examples throughout this post since they wrote React in the first place!

Remember when Facebook moved from just likes to reactions? Instead of just being able to like posts, you can now react with a heart, or a smiley face, or a like to any post. If those reactions were primarily made in HTML, it would be a huge amount of work to change all of those likes to reactions and to make sure that they work.

This is where React comes in -- instead of implementing the "separation of concerns" that gets impressed upon developers from day one, we have a different architecture in React that increases modularity based on a component structure instead of separating the different programming languages.

### React vs. Vanilla JavaScript

When we talk about "vanilla" JavaScript, we are normally talking about writing JavaScript code that doesn't use additional libraries like JQuery, React, Angular, or Vue. If you would like to read more about those and what a framework is, I have a [post](https://zen-of-programming.com/web-framework-intro) all about web frameworks!

## Set Up

If you are creating a production React application, you will want to use a build tool, like Webpack, in order to bundle your code since React utilizes some patterns that won't work by default in the browser. [Create React App](https://github.com/facebook/create-react-app) is super helpful for these purposes, since it does most of the configuration for you!

For now, since we want to get up and running super quickly so we can write actual React code, we will be using the React CDN, which is only for development purposes! We will also use the Babel CDN so that we can use some non-standard JavaScript features (we'll talk more about that later!).

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.js">
```

I also made a [Codepen template](https://codepen.io/aspittel/pen/gdrexE) that you can use!

Also, in a full React project, I would split my components into different files, but again, for learning purposes we will combine our JavaScript into one file for now.

## Components

For this tutorial, we will be building a Facebook status widget, since Facebook wrote React in the first place! 

Think about how many places the `like` widget appears on Facebook -- you can like a status, or a link post, or a video post, or a picture! Or even a page! Every time Facebook tweaks something about the like functionality, they don't want to have to do so in all of those places. So, that's where components come in! All of the reusable pieces of a webpage are abstracted into a component that can be used over and over again and we will only have to change code in one place to update it.

Let's look at a picture of a Facebook status and break down the different components within it.

![A Facebook status](/react-intro/component-diagram.png)

The status itself will be a component -- there are lots of statuses within a Facebook timeline, so we definitely want to be able to reuse the status component. 

Within that component we will have *subcomponents* or components within a parent component. Those will be reusable as well -- so we could have the like button component be a child of the `PhotoStatus` component and the `LinkStatus` component.

Maybe our subcomponents would look something like this:

![A diagram of breaking down react components](/react-intro/components.png)

We can even have subcomponents within subcomponents! So, the group of like, comment, and share could be it's own `ActionBar` component with components for liking commenting and sharing within it!

![A diagram of subcomponents within subcomponents](/react-intro/subcomponents.png)

There are a bunch of ways you could break down these components and subcomponents depending on where you will reuse the functionality in your application.

## Getting Started

I wanted to start off this tutorial with a React "Hello World" -- it is tradition after all! Then we'll move to the slightly more complex status example.

In our HTML file, let's add just one element -- a `div` with an id on it. By convention, you will normally see that div have an id "root" on it since it will be the root of our React application!

```html
<div id="root"></div>
```

If you're writing the code in the [CodePen template](https://codepen.io/aspittel/pen/gdrexE?editors=0010), you can write this JavaScript directly in the `js` section. If you are instead writing this on your computer, you will have to add a script tag with the type `text/jsx`, so:

```html
<script type="text/jsx"></script>
```

Now, let's get to our React code!

```jsx
class HelloWorld extends React.Component {
  render() {
    // Tells React what HTML code to render
    return (
      <h1>Hello World</h1>
    )
  }
}

// Tells React to attach the HelloWorld component to the 'root' HTML div
ReactDOM.render(<HelloWorld />, document.getElementById("root"))
```
All that happens is that "Hello World" is displayed as an H1 on the page!

Let's walk through what's going on here.

First, we are using an ES6 class that inherits from the `React.Component` class. This is a pattern that we will use for most of our React components.

Next, we have a method in our class -- and its a special method called `render`. React looks for the `render` method in order to decide what to render on the page! The name makes sense. What ever is returned from that render method, will be rendered by that component.

In this case, we are returning an H1 with the text of "Hello World" -- this is exactly what would be in the HTML file normally.

Finally, we have: 

```jsx
ReactDOM.render(<HelloWorld />, document.getElementById("root"))
```

We are using the ReactDOM functionality to attach our react component to the DOM. 

Our component, `<HelloWorld />`, looks like an HTML tag! This syntax is part of *JSX* which is an extension of JavaScript. You can't natively use it in the browser. Remember how we're using Babel for our JavaScript? Babel will transpile (or convert) our JSX into normal JavaScript so the browser can understand it.

Then, we are using JavaScript's built-in `document.getElementById` to grab our root element we created in our HTML. 

All in all, in this `ReactDOM.render` statement, we are attaching our `HelloWorld` component to our `div` that we created in our HTML file.

## Starter Code

Okay -- now that we've done a "Hello World", we can get started with our Facebook component.

