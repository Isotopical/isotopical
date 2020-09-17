---
layout: post
title: Intro to Isotopical
date: 2020-09-14
author: Greg Marine
tags: 
- technology
- cloud computing 
- software
- azure
- blog
- isotopical
- ionic
- reactjs
close_button: /posts
published: false
---

How many times have you been visiting a web site and wondered, "How did they make this site?" Yeah, I don't do that either. But as a software developer who has been programming professionally for more than 24 years now, I've seen content management systems of all shapes and sizes. A few years ago I had considered making one myself. But that itch didn't get scratched until now. What started as a fun exercise and proof-of-concept became the platform that powers this website: [Isotopical](https://www.isotopical.website).

# Smooch CMS

Something my dad taught me years ago was something called the KISS Principle. KISS stands for Keep It Simple, Stupid. In 1960, Rear Admiral Paul D. Stroop headed up "Project KISS." Admiral Stroop was the chief of the Navy's weapons bureau and instituted the project to increase the reliability, and reduce the cost, of the military equipment his organization produced. The principle states that most systems work best if they are kept simple rather than complicated.

A few years ago, my dad and I came up with a conceptual content management system for the website of his church. He had used several CMSes over the years and found them all more complicated than they needed to be in order to provide others access to contribute and edit content. It isn't that they were difficult for the users. It was more so that things were overly engineered to manage as an administrator of the system. He wanted something that was quite easy to administer and remained super easy for his content providers.

We came up with a plan to implement this using the KISS principle and aptly named it Smooch CMS. It was to be so incredibly simple to use and manage that anyone in his church should be able to use it. There were people from all sorts of backgrounds and abilities. He wanted to enable each department head to be able to manage their own teams of content providers and editors without his needing to be involved. As you can imagine, if we didn't make it dead simple, he would have been bombarded with support inquiries all the time.

This all would have been great for him. Alas, it never happened. Smooch CMS never came to be and the idea was shelved away in the back of my mind. His church ended up paying for a service that included their own CMS that was designed specifically for churches. I never did forget about the idea of building a CMS myself. It just wasn't hadn't become a priority.

# Mr. Hyde

I've used GitHub for source control for many projects in the last decade. Most of these projects were internal to my employer. So, as I switched employers, my contribution graph would get reset and therefore doesn't look that impressive prior to summer 2020. Now that I'm working on my own projects and those for clients, I own the fate of my GitHub contributions graph.

GitHub's co-founder, Tom Preston-Werner, created a static web site generator named Jekyll. GitHub pages uses this software and powers many web sites. It is an attractive option to many developers because it doesn't use a database backend and does not have a comment system to moderate. One of its most attractive features is the use of Markdown files to author content with instead of fancy markup or editors to deal with. Simply put, you can focus on your content instead of dealing with configurations and upgrades.

Two of the features of Jekyll that I liked the most are the use of Markdown files for content and the fact I wouldn't need to moderate comments. I have plenty to say and I don't need to concern myself with reader comments, am I right!?! I actually appreciate feedback in most forms. I honestly just have no desire to moderate comments from trolls that use profanity.

I could have use Jekyll for this web site. I could have really used any existing software. However, the software developer in me thought it would be a fun exercise to try and build blogging software myself. Jekyll would become the inspiration by which I would base my own project. At first, I named it Smooch CMS in honor of the aforementioned idea that my dad and I came up with. However, as it was started with the developer in mind and not necessarily just to keep things simple, and ended up calling the project Hyde until I came up with something more appropriate.

# Introducing Isotopical

Some sort of intro paragraph...

## Ionic Framework

Ionic is a one codebase, any platform, framework that supports Angular, React, and VueJS. More than anything, it is a mobile first User Interface library that renders well on mobile devices and on regular computers. This UI framework automatically knows which operating system is is running on and will present the user with an interface they would normally see on their OS of choice. Under the hood, Ionic is built using Stencil and implements all of the magic using Web Components. It has a vibrant community and is maintained by an amazing team.

## React

React, or more specifically ReactJS, is a declarative and component-based learn once, write anywhere UI framework created by Facebook. It takes an non-opinionated approach that allows the developer to design how to organize their code based on the project. It has a vast array of third-party libraries available that support all kinds of additional functionality for apps. It supports the latest Hooks style of tapping into app events for your code logic to maximize reusability. And like the Ionic community, the React community is quite vibrant and very active.

## React-Markdown

As Markdown was one of my requirements, I needed to find the best way to get the content to render. As I mentioned above, Ionic supports React and React has a vast array of third-party libraries. I also wanted to take a mobile first approach; which as I said Ionic is right on par for. So, all I needed to do was perform a little research into React-based libraries that would be compatible with Ionic. After a quick search, I came across a library named React-Markdown. It definitely hit the mark on Markdown. But it also included features I had not even thought about!

React-Markdown has a fast Markdown parser to consume and render the content. Just like React, it also supports third-party libraries for rendering custom content. For example, if I want to display code examples, I can use the React Syntax Highlighter library. Something else about the React-Markdown component is its ability to use custom renderers. What this means is I am able to define out it handles anything from links to images defined in the Markdown content. This opens me up to so many new possibilities for how I manage content.

## GitHub

Like many software developers, and as I mentioned above, I have been using GitHub quite a while. It is an integral part of my development workflow. I love that it is directly integrated in my source code editor, Visual Studio Code. After I add a new blog post or recipe to my site, I simply commit the change and it is ready for deployment to my live site. GitHub's Action Workflows build the site and deploys it directly to my public web site. Once the build and deployment are complete, all of the changes I made are live and ready for my readers.

## Azure Static Web Apps

I use Azure Static Web Apps to host this site. It is ideal for static site generators and works great for Angular, ReactJS, and VueJS sites alike. It has direct integration with GitHub and allows for staging deployments to automatically get generated when pull requests are created. And it will scale easily as my site becomes more popular. Another bonus is that it is low in cost. Azure Static Web Apps is currently in preview and therefore is free as of this writing.

## Isotopical

As Ionic and React use physics terminology, I landed on the name based on a similar flow of thought.