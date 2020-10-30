---
layout: post
title: React in Isotopical
date: 2020-09-28
author: Greg Marine
tags: 
- technology
- cloud computing 
- software
- blog
- isotopical
- react
close_button: /posts
published: false
---

In [my last article](/posts/intro-to-isotopical) on [Isotopical](https://www.isotopical.website), I introduced you to my take on a pseudo content management system I created that powers this website. In this article I'll be going into more detail about the user interface framework I chose for the project, [Ionic](https://ionicframework.com). As I wanted to take a mobile first approach in the project, while also fully supporting desktop browsers, Ionic was a natural choice. 

<!--more-->

# Let There Be Ionic

[Ben Sperry](https://twitter.com/benjsperry) and [Max Lynch](https://twitter.com/maxlynch) founded a company named Drifty Co. and they created a tool named Codiqa. This was a mockup drag-and-drop tool to build [jQuery Mobile](https://jquerymobile.com) apps. Back in the day, jQuery Mobile was a pretty good solution for building mobile UIs for web apps. I've used [jQuery](https://jquery.com) and its mobile counterpart many times in the past. As it grew in features, it started to become sluggish and bloated. I'm sure by now they have solved many of the issues that caused it to be slow. However, back then, this led me to Ben and Max's next project.

In 2012, Drifty Co. founded and released an early preview of [Ionic Framework](https://ionicframework.com). Back then it leveraged [AngularJS](https://angularjs.org) to handle business logic and render the UI components the end user would interact with. AngularJS redefined how web apps were built and solved the performance issues that troubled libraries such as jQuery Mobile. So it was a natural choice for the early versions of Ionic. It was such a great choice in fact that it is likely the reason there was massive adoption and positive reception to this new kid on the block.

![Ionic](/assets/img/collections/posts/ionic-in-isotopical/ionic-in-isotopical-1.jpg "Ionic")

I don't know much more about the history of Drifty Co. and Ionic Framework prior to my use of Ionic. I've been using it since version 1. I have friends who have been using it since its preview versions. And I have gained new friends in the wonderful community that has formed around this framework. It has been 8 years now and Ionic has evolved into version 5. No longer is it limited to AngularJS. Now it supports [Angular](https://angular.io), [ReactJS](https://reactjs.org), and [VueJS](https://vuejs.org). Under the hood, it uses [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) and is built using [StencilJS](https://stenciljs.com). Thanks to Stencil, Ionic will easily support other UI frameworks as they come along. That makes Ionic a powerful force in the Web technologies ecosystem and the right choice for Isotopical.

# Mobile First

As I mentioned above, I wanted to take a mobile first approach with Isotopical. Since Ionic does just that, this made it easy. Mobile apps have common elements such as menus and buttons. I also imagine you have seen a lot of apps have images and that organize information in such elements as cards and lists. The mobile device form factor has become so prevalent that many have come use to having the same components on desktop apps. With nearly everyone in modern economies having a mobile device of some kind, there is little doubt it will remain important to think about apps being mobile first. And to prove my point, you are most likely reading this from your mobile device.

One of the challenges with modern computers are the various operating systems, processor speeds, memory configurations, and screen sizes. The Ionic team has invested a lot of resources into taking into account all of these challenges so that software developers like myself will no longer need to suffer. If you have been writing code for as long as I have (24+ professionally and 34+ in total), you come to a point where you only want to deal with the specific business and data logic of the app you are working on. I honestly no longer want to concern myself with trivial tasks of deciding what sort of button I want to use or the non-trivial tasks of supporting hundreds of device types.

![Ionic Card Component](/assets/img/collections/posts/ionic-in-isotopical/ionic-in-isotopical-2.jpg "Ionic Card Component")

With Ionic, I truly can focus on what makes my apps what they are. I no longer need to reinvent the wheel when it comes to UI components. And since they have full support for the 3 top JavaScript frameworks available, I have multiple options for how I can organize my code and projects. I have a need to support both large and small displays. Ionic has a Flex Grid component for that. On large screens, I want to display a side menu. On small screens, I want to display the menu when the user clicks a button. Ionic as a Split Screen with Menu component for that. On all screens, I need to scroll a list of cards. Ionic has Content and Card components for that!

# Write Once, Run Anywhere

After I had been writing software as a hobby for 10 years, I started doing it professionally in 1996. Back then, the two main languages I started learning was JavaScript and Java. Despite their similarities in their names, the two were far from similar. JavaScript made it possible for HTML to be interactive on the client side. Java was mostly being used on the server side. At the time, neither could even talk to each other. Java did have support for making client apps both as desktop apps or as what was called applets in the browser. Because of this, Java was considered "Write Once, Run Anywhere."

Java never really lived up to this motto, though. For quite a while, desktop hardware wasn't that powerful and so I only used Java for things on the server side. It is possible that Java was a technology before its time. It is still in use today but isn't nearly as supported anywhere as I'm sure they hoped it would become. JavaScript, on the other hand, is on almost every device, computer, and server on the planet. This is likely due to the fact it is the language of choice almost all web browsers in existence. And JavaScript is even supported as a server side technology now through NodeJS.

![Isotopical on mobile and desktop](/assets/img/collections/posts/ionic-in-isotopical/ionic-in-isotopical-3.jpg "Isotopical on mobile and desktop")

Combine the vast UI component library and its support for Angular, ReactJS, and VueJS, Ionic can truly claim the Write Once, Run Anywhere motto. Now before you go and say, "But that doesn't run on servers!", I can tell you that this will even work on servers using Server Side Rendering with Angular. But I digress. The main point I'm making is Ionic runs on iPhone, iPad, Android phones and tablets, MacOS, Linux, and Windows. Simply put, every feature of Isotopic "just works" on all user devices and operating systems without my need to even think about it. I get to focus on the specific features of the software itself and the users can focus on content. All of this thanks to Ionic.

# Performance

One of the most annoying things with any app is when it feels sluggish. A bad user experience makes for a bad app. This is universally the case regardless of the device or operating system a user is accessing the app from. Even on budget devices, users expect the apps they use to be responsive. Thanks to the great work by the Ionic team, they have built an array of components that run fast on all of the latest mobile devices and all modern web browsers. They use best practices such as touch-optimized gesturers, hardware accelerated transitions, and pre-rendering. It also makes use of ahead-of-time compiling to produce native-like execution of the UI code.

![Speed...Ionic is speed!](/assets/img/collections/posts/ionic-in-isotopical/ionic-in-isotopical-4.jpg "Speed...Ionic is speed!")

The Ionic website boasts that they are performance obsessed. My experience with it gives me the feeling they have reason to boast. Most animations and average things like scrolling clock in at a performance of up to 60 frames per second. The average time it takes for an Ionic app to be interactive is less than 3 seconds. This can depend greatly on the developers start up code. But if handled well, it really is that fast to start interacting with the app. This is a considerable improvement over previous version of Ionic.

# HTML, CSS, and JavaScript

One of the most powerful features of Ionic is that it implements all of this magic using just HTML, CSS, and JavaScript. The 100+ UI components that make up the arsenal are standard Web Components built from StencilJS, as I mentioned earlier. What all of this really means to the developer is they can use their existing web skills and tool chain to accomplish amazing user experiences.

As I have been working with HTML and JavaScript since 1996, and CSS since 1997, being able to utilize skills I have honing for over two decades was quite an attractive option. And although Ionic was designed as a hybrid mobile solution, its use of Web technologies means it can also be used for any type of web app or general website. Just like this one!

![Great technology](/assets/img/collections/posts/ionic-in-isotopical/ionic-in-isotopical-5.jpg "Great technology")

# The Right Choice

It is important to weigh the pros and cons for the technology stack to use on a project. Not all stacks are created equal and there isn't one to rule them all. Hopefully you have gathered by all of the above that I truly feel Ionic was the right choice for Isotopical for the user interface and experience. Thanks to a great team and leadership within the company, Ionic also seems like it will be around for years to come. I highly recommend [checking them](https://ionicframework.com) out and see if Ionic is right for your next project.

In my next article, I'll go into detail about why I chose Ionic's support of ReactJS to organize the source code, manage assets, and define design patterns.

To check out the source code for Isotopic, see its [repo on GitHub](https://github.com/Isotopical/isotopical).