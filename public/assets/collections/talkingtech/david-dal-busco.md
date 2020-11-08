---
layout: post
title: Talking with David Dal Busco
date: 2020-11-09
author: Greg Marine
tags: 
- technology
- podcast 
- deck deck go
- talking tech
close_button: /talkingtech
published: true
---

This week I had the pleasure of talking with David Dal Busco. David is a freelance developer currently residing in Zurich, Switzerland. He leads meetups, is a blog writer, and is one of the creators of Deck Deck Go.

<!--more-->

<iframe width="100%" height="180" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/b364e6a0"></iframe>

[David Dal Busco](https://twitter.com/daviddalbusco)

[Deck Deck Go](https://deckdeckgo.com)

[Ionic Zurich Meetup](https://www.meetup.com/Ionic-Zurich/)

[Zurich Indie Hackers](https://www.meetup.com/Zurich-Indie-Hackers/)

Greg Marine  
This week I had the pleasure of talking with David Dal Busco. David is a freelance developer currently residing in Zurich, Switzerland. He leads meetups as a blog writer, and as one of the creators of deck deck, go, welcome to this week's episode of talking tech.

If you wouldn't mind, go ahead and start off by telling me telling the listeners a little bit about yourself and what you do.

David Dal Busco  
Oh, so yeah, first of all, thanks for having me, Greg.

Greg Marine  
Thank you for being on.

David Dal Busco  
Yeah, I'm really looking forward to the chat. It's always a pleasure to speak with you. And yeah, so I'm David. I come from the Swiss French part of the country. So that the small French accident and really small, and I live in Zurich, and I'm a freelance software developer.

Greg Marine  
Excellent. Sh, today, one of the reasons I asked you to be on the show today was to talk a little bit about a project that you started. It looks like it's been around for just over a year now. But Deck Deck Go. Tell us a little bit about Deck Deck Go, and what inspired you to begin that project?

David Dal Busco  
Yes, thank you. So actually, I think it's around since two years, two years. The editor is live since one year. Okay. So basically, two years ago, I think I had to make a presentation about web components and ionic v4, something like that. Okay. And when I was developing my, my, my talk, I thought, yeah, that's a bit dumb. I'm talking about web component, and I don't use web component to to make the presentation. So I thought, Yeah, I just gonna build that little library quickly. Sure. That's for one forward two years later rights and nidito. And, and a bigger, big project. So I mean, like, after a year, so I was kind of a king around that that's more library. One evening, I had dinner with my friend Nicola matcha, which also collaborated to dictate book. Okay, we are having pasta and a glass of wine. And then we said, maybe, you know, maybe we can build an editor around it. Okay. Okay. Yeah, we're gonna do it. And I probably would have not been jito alone. Because the three a big, big project on earth for absolute, because my friend was doing a quiz me was like, a fancy things to do for a couple of months. So

Greg Marine  
yeah, very nice. And so you basically got inspired to do it because you were doing a talk on web components with ionic. So is that the technology that you built a decade ago with? Was it ionic? Yeah.

David Dal Busco  
I would say to them, did we Stenson okay.

Okay, why are you using ionic for like, for the UI component for the design system, like for the, the batanes, or the router and so on,

Unknown Speaker  
that

David Dal Busco  
everything else is built with stencil

Unknown Speaker  
over.

David Dal Busco  
We have also that kind of inspiration to try to be a bit as much agnostic as we can. So when we need a component, even though sometimes we find really great component for the challenge or something like that, we try to be deep by ourself. Okay. Like, I don't know, we have a component which is made to drag, resize and rotate elements. And, yeah, it's like, a lot of mathematics just to make everything stick in the right place and stuff.

Greg Marine  
Sure. Okay.

David Dal Busco  
Yeah. We just spent a couple of nights on it, because it was fun to do you know,

Greg Marine  
yeah. Okay. Yeah, that's what some of the best products that are in existence today are built by people because they're having fun doing it.

David Dal Busco  
Yeah, I hope so. I hope so.

Greg Marine  
And then yeah, that's, that's great. And I, you're one of the few projects that I know other than ionic itself, that's using stencil, is that fairly easy to work with

David Dal Busco  
I would say yes.

I saw when I when when we speak from front end development. I Yama and I was mostly a non Gouda developer. Okay.

So when I jump into stencil,

he was kind of easy, but I have to be familiar with a JSX, which is the same syntax as vs. React. Right. Okay. So I would say, yeah, it's not like an HTML page, it takes a bit of, of time. But once you, you get that all the rest is really easy, I think. Because it is, oh, sorry. Yeah, sorry. It's just like stencil is a good mix between ankura and react, you got JSX. So that functional way of building component. And those aside, you got all the decoration properties, you know, if you want to add a listener on it, and so, yeah, I really like it.

Greg Marine  
Yeah. So that's, as one of the fascinating things that's come from the ionic folks is that they've built a tool to be able to build web components. And it's something that works equally well, in most of the modern browsers today. Have you found any difficulty working with the various browsers such as Chrome, Firefox? edge? Has there been any things that you had to tweak to make it work on all those? Or has everything just worked?

David Dal Busco  
So not really, actually, when it goes to the Web Components themself, it just works, and also, stencil, you can plug a polyfill poly file and still compatible with all the browser. So not that there isn't much problem regarding the session, then when when you book like competitive programming more because that browser didn't implemented that API or as an nosorh implementation of that API, and so on?

Greg Marine  
Sure, okay. Yeah, that's one of the things that I find to be really neat about stencil. I've not used it myself. But everything I've read is that when you're using stencil, and creating those bindings, it just, it just works. And I think that's one of the powerful tools to allow developers like us to do what we do best. So we don't have to worry about compatibility between the browsers.

David Dal Busco  
Yeah. And I've kind of really confirmed that it works also everywhere, because, like I said, I've made a couple of components, and I use them quite everywhere. Like in my website, which is built with Gatsby, I'm using stencil component. Okay, I've got a couple of Angular apps where I'm using stencil component. Okay. It's really, I think it's really the right tools to build components, because then you can use them everywhere. And you don't have to think about art, that's that technology to do that, and so on.

Greg Marine  
So I need to spend some more time working with stencil. It sounds like because I use I don't I've kind of drifted away from Angular, but I still use react. And I'm delving in view now as well, at work. So it's, it's kind of nice, that if I just build a component and stencil I can use it with whatever framework the clients wanting to use.

David Dal Busco  
Yeah, I mean, if you know, react, I don't know if you because I never, like just literally spent like one hour interview, but speaking, you should know react, then it's gonna be easy to jump into. Even more easy, I think. Because then you got like, you know, you're gonna find you, you function with a random Ito then then then it's the same syntax. So it Yeah, it's gonna be it's gonna be nice. Very nice. After so for me, it was I did a new react. So because I spent a lot of time in stencil, then I think it was for me easier to jump into react, because I already knew JSX and JSX. You know, okay. So, it makes things interesting to jump from one technology do I do there and so on?

Greg Marine  
Yeah. And it's nice that those what skills you already had allowed you to transition a little easier between those?

David Dal Busco  
Yeah, exactly.

Greg Marine  
Okay. Now, one of the things we had talked about being on the show a little over a month ago, but then in talking with you that we decided to wait until now and the reason being hack tober fest. You had a big month during October in a hashtag October fest. So tell me a little look into it before we got on to this recording. It looks like you had closed 34 different items on your Oktoberfest you have a few that are still remaining waiting for prs, but tell me what Was that like, and what kind of new features have you added to deck that go? Because of the October hack? tober fest?

David Dal Busco  
Thanks for asking. Yeah, I mean, he was really, I was really surprised that we had so much interest and have really to sync all the best songs and contribute those who took the time to help. Because I really felt like it, push it the the project forward, they provided really create fear trees or bird Pixies, and that was really a nice app. And so we have added, we have added more styling options. So now you can in our editor, mostly you can add book shadows border reduce, you can vary a bit more the text and so on, then the results are new functions where you can plug or generate random waves and plug them in the background of your slides. Okay, you know, it's quite common now, when you are the landing page to have this waves between section. So you can do the same with with, with slides. Very nice. And that works really well because we are currently working on something we call puppy riffs. And so it's like, instead of swiping your slide, like vertically or horizontally, we basically publish your presentation as a landing page. Okay. So it's kind of nice. So it works quite, you know, you can add the ways in a presentation, which is actually a landing page. That's that's kind of, yeah, it's fun to see. Then there was also a new components because the holy Tito is based on templates. So for example, you have the templates where the teacher is in the middle, or the teacher is on the left side, or you got the templates for the QR code or charts or you can also have ports to your charts where you can interact with your audience. You can also showcase code and so on and someone provided a new component to generate automatically worlds of clouds.

Greg Marine  
Okay, yeah. So, remember that feature came about because of a tweet that Mike. Michael Callahan tweeted? Yeah, one of our mutual friends. Yeah, he had made a comment about it. And that that born that gave birth to this idea for your, your words of clouds, or cloud?

David Dal Busco  
is is that the origin of that? That it's a nice way to present when you have multiple eyes? These I mean, yeah. And, yeah, we have also a couple of fixes. And no, we also because everything is built with our editor is a PVR. And when you publish your slides, the slides are pre shared as standalone progressive web apps to Yeah, okay. No, Akash provided a PR where, you know, you got the reload bar when there is a new version. So you can click and it automatically updates to the new version.

Greg Marine  
Oh, very nice. Yeah, I think one of the, that's a powerful feature to be able to create your presentation as a progressive web app, so that you can share it with anyone on social media, or even when you're doing it live, but you're able to share those slides with anyone. And all it takes is a web browser to power that they don't have to download any special apps to look at the presentation that is generated by deck deck. Oh,

David Dal Busco  
yeah. So I mean, of course, I'm agree with you, I know.

The single season. When I get the presentation, somehow, I don't want to download something and wait for the right. I want the presentation. So that's why also in our slides, everything is lazy loaded. So we use the intersection of several and then all the images which are coming and not loaded when you start the presentation. So

Greg Marine  
okay, so it can start right up. And yeah, wait for everything to download. Yep.

David Dal Busco  
Which was a bit tricky to do, because there is also an offline mode in technical so you can alter like on a bit like on Netflix, you can go in your in your slide and say I want that presentation offline. So we kind of have to trigger all the images to be downloaded before going in the floorplan Yeah, that was also fun to do.

Yeah.

I probably forgot other factories right now.

Greg Marine  
Well, there was a lot added during the last month. I was going through and seeing the list and what you had already mentioned one of the things that I was going to ask about the waves. I think that's a brilliant little one. addition to, to the to the slides, like you said, you can turn your slideshow into a landing page. And I mean, so that makes the presentation software in Dec that go just that much more amazing to me that you can not just presentations, you can build a product landing page and talk about your new product just by using basically desktop software.

David Dal Busco  
Yeah, exactly. Yeah.

Greg Marine  
So one of the one of the cool features I was playing with it today before this, this recording is the remote control. And basically, you have the ability to after you've you're ready with the presentation with a QR code shows up on your screen with your phone, you can just hit a little the QR code and pull up remote control so you can control your presentation from your smartphone or a tablet. Tell me a little bit about that and how that came about.

David Dal Busco  
Oh, I'm not sure. I think someone suggested the idea like, but before they did exist, that was one of the first things I did. Because there was an interested to be teased because I was interested to use web RTC never use that technology before. Okay, so that was again, something more technology driven at the begin. And then I noticed that that actually the UX future was really interesting. Yeah. So we made several iteration on that remote control to because, for example, know, when you sync your presentation with the remote, like the aspect ratio in preserve it. And also, since a couple of months, the content is also sync with the remote control.

Greg Marine  
Yes, I noticed that as well.

David Dal Busco  
And I think it kind of the best solution is not even having like a remote control on your mobile phone. But maybe like having a tablet, you know big because probably you're gonna be behind the desk, but can't happen for your presentation. And when you have no screen in front of you just have like a tablet in history, see all your notes, both the actions and all your slides. And moreover, you can also draw on the remote control and it cannot be then gonna be drawn on your, on your presentation on the big screen, you know,

Greg Marine  
okay, I did not realize that, that's very cool.

David Dal Busco  
So you can have our rows and so on. So that was also interesting too.

And we try to have this

it's maybe more more fun again. But like we have the remote control where you, you see, you see a QR code and then you scan it and then you multicultural upon. But likewise, you can add ports in your in your presentation. And on the same slide, you're going to have a chart, which summaries the votes of your audience. And next week, you've got a you've got a QR code. So your audience can scan the QR code. It starts the dig up on their phone, it's a TDR. So start straight away. And then they can vote for what they want.

Greg Marine  
Yeah, I noticed that you can have a poll right there inside your presentation. Like you said, a QR code comes up and they can scan it with your phone, sitting in the audience and can start voting. So during your presentation, it's all calculated on the fly. And instantly, I noticed that I was playing around with it. Soon as I click my vote. The The results showed up on the on the screen immediately.

David Dal Busco  
Yeah.

And yeah, the only thing I see is that the next thing I have to build in terms of either direction is, as I told you in the remote control, you can draw over you slide. And I think that would maybe be nice if you can do the same in the ditto. Because notice there are a lot of lot of presentation are made online, right? Yeah, he was. Yeah. This there is. So there is a chance that you're going to present it on your laptop. So then the presentation is going to be displayed on your laptop and you're going to stream it so it would be nice that you can draw on. So that's probably one of the next things I gonna I'm gonna drop.

Greg Marine  
Very cool. One of the things that I noted is sort of I don't know if I want to call it marketing or not. But one of the phrases that you you've repeat is that you can build simple presentations. And I immediately had a question mark over the words simple. It is simple to build them. But there's nothing simple about the presentation in my opinion. You have so many advanced features, like being able to embed polls. like we mentioned, graphics, you also have the ability to embed an entire website, and like as a web app, inside the presentation, and YouTube videos, which can be controlled from the remote control. So you have all these advanced features. You know, this, this feels like a very advanced tool, almost better than something like a PowerPoint.

David Dal Busco  
Sir teresting, thank you.

Maybe I think in terms of simple because we've got this approach that you have templates, and some extension, you cannot make everything you want. You can tweak a lot of things that you cannot make everything where in more standard tools like PowerPoint, and so on, you can destroy everything which you want. So that's why I think it's simple because it's kind of driven what you can do. Okay. But, yeah, that's a that's an interesting thought.

Greg Marine  
Thanks. Yeah. So so. So it is, I see your point is that it's simple in that you have a very finite way of presenting. But of course, I look at it as advanced because of what those finite things are. So many options that I haven't seen in other other software, similar software. So. But kudos to you. I mean, I applaud what you guys are doing. And I think it's absolutely amazing. Something else you do besides deck deco? You had mentioned your freelance web developer, project manager as well, you do project management as well.

David Dal Busco  
Yeah, it's like,

I think I used to work for company when I was doing project management and so on. So now it's kind of the added value. I add, sometimes when I take over project by my own or something like that. Sure. Then I kind of part of Yeah, I my client to a bit schedule his project or to make it aware when it's possible, when there is no change can happen. And Sure.

Greg Marine  
So yeah. And then you also take that on, do you a UX, user experience. And then other types of consulting as well?

David Dal Busco  
Yeah, but the UX expensive, more intense. I bring that developer point of view and the UX and had the chance to collaborate project which started from zero. So where we had to think about what we're going to build, we start up what we can put pretty neat. And then I bring that experience of the interactions from the developer point of view.

Greg Marine  
And you're also a community leader, in that you run a few meetups. That's actually one of the things that allowed us to meet when we conversed on Twitter. But then I joined a few of your meetups, and then you ended up inviting me to speak at one of your meetups. And so tell me a little bit about how you got involved in organizing those and and how those are going.

David Dal Busco  
So I organized the ionic meetup in Zurich, since was three years, I think, three years. I'm not sure anymore. So the big chance I had, I go to a co working space here in Zurich, which is called the impact of Zurich. And they try to, they push their member to organize seems to be together to come together to exchange it.

Greg Marine  
Okay. And

David Dal Busco  
they do that. And we had through that we had the chance to have like a room for free in a space where we can meet once a month. So that was kind of the right match. You know, I was sure beginning to develop a lot of things in ionic, and I thought maybe some other people too, and there is a room for free. So

Greg Marine  
let's do it. There we go.

David Dal Busco  
Yeah, exactly. So we have built that small community. And yeah, it's like it's a small community. Sometimes we have 10 people going to the meetups and stuff, too. But it's kind of idea it's kind of like France or something. Tissue has been a bit more quiet because I have to say, because it's a really small community and we were used to meet the maybe have a drink together and stuff like that. kind of make all the every single bit more slow, but we try to catch up. Sometimes we summon like a run And

a bit in the same

same spirit, beginning of this year with my friend dashana, we started the India meetup. Okay, where we had the chance to have youth became one of you wonderful project. You

Greg Marine  
know, I appreciate that. Because of COVID. I know a lot of the stuff goes online. So you were able to have that one online. And I was able to join you for that. So I appreciate that.

David Dal Busco  
Yeah, that was really interesting. And

that's what so for me, which basically spend all my time more like, in a technical way, it's like that. It's, it's interesting to have that meetup where not, not everyone is a developer, you know, there is also like, designer marketing guys. Oh, yeah. I mean, three, like, people coding things and people using no code. So it's an extra chance to, to have like, all the side. So, yeah,

Greg Marine  
yeah, it's nice to meet people from different backgrounds. And it was one of the other presentations on that particular meetup was sort of a design system. Where they were able to say, okay, they could sell to their clients, here's how you can build a website, and use that same thing for print material. And so basically had, you know, set up templates. And that was pretty powerful. And actually, one of the things that brought me into being available for that was I started building a tool myself, and I come, I had come across one of your blog posts about how to use markdown, because I was looking to use markdown technology in react code. And so that brought me to a blog post that you'd written. So that's something else that you do you also do a lot of writing, how often do you write Do you is a weekly or I've read several of your of your blog posts, but I'm not sure what the cadence is on that.

David Dal Busco  
So I don't have a fixed kidded. It's more one. So like, in October, I really had too much to do, like between the my clients project and October 1, I was kind of intense. Yeah. But otherwise, I try. every couple of weeks. She was a bit special, because when there was the first lockdown in Switzerland, first and on Sadat. And then I say, Okay, I gonna write one blog post every day until the lockdown is finished. So I had to write like something like 32, or something like that blog post in a row.

So that was kind of intense.

Greg Marine  
can imagine. So yeah.

David Dal Busco  
Now the idea was, when when we have when we have good dig, they go, we saw that we're going to use it to learn something. So I was thinking that maybe I can share what I learned from some blog posts. So that's why you often got, I often write a blog post, I build that. Here's why I did it. Yeah. It's kind of kind of the ID. And it's maybe the engineering way or like, practical stuff. And I like to see. No, that's, it looks like this. You can do it like that.

Greg Marine  
Yeah, I think it is really cool to share that knowledge. Because we're all learning constantly, if we're doing it right, I should say, because technology is constantly moving. It's constantly improving. So we have to do the same. And it's great that you're sharing that knowledge through blog posts. And, you know, that's, that's one of the reasons that attracted me to you to begin with, start following you on Twitter was because of that, now, freely sharing your information, because you make money from from working with clients that hire you for your expertise, and you're giving back to the community. And I think that's great. And that's one of the reasons that deck deck go i think is so successful today is you opened it up to being open source kind of shared that and now you have contributors that are making it even better.

David Dal Busco  
Yeah. Thank you. Yes. Like, I don't know, you know what, I'm like a try. I want for my client like 8% hundred percent a week, like, like, it would be like a normal job. Right. But maybe because I'm a freelancer, I got a bit more flexibility in my wall shirts, like it helps also to have a bit more time or more flexibility to write blog posts and stuff like that.

Unknown Speaker  
So

David Dal Busco  
So it's a it's a good way for me to, like you say to to keep learning because yeah, I mean, especially as a freelancer, it's not like, yeah, it's the fascinating part and the art part of development, some of Yeah, so senior thing, because you always learn new stuff. And the other side, you always have to learn. So it's kind of Yeah.

Greg Marine  
Well, I'll tell you what, as a recently, I became a freelancer. And I've been following a lot of other freelancers online. I'm kind of throwing this at you and didn't prepare you for this question. But it just came to my mind what what kind of advice would you give to somebody who's just now starting get into freelancing? Or who is considering doing a freelance opportunity? What kind of advice would you give to such a person?

David Dal Busco  
I don't know. It depends. Like, I tend to think that what's really important is kind of to build the network. If you have to be read, but I got other friends, which are freelancing, freelancer, and they just find geeks online, you know, they go on platform like Upwork. And they gonna, they're gonna find geeks, because they are really specialized, specialized in what they do. Okay.

But, to me, that doesn't work. It's really like,

I heard and I have to build

a network to find you about.

Greg Marine  
Yeah, I think networking is quite important myself. Yeah.

David Dal Busco  
So that would be that would be something because at some point, if you decide to become a freelancer, and you say, okay, tomorrow, I cannot be a freelancer, and you don't have a contract or anything. But what you can do, you should write to all your friend and say, yeah, as of tomorrow, I'm a freelancer. If you hear something, tell me, I'm looking for a client, you know, if you if you if no one knows what you are doing it, then it's gonna be hard to find something.

Greg Marine  
Yeah, as a matter of fact, you mentioning that reminded me when I, when I started this journey this year, I had just lost a job. And within a week had a freelance gig because of my network, because I had had those relationships. And I was able to find work within a week, simply because of that. If I had not had a network, yeah, it could have just dropped off the map and been unemployed for months. But instead, it was just a week. Yeah.

David Dal Busco  
I mean, it doesn't mean that if you don't have a network, it's not gonna work. But somehow, you have to try to find a way to reach more people again. And for the rest of the knowledge, like, not really advice, I think it's like, again, it's not my job to, especially if you like coding, then it's easy. You find things to code, and then you complete them.

Greg Marine  
Now, I've been doing this for nearly 25 years, I've actually been coding since the 80s. So about 34 years or so. One professional 10 years later. How about you? How long have you been doing this?

David Dal Busco  
Oh, yeah, it's been a while. I think in the 90s. I began, okay. I think I finish then generic engineering school around 2000. Something. Okay.

Yeah. Most probably more than 20 years.

Greg Marine  
Yeah. Very nice.

David Dal Busco  
That was the good years now.

Greg Marine  
For me, it was the young years, I feel like

David Dal Busco  
but yeah, then most of my career that was like more Chavo wanted, and it's since a couple couple of here that I transitioned it to be like a web developer.

Greg Marine  
Yeah. Yeah. Did web development the mid mid 90s, but mostly Java, which is what got me into full time development of mins dotnet as well, C sharp and all that. What other? So you've worked with Java and web technologies, any other technology stacks that you you've dealt with?

David Dal Busco  
No, not really. Oh,

yeah. We shall find a little bit more time to try something heads. But currently sleep spray difficult to find more time? Yeah, it's not a problem. And just

Greg Marine  
yeah, just curiosity though.

David Dal Busco  
Yeah, exactly. Yeah. I know wanting to ask, why is it going with your project?

Greg Marine  
It's actually slowed down a little bit because I've considered rebuilding it all in view. My son started looking at view A lot of the gotchas or a lot of the hurdles that I came across working with the React code. They don't exist in view. And it's kind of strange how that works. But it's basically the implementation of ionic, the components are the same. The web components are all the same. But the way that view handles, being able to render the views is so much more advanced than react. And so I'm actually starting to think I could be, I could build better templating in view than I am in the React version. So I've considered actually not scrapping it, I'll probably keep the React going. But I'm trying to decide if I want to rebuild it and view the kind of have more than one option. Now originally, my, my goal was to build it in react and angular and view. But now that I've dealt with views, like, oh, man, I think I might just just go with you. But yeah, I was gonna reach out to you in about a month or so after doing that and seeing if we could talk again, because I, I just think you've seen it, the presentation everything, and I thought it would be kind of cool to share what I found. So that's to come. Let's, yeah,

David Dal Busco  
yeah, anytime. Sure. Yeah.

That sounds interesting. I mean, it's like, and then you also gonna improve your use case? Yeah.

It's like, it can be like a win win situation.

Greg Marine  
Exactly. And it's kinda like, what you were saying with deck that goes are some technologies that I've been wanting to, to learn. And a project like, this allows me to be able to do that a project. Like I said, topical will allow me to, to do that. say, Okay, I have this new feature I want to add, and I want to use this new technology that I've never played with. And since it's my own pet project, I can do it.

David Dal Busco  
Yeah. Why not?

There is always

so something to read the blog post, try it out quickly. Then to apply a technology to a real application, you're always gonna end up on different scales or different problems you might not face when you do a test. So I think it's always a win to try to build something great.

If I can say,

Greg Marine  
exactly.

David Dal Busco  
Just take time,

Greg Marine  
next time. That's right. And I've actually had more time this year than I've ever had, because we don't what my wife and I, we like to travel. We do a lot of traveling all within the United States. But we're actually hoping to branch out and start exploring the world. I think we're going to start this year, we definitely have plans for next year to visit Greece, but all that fell apart because of the virus. So this year, I've just been spending a lot more time at home getting projects done at the house and and I do have more time than I've ever had. What's the difference this year?

David Dal Busco  
Hopefully, hopefully do the trouble gonna

come back to

Greg Marine  
Yeah, I hope so too.

David Dal Busco  
I never been to the states. So I hope I can come one day to the stage to you

Greg Marine  
now. You don't want to come right now. The numbers are rising. The vs. Is, is rising. But I know we wanted to go to Greece next year for my wife's 40th birthday. And it's just not going to happen is that even if they have a vaccine and won't be widespread yet? You know, maybe not everyone will have it and travel will still be restricting.

David Dal Busco  
Let's do that.

Let's keep hope.

Greg Marine  
Yes, I do have hope. But it doesn't have to be the two years from now. I think what's going to happen? We'll just postpone it to 2022 because we still plan to do it. We're not gonna cancel everything.

David Dal Busco  
Yeah, you're my hype. The time to rewrite everything one more time.

Greg Marine  
That's right. That's right. Very true. Well, uh, David, I really appreciate your time today. And I wish you the best of luck with with deck deck go. And also with your, your freelancing. I think it's great. And I appreciate your time. And and thanks.

David Dal Busco  
Thank you very excited. Thank you for coming. And likewise, I wish that your financing things gonna go further as it already going. Well, I mean, I'm looking for what the next step of your project and yeah, anytime you got a question or want to show me something, I would be happy. Always nice to have a chat with you.

Greg Marine  
Yes, it is. Thanks. Likewise,

David Dal Busco  
same with you. My pleasure.