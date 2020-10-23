---
layout: post
title: Talking with Michael Callaghan
date: 2020-10-19
author: Greg Marine
tags: 
- technology
- podcast 
- apps
- talking tech
close_button: /talkingtech
published: true
---

This week I talk with Claudio Del Valle about WordFeed.app, a great reading companion that allows you to share words you come across while reading or in everyday conversation. It is an excellent tool and I personally, and highly, recommend it to every logophile!

<!--more-->

<iframe width="100%" height="180" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/b0121c4e"></iframe>

Learn what inspired Claudio to create WordFeed.app and where he sees it going next. Learn about the amazing work he is doing at OpenForge and hear about his tinkerer spirit landed him a job!

Here are some resources discussed in this episode of Talking Tech!

Claudio on [Twitter](https://twitter.com/ClaudioTrains)

[The App](https://wordfeed.app/home)

The Tech:
[Ionic](https://ionicframework.com)
[Firebase](https://firebase.google.com)

Others Mentioned:
[StencilJS](https://stenciljs.com)
[Raspberry Pi](https://www.raspberrypi.org)
[Socket IO](https://socket.io)
[PWA Builder](https://www.pwabuilder.com)
[Open Forge](https://openforge.io)

[Gamification](https://snowball.digital/blog/gamification-in-product-design-make-enterprise-software-suck-less) by Robert Mulcahy


Greg Marine  
Well, this week, I've got a special guest, Claudio, who's the brains behind word feed dot app. Claudio, how are you today?

Claudio Del Valle  
Doing great. Thank you so much for having me.

Greg Marine  
I'm glad to have you. And thank you so much for being a part of the show today. And tell me a little bit about yourself. Who is Claudio?

Claudio Del Valle  
All right. Well, Claudio, I'll get the value supposed to be pronounced. I'm a developer from Mexico. I've been in the United States for close to 10 years. And for the last three years, I've been working for open forge where we do mobile apps.

Greg Marine  
Excellent. That's, that's I've heard of open forge have been a few of your meetups and enjoy it quite a bit. And I believe the is the owner. That's jenai. That's right. Jedediah. Okay. Excellent. And so, you know, besides working for them, what what is it? You do without going into too much detail? I don't want to give up any IP here any secrets from from open forge? But tell me what do you do there?

Claudio Del Valle  
No, let me tell you actually about how I got hired. So I got paired up with them when I was doing my co op rounds at Drexel University, where you get to do three rounds of internships with companies. And one of them happened to be the precursor to open Forge, which was what Giunta and at the time when I interviewed for what jundo actually had no, well, some programming experience, but none that would actually qualify me or me for the job. But what caught Jenny's attention, who happened to enter Ruby was that I was quite a ticker. You see, I also have a passion for 3d printing. And any things involving like, engineering, mechanical engineering, electrical computers, so that I think caught their attention. And then they got me started working on on on a game developing framework framework called the Corona SDK. So that was my first my first real foray into

Greg Marine  
programming. And that's Corona Not to be confused with errors, correct?

Claudio Del Valle  
Exactly. Yeah. And, and right after that, I got my first taste of web development when they got me learning Angular JS, back then, back with ionic one. And then from then on, I just, I became better and better at using Angular and ionic. And that's what I do today. Basically, I work and client projects as both a developer and as a project lead. And

Greg Marine  
essentially what I do, okay, so as far as your background in ionic and Angular JS, we have similar backgrounds. And I appreciate that you're also a tinkerer, I am as well. And 3d printing, as you know, is a part of my passion. And so it's it's great to hear a fellow 3d printer and being able to get in chat with you about that.

Claudio Del Valle  
could actually show you mine right here. It's good. It's a little spot Mini. Okay.

Greg Marine  
Yeah, I don't have mine behind me anymore. My old office. I had 10, Ender threes behind me that we use them for business, but they're down down in the basement where my old office is now I'm upstairs. I have a total of 1110 are operational. One is basically the 11th. One is, is now sort of a skeleton, spare parts. Gotcha. So but so we're here to talk about today, word feed dot app. It is a sort of a social media app that allows local files to present to other local files words that they've come across in their day to day life, and be able to post on there and they can share and comment just like any other social media. So tell me what inspired you to create word feed?

Claudio Del Valle  
Well, that's the word for it's actually been

quite a long time in the making. It started off as an analog version. I actually have a journal right here where I used to do what I do on morphine, which was, as I came across a word that I didn't know I would look it up in the dictionary, write it down with with pen. On paper, and then eventually as the as the, as I kept filling the pages, something about it just made me. I don't know, it seemed like it was reminiscent of like a, almost like a work of art in a sense because like, there is really no rhyme or reason to how those words came to be on that page. It was very serendipitous for me just reading and happening, happened to stumble on a word that I didn't know, over time I did, I stopped coming across words that I didn't know and instead started writing down definitions that I thought were very appropriate for the context in which they were being used, or words that simply had a nice ring to it. And all those use cases got me thinking, Well, I'm sure there are other people who feel this way. Anyway, what I first did was on my website called either via.com, there is a section actually called Word feet, where in which I would post the words that I would normally write down on my journal. And then the next step from there was let's just open this up for everyone to do. And, uh, and then that's basically how it came about. And that's where we are today.

Greg Marine  
Yeah, that's perfect. You posted you tweeted about this new app that you'd come up with. Earlier this year. I believe it was during the pandemic right before it got to where it really flared up. I'm not sure I can't remember exactly. But it caught my eye. Because just like you were doing on pen and paper, I would see a word that I didn't know I'd look it up, or a word that I thought was creatively used and so that I would just, it would just kind of fall away in the back of my mind, then came along word feed, and I'm like, oh, here's a place that outlet that I can use to keep not only keep track of things, not only for myself, but to kind of share with folks like you.

Claudio Del Valle  
Yeah, no. And the first iteration of word feed actually took me just under two weeks, it was very, very quick, I just wanted to get something out there. And the MVP was essentially just the ability to upload a word and be displayed on a feed. And then after that game features such as pronunciation, which was the first actually requested feature, I had someone messaged me and say it would be great if I could have the pronunciation on there. And I believe after that, came the switch to Merriam Webster's official dictionary, which I thought would make it more official. And it also allowed me to display the image when you're adding a word, which I think adds a lot of credential to the app makes a little more noticeable. And then the latest features that I've added. I think the last one I added was the detect the word and an image, which I thought that really consolidates word feet as the perfect reading companion. Oh, absolutely. That was because that was the last step. You got to record the word and the definition. You could even add an example there. But I noticed many of the first posters wouldn't include a comment or an example. Sure. Just because I mean, it's a little cumbersome to have to type it yourself. You do have word dictation, but not a lot of people use that feature. But with the detect image that really takes the work out of it. And if you have like one big paragraph that you wouldn't have one, copy down, why people do the job, therefore you can detect it and pick it out of the page.

Greg Marine  
Now that sounds like a really cool feature. And all these features you've mentioned, I remember seeing them as they came about. So it sounds like I actually used one of the earlier versions in the beginning. And so that's, that's exciting. And this latest feature, like you said, taking a picture, being able to pick the word out of there and have a transpose transpile it into text in the app is genius, pure genius. And, and I do want to

Claudio Del Valle  
say you noticing over time, these new features as they came, you'll notice that there is that's the difference between a mainstream commercial app where on every update, you would get a modal with what's new section. That was that sort of in the back burner for me, mainly because word fi was and still is a tool that is very personal to me because it's something that came about a daily practice that I held. And so all of my It was a very self centered approach. So I prioritize features that would make my experience and the experience of the users would like to better features like that once new modal They are they do have their place. And they have their their value, Sherpa. To me it was more about just making the app as best as it could be.

Greg Marine  
And that's the thing of getting an app out as quickly as possible, using the bare minimum features that you need today is a great idea to get an app out there. And then you can get user feedback start to grow it that could be out there for a year or two before you start needing the have the need for the here's what's new, modal that pops up. So kudos to you for having having done that. Because again, it started out as something that you felt was a good tool for you. And now you've got how many users do you think you have today?

Claudio Del Valle  
on record, I have 100 or so

lurkers, people who like to view the definitions, and around 15 or 20,

intermittent posters.

Greg Marine  
And so now you're going to have 15 to 20, intermittent posters, we're going to start requesting features. And then as people start to talk about this app, you know, those numbers will start growing. And this could possibly be, you know, a bigger app. Now that said, I say that, but where do you see it going? Do you see it growing like that? I'm just speaking? I don't know, out of that a turn, probably. But what do you think?

Claudio Del Valle  
Well, it's great to see people actually requesting features. That means that they like the app, and they would like to see a pro. I have a running list. And it's getting to be quite large, about now. So I'm going to have to do some triaging to figure out what's going to be in the next release. The one feature that I was trying to get before I released version two, which I believe now on two dot three or two dot two. But before I released version two, the first major feature from after first was a feature similar to Twitter's embed tweet feature, which allows you to take the Twitter UI of a tweet and embed it in a blog post or a web page, for example. Okay, this actually came about a writer who I contacted, I showed him the app, he liked it. And he said that he wanted to use on his website. And just that one feature was thing that he really wanted to use. And I spent a lot of time, but after a week or so of fiddling with it, I couldn't get anything to work. So I scrapped that and still in the back burner.

But for now, the main goal

I think for for the app is like I said to be the perfect reading companion. So anything that makes anything that enhances the reading experience, which is my number one goal is to make the looking for definitions and posting them as easy as possible. But after that, I mean, there's a whole door open to new possibilities. I mean, one thing that I envisioned for the future is to have a sort of a micro service running, constantly looking for words that users have posted. And then trying to try to either scrape or glean from whatever other sources I can examples of that word, so that they see it. And familiarity, and repetition helps them actually learn the word. And not to mention that it could also make for a new feed of it could add to the to the current feed of words in the app itself. Oh, yeah. Like then. And then other than that, there's a whole aspect of writing FF inquiries about how to make this a writing tool. Which some of the, of the of the first suggestions were an area for synonyms make it sort of like a thesaurus? Okay. The one that was requested and most recently was sort of like a challenge or a prompt for people to submit examples of the work. So let's say if I submitted a word and I wanted people to submit examples to it, make it a different car to beat that users could click and submit their examples of y'all could see them. Okay. Those are the main two goals, make it the best reading companion, and maybe in the future, make it also a writing tool.

Greg Marine  
Yeah, writing companion would be great for someone like me, now that I'm blogging weekly, and writing, I've actually been a part of a book project, looking at 2021 as more books to write some of myself. I'm looking for something like this. So that was would be fantastic not not challenging you to get it ready by 2021. But, but certainly I like the idea. I like what I'm hearing about it becoming a writing tool next to a reading companion.

Claudio Del Valle  
I mean, all these requests or features of noting them down on my, my journal, and when the time presents itself, I'm gonna buckle down. And really good, good to work on that.

Greg Marine  
Now, what sort of technology is behind all this? as a, as a fellow developer and any developers who are listening to this? We were definitely interested. What's the technology behind word feed?

Claudio Del Valle  
Well, we're feed started out is a ionic Angular project, I originally envisioned to make it just a pw a, I'm a big fan of everything pw a think

Greg Marine  
it's pw a that's a progressive web app. For those who don't know what that is?

Claudio Del Valle  
Correct? Correct. Angular has

been making pw ways. There's a lot of advantages to them.

Number one being you get to reach as many

users as you can, because it's access access to the browser, you don't have to compete with other apps in an app store. But then, as I started noticing that more and more of my users were accessing it on iOS, I eventually caved in and decided to add capacitor in mix, which is ionics native bridge for making a web application into a native application in order so that I can add features such as notifications. And I figured, well, one other one, I needed to find ways. But yeah, I made it available as an app on the App Store. And for the Android site, I decided to just keep it as a pw a because I noticed that all of the API's that I was already targeting work just fine on Android on. I didn't have to make any changes there,

Greg Marine  
including the notifications, those work just right out of the box natively on Android, even for a progressive web app. It doesn't have to be an app in a store to get it to work. It just works.

Claudio Del Valle  
All right. And also, I'm using Firebase for the back end.

Greg Marine  
Oh, Firebase for the back end. That's a that's where you store all the basically? Is it using firestore? Like the document or using the Firebase database?

Claudio Del Valle  
Using firestore? I don't think I've actually used the real time database before.

Yeah, yeah. firestore for the database by Firebase functions, or my back end, so to speak. And, you know, they have authentication through Firebase as well, analytics, all that good stuff.

Greg Marine  
And I've since gone from I started using it from the Android version as a pw a. And I've transitioned to iOS and Macintosh for Mac OS for all of my web development. And so when I made that transition, of course, I had to get the iOS app. And it works quite well. I get the notifications when someone likes my my posts. And any comments, you'd commented on one the other day, I actually posted a logo file because I was, I was actually trying to share this with my brother to get him to, you know, to know about it before this before this recording. And so I posted that word, so I could share it with him. And then you commented on it. But some of the other words in here, you posted back of the envelope, which is done quickly, to provide a rest estimate not exactly and permissible. That's not an uncommon word. nefarious is a word that I posted today, because it wasn't used in a conversation. And I hadn't seen that word or heard it in I don't know, decades. But of course, it means frequently, Frank, flat plate. I can't even speak too much about flagrantly wicked or Impalas say I need to use this to pronounce as well

Claudio Del Valle  
for ideation feature there. Exactly.

Now, listen, as you're listing off on a chronological order, no, that is one. I wouldn't call a limitation. But a constraint is that right now the feed is just going in chronological order, when the time that the user uploads a word, I'd like to expand that. And another way of browsing and if you'll notice, right next to the search bar, that is a button that you can press. Yep. This was, yeah, this was originally and I think it still works. But it's switches from chronological to trending. And the trending feed uses a very simple approach. It just takes a look The common count the like count, and it sorts it by those two attributes. Okay? In the future, I'd like to extend that and add new ways of actually, I guess what's what's the right word for curate a feed for the for the different users. That's, of course, once more users actually began began posting, I'll have more of more data to work with.

Greg Marine  
Sure you use the word that's not commonly spoken and day to day conversation, curate. So I'm going to go ahead and add that to the feed. While we're doing this recording. There are several definitions here. So I want to try to look at the definition that most is most appropriate for your use of curate, let's see.

Claudio Del Valle  
Now, while you do that, I do gotta say, making an app that revolves around definitions and vocabulary, that can be a double edged sword. Because there's a fallacy there that you think that by learning more words by expanding your vocabulary that would make you a better writer or, or, or Raider. But I can't like I, I noticed that a lot of times I find myself trying to shoehorn a lot of words into sentences. Words, were an easier word or a more common word will do the trick. And I think if if you're someone who is aiming to be more personable, or trying to reduce the friction of a conversation, that's something that you shouldn't do, you should always go for the more common when you're writing, I mean, you can knock yourself out and go as crazy as you want with the vocabulary.

Greg Marine  
Yeah, no, no definition, did you end up choosing the act of curator of I did, I was listening to you intently. And I just kind of picked the verb version of it, but and then I forgot to actually make a comment as to why I was adding. So. So again, that's that's one of those features that I accidentally ignored, that you can actually use it in a sentence, give examples,

Claudio Del Valle  
you shouldn't say that I never want to make my users

feel like they're at blame for not trying a feature

designer. Yeah,

let me that's what that's what design

Greg Marine  
is for, you should make a product as easy and as mindless as possible. And if users have to wonder, like, what's this that I'm seeing on the screen, and that's a lack into design, which I named to improve over? You, you make an excellent point there. And I appreciate that. One of the things that I think is common in at least common in my past of the 24 years I've been doing this is that a lot of developers think that every problem an app has is a user error. And I feel the opposite. I feel like it's my fault for not designing it. Right. Or, or didn't, I didn't ask enough questions during discovery. And I think you made a good point there that, you know, a design like this, it's really up to the designer to provide the ability to, for user not to have to think about it.

Claudio Del Valle  
But we need the user feedback. I mean, I designed the the app, and I it fits my needs. But what I really want is user feedback. Yeah. So we talked earlier about the more secondary features such as the What's New, modal, but I think that in the near future, I might have to prioritize a feedback feature, and make it as easy and evident for users to be able to reach me by submitting a either a feature request or a bug report. Right there wending experienced, whatever caused them to, to have this urge. Okay, there's a couple of tools out there that do this sort of thing. One of one of them that we recommend a lot of open forge is instabug, which actually has a feature which allows a user by shaking the device to prompt a model to come up, which will allow them to submit a bug report or a feature request. And it will also attach all the system information that it can so that you can debug it. But I think that's actually gonna make me impair the app much faster. Because as soon as I can gather more user feedback and start seeing what users want to see and the difficulties they face, it will make for a better product eventually.

Greg Marine  
Yeah, I could not agree more. And I think as you add something like that another viable piece of the puzzle is getting more users. So as you work with user feedback and get more users are you looking to expand And open up to other developers to contribute to the project so that not all of this is on your plate. So some of these features that may not be, you know, the focus of how you use it, it may be the focus of that one other developer might use the app. So have you considered that?

Claudio Del Valle  
Well, the first

time I considered it was actually when you asked about it, but before that, not really, I mean, I never saw a word feed as some of the more popular open source projects that are out there. Just because I don't necessarily think it much of a technological feat and more accomplishment, I don't think is necessarily a hard hat to make. So I'm not I'm not against it. The only thing precluding me from actually opening up opening it up to more support from other developers is that I haven't gotten around to removing my environment keys from the repository.

Greg Marine  
Yes, yes, you definitely need to do that first.

Claudio Del Valle  
Yeah, but once I get around to it, I mean, I'll open it up and let anyone contribute an open pull request as they want. And another thing with open source software, I always saw that as belonging to as a realm of the upper echelons of developers. I always I fought we follow a lot of great people on Twitter. And we always see Oh, I did so and so many contributions over the weekend to this open source project. I always thought, wow, they must there must be in a different league. You know, which one was like I was thinking like his board feet even even worthy of being an open source project.

Greg Marine  
Yeah, I hear you there. And then sometimes what they're doing is they're, they're contributing a typo fix? Yeah. So it's like it'd be doing 20 of those on a weekend and, and touting about that on Twitter, I would not want to do that. I don't mind proofreading things. But I wouldn't want to brag about something like that. But yeah, that's the thing. You know, you have all these projects out there. And yeah, I mean, my little project doesn't mean anything in the in the world. I don't know. But it makes it makes me nervous. So hopefully, hopefully, you're not nervous, though. I mean,

Claudio Del Valle  
no, it's just that

I wouldn't I, I have to describe myself as a developer, because it's what I do. But developing for me programming is a tool is a means to an end. So I admire people who get really, really into computer science. And I agree with algorithms are great at implementing such things. But I just sort of view it as, as long as I have, as long as I'm aware of what tools are available, are available, and I can get around documentation to using it, then that's all I really need. Because I just want to know what's available so that when the problem arises, and I know the right tool for that problem, I can really go in depth, or reach out to people who are more knowledgeable, and go to work on a solution. Because that's actually one of the reasons why I'm struggling a bit now that we're using react in open Forge, I finally went ahead and started using it. But just all these different approaches. React is not as enforcing as Angular is as a framework. So I see some things that one of my co worker does, he does things one way, then my other co worker will do it then other way, I'll do it another way. So it doesn't feel as safe as I felt when I went when I'm doing Angular development.

Greg Marine  
Now with Angular, it's very opinionated you do it this way. There's an Angular way, I think is one of the ways that's been said and react is the opposite of that. It's whatever the project needs or whatever. But the problem with that is, is you know, like, you have three different ways of doing it. Yeah, I'm starting to react this year, myself.

Claudio Del Valle  
Yeah, go ahead. I'm actually I'm actually gonna I'm gonna have to start looking into view. Because yes, Mandy, yeah. The ionic community has been going crazy over this view of beta release.

Greg Marine  
Yes. That's, that's the big news this week.

Claudio Del Valle  
Yeah, we're gonna be our neck. That's gonna be the next topic for the meetup.

We're going to be looking at view with ionic.

Greg Marine  
I look forward to that meetup. Because it's, I took a look at it at the meetup the other day, it's with ionic, and looks very view itself looks very much like a Angular and react had a baby. It's, there's a lot of similarities between the two. But the best of one of each came into this one.

Claudio Del Valle  
Yeah, but the thing, the thing that helped me learn Angular was that I could look at one project and I couldn't do another one and see the similarities, right. I sort of started looking at what fits where and what is free for you to mess around with sure what reactive view projects I mean, you can look at another one and not give you any sense as to how view itself actually works.

Greg Marine  
Yep. Yep.

Claudio Del Valle  
Wasn't, it'll be fun. I think we're gonna look into doing a Google Maps demo project.

Greg Marine  
Yeah, I did an Angular. Yeah, it was an Angular project with Google Maps. And just as an example tutorial I went through, it's really fun. And I think this weekend, I'm going to be playing around with you. I've got a, one of the projects I've been working on for, for one of my clients is a Watson assistant chatbot. It was written in react, did that one in react. And so it was, it was to handle some in the influx of calls to the call center, instead of going to the call center, they wanted their users to go to a website. And they deal with the COVID situation. And so there was a huge influx of customers calling in. And so now they're using this chat API. And so I thought, I'll take that knowledge of Watson assistant and kind of play around with view, and see if I can build a chat bot and view using ionic view.

Claudio Del Valle  
You mentioned Watson, I was actually looking at Watson for its natural language processing features, which there is not much right now from word feet to glean with a natural language processor. But as I eventually encourage people to comment more and post more examples, I think there's some information there that could eventually help me build another feature, or build some valuable data.

Greg Marine  
Yeah, that's an excellent idea. I didn't even think about that myself. But yeah, that sounds like and Watson can handle that. It does a pretty good job. And so

Claudio Del Valle  
besides, sorry to interrupt, but besides like, the angular framework world, what else do you like to look into when it comes to development?

Greg Marine  
I'd say anything that's new, when Firebase first came out, I was excited about it, because I played around with some no SQL databases. But you know, Firebase before was even bought by Google was just a fascinating database, a data store that was document based. And so I thought, well, there aren't there's, there's still a strong use or need for SQL, structured, rational, relational data models to be done with SQL. But I really think that a lot of the stuff that I've been working on over my career of 20, nearly 25 years now has all been that could have been handled by documents and documents storage. And so that's a fascination for me. design systems are the new thing. Now, since Angular, since ionic went to move to the move with stencil, they've done a lot with design systems, I want to learn more about that, I would love to come up with, you know, similar products, not not to sell, but just to, just to play around with those, learn it, see how it works.

Claudio Del Valle  
That's, that's a rather ambiguous term at design system. But I think you I think, if you wanted to simplify it, I would be like, like, if I'm building an app, I don't want to think about how much padding I'm using on the certain type of elements, the font, the type, so I'm assuming it's like, having set values for these different attributes. Right?

Greg Marine  
Right. That's part of it. Another part is to say, okay, we want all of the buttons in this particular design system to do to look a certain way, but also to do a certain thing. So like, within a corporation, and enterprise, infrastructure, they might want all of their apps to behave and look similarly, I'll use, say, at Disney World, for example, since you're in a Disney shirt, they may have a need to say, okay, that client fit or guest facing applications and cast member facing applications. But all of the buttons, all of the, you know, look and feel has to be the same. So yeah, there's the padding and all that. But then when they click that button, they might need to do some internal analytics and stuff like that. So they might want to wire all that together, it goes into a central database. Instead of having each team have to develop that I have a design system where they can just take from a component library and say, hey, I want to use a button here. And it does does whatever the upper management business logic needs to be. And they the developers won't have to worry about that. That's one of the things that I see that I'm not speaking from experience. That's what I envisioned could be possible with with a design system, especially for using something like stenzel to build it

Claudio Del Valle  
and there's an asset

Very soon, hopefully this weekend, I get to play around with socket IO, I was looking into, into making a sort of like an Uber clone, just any app that tracks location of a vehicle and broadcast it to a client, isn't it. And I mean, the options as far as your backend implementation goes are endless. I mean, you can have, you can have just like one instance running, which will support X amount of sockets. But then if you want to make that scalable, you can introduce something like Redis. And use a pub sub system. To that end, I just saw that all that is really fascinating. And it's all because I have an itch just to get around to get around the how an ionic web app and then a Firebase back end, you know, those two pieces, they work really well for what they do. But I want to I want to experience and start putting more stuff in this oil.

Greg Marine  
Absolutely, like

Claudio Del Valle  
microservices and whatnot, all these things that you can do.

Greg Marine  
Yeah, you bring up a socket, io reminded me of a time before all that existed. But I was working in an environment enterprise environment where we weren't allowed to, at my level to use developer tools as they are today. Not Visual Studio or nothing. And but I was allowed to use Office applications. And so back then VBA, Visual Basic for Applications was allowed. And so as long as I kept it and say, I think it was a Microsoft Access database is what it was. And I had to implement a TCP IP stack within VBA. It had to answer connection calls from the client versus client side. And they had to answer like, 200 or so per second. And but there was a limitation on the OS at the time, only allow, I think it was 20 connections at a time. So I'd have to queue those as they were coming in, answer them and freed up for the next one. And I had to do all that with VBA. So So when sacado came out, I was like, oh, that would have been great to have had

Claudio Del Valle  
I now. Luckily, I haven't run into into that yet. I think the closest of a situation that's happened to me like that is when graph qL really became mainstream. Just because I started noticing, especially when really big responses, just delay and see starting to walk. And that interests me a lot, because I'm very much invested into the person, the people aspect of making apps, the psychology behind it, okay, and man, people hate any waiting, any waiting time at boot up getting a response back. If they're not constantly informed, they drop, they drop your app fast. Yes, and they stop using it, they'll go look for something else. There's always something better free that they can use. So all of that anything that'll improve performance is of great interest to me.

Greg Marine  
No, speaking of that, what do you think about gamification? game? While you wait, here's something you could

Claudio Del Valle  
gamification, Oh, you mean it that way? You meant like, a gamification while you're Wait, well, Google has a that URL game you can play when website goes down, right? Yep.

Greg Marine  
little dinosaur game. Yeah, that's a good example of it.

Claudio Del Valle  
That'd be good. A little easter egg to implement. Hopefully, all the loading times that word feed are really really fast. So people don't have to resort to that. Yeah. But I do see, I'm always interested in gamification, because I think users respond really well to it.

Greg Marine  
Yeah, I need to come up with the URL for the article, but a friend of mine, he moved to Norway. And while he worked there, or he's still there, one of the things he wrote about was gamification. Because one of the things that he was doing while he was there. I don't think this is exactly what it is. But this is kind of what he was describing. He was talking about basically, like having something happen while you're waiting. And it could be something as simple as a move your your cursor around and the little icon would start to follow you and make little jokes or not and stuff like that, while you waited. It was it wasn't even something where you'd have to play anything. It was just interaction that was taking place while you were waiting.

Claudio Del Valle  
See, I wish it was easier to

do things like that. With ionic, I mean, the closest thing I can imagine is a interactive loading screen where you would use some some sort of Web GL technology where you can just track the pointer and then do whatever animation you want it to do with that. I think I mean, I think it's fairly possible. I don't see why not. I mean, we've integrated phaser, which is another game development framework with ionic. It worked really, really well. To our surprise, we know of a couple other attempts, documented on sites like Reddit and such for people expressed a lot of different Getting it to run well, but we managed to make it work for the project we're releasing shortly this year. But yeah, and gamification, one thing that I wanted to do with wordfeud, actually was when I was working with local notifications at the last meetup, I thought of scheduling sort of example prompts for users who either their words or words that their friends have submitted, have a local notification pop up that says, hey, think of an example for this word. And I submit again, I like it. I'm still thinking about it, just because I personally, as a user, I'm not a big, big fan of notifications, I think. They make you use your phone more, which is something I'm trying not to do as much, right? I have a, I have a strict policy, both at home at the office, where I have to leave the phone somewhere else physically, right, just to take away that, that that temptation, you have to hack your surroundings. And also for going to sleep. I tried to stop using it an hour before I intend to go to sleep. And that helps because you don't have the blue light

Greg Marine  
stuff. Yeah, absolutely. And I know some that who aren't on call, when when they're on on call, they'll leave it in the living room when they go to bed. They'll have the wine downtime in the bedroom, but they'll leave the phone out in the living room even and not even touch it till the next morning.

Claudio Del Valle  
It's actually a great effect. You know, do you know if i Raspberry Pi?

Yes. So one Raspberry Pi project that I actually wanted to do was like, just like an alarm, like a DEF CON three, alarm that so that when I leave my phone in my in the living room, someone could either through an app, or it could be like they text a number on Twilio or whatnot. It triggers that alarm in it. It's a physical light and sound that goes off in my room and says, Hey, someone's really trying to teach the reach you. It's an emergency. Otherwise, I'm not. I'm not gonna hear it if it's out here.

Greg Marine  
Oh, that's a good point. That's a great idea. Actually.

Claudio Del Valle  
It's happened before. One time I went to bed early. And my girlfriend who works at a restaurant, she came back really late. And I was already asleep. And she didn't have her keys. And then I'm having to sleep over one of her friends. Because she seems like he's not wake up. And I was talking with him. Oh, yeah. So and as I said, it's, it's good to have hobbies outside of it. I mean, it makes me not lose. I don't know, I guess the passion behind it. Because the real passion is, like I said before, it's the people as the users wind up using it. It's good to also have an interest in general with All Things programming and maintain my Tinker spirit.

Greg Marine  
Yes, I hear you there. That's good to have hobbies, it's good to get away from the computer, sometimes. But it's also nice to take some of the passions you have for your you know your day to day life and apply them through software to so I'm very excited about word feed dot app and everything I want to put a link to the to the app and the App Store. link in the show notes for this particular show. So that everyone listening can see what it's all about, sign up and contribute to the word feed.

Claudio Del Valle  
Yes, one one more thing, because we were talking about technology behind word feed. And one component that really helped. And the early user adoption of the app was the Install button. Which if you don't have the app installed, it'll display on iOS and Android. And what it does is it displays almost like an App Store listing within the app, where you have a description, you have screenshots, and you have whatever whatever other content you want to add. And it also has a install app button, which on Android, it'll just install as a pw a but an iOS, it'll redirect to the App Store. So I think that piece of technology, which by the way was brought to me by the pw a builder team, which you might

be familiar with Justin Wilson on Twitter. Yes, I

Greg Marine  
am. I follow him.

Claudio Del Valle  
So for anyone who's doing a pw a that's a number one recommendation.

Greg Marine  
Yeah. And it's almost a requirement these days to give that option to people. Mm hmm. Yep. All right. Well, thank you, Claudio. Appreciate your time today. And I'm looking forward to seeing further enhancements to word feet and I and I appreciate the contribution you have to the community. You filled a gap. And I really appreciate that.

Claudio Del Valle  
Likewise, please keep doing this. I want to see where this podcast goes. And maybe in the future was version three of word penis. Maybe we'll be back again.

Greg Marine  
Absolutely, and I look forward to having you again.