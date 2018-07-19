---
title: What is a Web Framework, and Why Should I use one?
tags: ["webdev", "beginners", "code"]
path: "/web-framework-intro"
date: "7/19/2018"
cover: "/web-framework.png"
published: true
---
"Framework" is a word used a lot in relation to code. So, what even is a framework? When we talk about frameworks, those frameworks normally fall into three different categories -- frontend, backend, and CSS or user interface frameworks. But even once you know what frameworks are, which one should you learn or use and why? This post will discuss what a framework is, what frameworks are out there, and how to make decisions about what kind of framework you should use for your projects!

## What are Frameworks

If we look at a couple different web applications we can see that there are a lot of duplicated features. Many have user authentication, pages that render, they connect to databases, they have profiles you can look at, they all have stylized feeds of information etc. If I wanted to, I could write all of that logic myself every time I want to build a new application; however, there are also a lot of tools available which can do that for us instead. 

In addition, a lot of the time when we build applications we want to format our code in certain ways that help us become more efficient and help other developers understand our code. Web frameworks help us achieve structure in our applications, and they give us additional features we can add to them without too much extra work. Frameworks give us a place to start so that we can focus on features rather than configuration details.

Code is read many more times than it is written, and it is so important when you are working with other developers that they know where the code for certain tasks is being written so they can use it in their own code. The frameworks also have conventions for how the code is written and structured, which standardize how the developers write their code. 

> Most websites share a very similar (not to say identical) structure. The aim of frameworks is to provide a common structure so that developers don’t have to redo it from scratch and can reuse the code provided. In this way, frameworks allow us to cut out much of the work and save a lot of time.

> To summarize: there’s no need to reinvent the wheel.

from [Awwwards](https://www.awwwards.com/what-are-frameworks-22-best-responsive-css-frameworks-for-web-design.html).

Under the hood, frameworks are just code libraries (i.e. other people's code), and the popular ones are open source! So you can look at your library's code online!

## Backend vs Frontend

* The **frontend** of a web application is the part you see and interact with. It consists of the web design and the interaction of the site. In terms of programming languages, this is almost always comprised of the CSS, HTML, and JavaScript of the page.

* The **backend** consists of the server, the database, and the code that interacts with them. This also consists of the code that gives dynamic data to the frontend of the site. This can be handled in most programming languages. The ones we will discuss primarily today are Python, Ruby, and Node JavaScript but there are countless others.

## User Interface Frameworks

User interface frameworks help create stylized and professional looking web applications. Most include some sort of grid system so that you align elements, they have color schemes so that is handled for you, and they stylize your HTML components using CSS so that they look clean and professional. These are within the frontend domain; however, normally when we refer to frontend frameworks we are talking about JavaScript frameworks.

Some user interface frameworks include:

* [Bootstrap](http://getbootstrap.com/)
  * Very well known and built by Twitter
  * Easy to learn and looks professional
  * Can be easy to spot "Bootstrap Sites"
  * Can be difficult to customize components
* [Materialize](http://materializecss.com/)
  * Clean looking
  * A bit more "fun" than Bootstrap
  * Lots of styling and color options
  * Follows Google's Material style guide
* [Foundation](http://foundation.zurb.com/)
  * Lots of examples
  * Professional looking
* [Semantic UI](https://semantic-ui.com/)
  * Lots built-in
  * Built-in themes so it's customizable
* [Grommet](https://grommet.github.io/)
  * Has a huge focus on accessibility
  * Looks really clean
  * Not as used as some of the others
  * Made for React JS (another framework we will look at later)

### Choosing a UI Framework

Choosing a User Interface framework mostly comes down to personal preference in appearance and the goals of the site. The different styles may appeal to different industries or may convey a different message to users.

## Frontend Frameworks

Frontend frameworks are, in most cases, written in JavaScript and are for organizing the functionality, interactivity of your website. Some of these include:

* [Vue](https://vuejs.org/)
  * Easy to learn
  * Very fast
  * All tools associated with it are packaged well
  * Takes parts from Angular and React and optimizes them
  * less widely adopted than some others
  * Flexible -- you can use it in multiple ways
* [AngularJS](https://angularjs.org/)
  * Built by Google
  * Well supported
  * Huge number of features
  * Improves application scalability
  * Difficult to debug
  * Large learning curve
* [Angular 2+](https://angular.io/)
  * Built by Google
  * Well supported
  * Encourages reusability
  * Improves application scalability
  * Large learning curve
* [React](https://facebook.github.io/react/)
  * Built by Facebook
  * Bundles frontend code into components
  * Organizes code and data to make code more reusable
  * Large learning curve
* [Ember](https://www.emberjs.com/)
  * Gives a large amount of functionality out of the box
  * Opinionated (you have to use its formatting)
  * Steep learning curve

### Choosing a Frontend Frameworks

The world of frontend frameworks is evolving especially fast, it seems like a new frontend framework is on the rise every few months. Learn what makes sense to you, and don't worry too much about what the "hottest" one at the moment is.

> Some people argue that React and Vue are libraries instead of frameworks, but a lot of people consider them frameworks, so I included them!

## Backend Frameworks

Backend frameworks are a lot more varied. They are written in a variety of programming languages and have a wide variety of features. Below, like the above list, is a very incomplete list of some of the frameworks out there for writing application backends.

* [Spring MVC](https://spring.io/)
  * Java (more difficult language to learn)
  * Very fast
  * Less opinionated
* [Django](https://www.djangoproject.com/)
  * Python (easier language to learn)
  * Happy medium between being very opinionated and less structured
  * Gives you a lot of functionality out of the box (like user authentication, database connections, and view rendering)
  * Can be difficult to integrate a fancy front-end.
  * Python's data handling is amazing
* [Flask](http://flask.pocoo.org/)
  * Python (easier language to learn)
  * Less opinionated and more customizable than Django
  * Gives you less out of the box (you have to build more)
* [Ruby on Rails](http://rubyonrails.org/)
  * Ruby (easier language to learn)
  * Very opinionated
  * Has great tools like scaffolding so you can build things fast
  * Gives you a lot of functionality out of the box (like user authentication, database connections, and view rendering)
  * The asset pipeline helps with front-end development
  * Ruby takes longer to run programs than some other programming languages
* [Meteor](https://www.meteor.com/)
  * JavaScript (easier language to learn)
  * Gives you a lot of functionality out of the box (like user authentication, database connections, and view rendering)
  * Integrates very well with modern front-ends
* [Express](https://expressjs.com/)
  * JavaScript (easier language to learn)
  * Very customizable
  * Very lightweight
  * Less built-in features
  * Node is very fast

### Choosing a Backend Framework

Usually, you choose a backend framework based on the programming language it is written in. Also, take into account what features you want to add -- if you want authentication (or user login) for your website, for example, writing it in Django where authentication is built in will be a lot easier than writing it in Flask where you would need an additional service.

## Learn More

If you want to use or learn a framework, [here](https://github.com/gothinkster/realworld) are a bunch of applications built with different ones, so you can evaluate which one makes the most sense to you. There are a lot more frameworks out there of various sizes and popularities, but this article gives a brief overview of some of the popular ones out there and where to get started. There is no right answer on what to learn first! There are pros and cons to everything, so weigh what is most important to you and go from there. Frameworks are super helpful and make writing code a lot quicker in most cases, but having a strong programming foundation before that is also super important -- so make sure you know the language your framework is written in well first. Frameworks are super helpful for writing websites because they enforce a structure that other developers in the framework understand, and they give you common functionality so you don't have to reinvent the wheel!

### Where to start learning...

* [Django Girls Tutorial](https://tutorial.djangogirls.org/en/) - I learned my first framework through their online tutorial!
* [Code Academy](https://www.codecademy.com/)
* [TodoMVC](http://todomvc.com/)
* [CodeNewbie Podcast](https://www.codenewbie.org/podcast)
* [How fast are different programming languages?](http://benchmarksgame.alioth.debian.org/)

#### And if you need an idea for an application...

* [Awesome App Ideas](https://github.com/tastejs/awesome-app-ideas)
* [DevCereal](https://devcereal.com/21-web-app-ideas-beginner-projects/)

### And if you want to read more of my articles on Frameworks

* [How I Built an API with Mux, Go, PostgreSQL, and GORM](https://dev.to/aspittel/how-i-built-an-api-with-mux-go-postgresql-and-gorm-5ah8) - Mux is a backend framework for the Go programming language!
* [Functional Programming in JavaScript with Hyperapp](https://dev.to/aspittel/functional-programming-in-javascript-done-right-with-hyperapp-570f) - Hyperapp is a brand new frontend framework that I really enjoy! 
* [Learning Angular 5 as a React and Vue Developer](https://dev.to/aspittel/learning-angular-5-as-a-react-and-vue-developer-5dp3) - Angular is a very popular frontend framework for writing large applications!

#### Stay in touch!

If you liked this article, [subscribe](tinyletter.com/ali_writes_code) to my Friday weekly wrap up!
