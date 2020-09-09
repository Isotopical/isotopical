---
layout: post
title: Azure Static Web Apps
date: 2020-07-20
author: Greg Marine
tags: 
- technology
- cloud computing 
- software
- azure
close_button: /posts
published: true
---

These days, everything has an app. And thanks to advancements in web technologies, apps can come in the form of websites that look and feel like installable apps. Because of this, I'm sure Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure are investing in making the best experience for developers like myself. As much as I would appreciate that, that also makes the decision on what are the best options much more difficult. If you are interested in hearing about one of the newest options available in Azure, keep reading!

<!--more-->

# Game Changer!

Although I have experience with AWS and GCP, mostly because they have been around for awhile, my experience with Azure is relatively new. And one of their newest offerings is Azure Static Web Apps. So new, in fact, it is still in preview. I first learned of this feature from [John Papa](https://twitter.com/John_Papa) during [IoniConf2020](https://ioniconf.com) in May. I was immediately attracted to it because of how easy it was to integrate with existing GitHub repositories and Actions. This is what I call a game changer for Continuous Integration (CI)/Continuous Delivery (CD) and I do not have to change my development workflow to take full advantage of it.

# How it's done

This article will not be an _exhaustive_ step by step guide. This is mostly because of the preview status of Azure Static Web Apps. However, I will go over the important steps as they existed when I wrote this post. I already had an Azure account setup and had it linked to my GitHub account. Now that Microsoft owns GitHub, it just works. Something else I had already was a web app I was working on that did not yet have a hosting environment but did have a repo in my GitHub account. Actually, the app is this website. I also had a desire to try something new even though I had other web apps hosting in Firebase on the GCP.

After logging into my Azure account, I simply clicked on the new icon for Static Web Apps (Preview) and away I went.

![Static Web Apps](/assets/img/collections/posts/azure-static-web-apps/azure-static-web-apps-1.jpg "Static Web Apps")

![+Add](/assets/img/collections/posts/azure-static-web-apps/azure-static-web-apps-2.jpg "+Add")

# Basics

Clicking the +Add button brought me to the Basics screen where I supplied the Subscription and Resource Group, as well as a Name and chose a Region where I wanted my app to be hosted.

![Basics](/assets/img/collections/posts/azure-static-web-apps/azure-static-web-apps-3.jpg "Basics")

Then, after signing into my GitHub account, I selected my Organization, Repository, and Branch the code I want to deploy is in. I do all my work in feature branches. I chose to use a release branch for the deployment of production ready code and made that the default branch of the repo. You can use any branch for the production deployment. However, I highly recommend using your default branch as there is a powerful staging feature that will deploy a pre-production version of your code when you create a pull request from a feature branch to the default branch. More on that later.

![Source Control Details](/assets/img/collections/posts/azure-static-web-apps/azure-static-web-apps-4.jpg "Source Control Details")

# Build

Clicking Next: Build > takes me to, you guessed it, the build options. My app is developed in Ionic/React and therefore the App location is in the root (/) directory of my repo. I left the default Api location (api) as I don't yet have any Azure Functions setup for this project. I do intend to learn more about Azure Functions someday. But for now, that left me with just the App artifact location. Since I used Ionic/React, the value for this is build. Basically, once the code is built for production, the resulting files are output into the /build directory. For this setting, I didn't need to provide the leading slash because Azure prepends the value automatically from the App location entered previously.

![Build](/assets/img/collections/posts/azure-static-web-apps/azure-static-web-apps-5.jpg "Build")

I skipped adding tags to the resources for now as I wasn't sure what I wanted to use.

# Create

So I just clicked Create and Azure began building the resources for my new web app. Once that was complete, I clicked on Go to resource and noticed there was a URL I could use to immediately see the new web app in action.

![Deployment complete](/assets/img/collections/posts/azure-static-web-apps/azure-static-web-apps-7.jpg "Deployment complete")

![URL](/assets/img/collections/posts/azure-static-web-apps/azure-static-web-apps-8.jpg "URL")

# Custom Domain

After checking out the app, I quickly went to setup my domain under Custom domains. As of writing this, only one subdomain is allowed. I setup `www` for this site. I'm hoping they open that up in the future so I can use any subdomain I'd like along with the route domain `gregmarine.com`. For now, it serves my purpose well as the app is a website, a Website as an App (WaaA), if you will. To ensure my domain pointed to the correct place, I setup a CNAME record at my registrar for www that pointed to the value provided on this screen. I clicked Validate to finish the process and my domain now pointed to the production build of my app.

![Custom Domains](/assets/img/collections/posts/azure-static-web-apps/azure-static-web-apps-9.jpg "Custom Domains")

![Validate](/assets/img/collections/posts/azure-static-web-apps/azure-static-web-apps-10.jpg "Validate")

# Fallback routes

One of the challenges with hosting modern web apps is that most of them, React based ones included, use a Javascript router client side to manage routes to the pages. This means that pages aren't in separate HTML files like traditional static sites. To do this, the app uses the address in the browser's address bar to know where in the app the user wants to be. Because all of this happens on the client side, if the user hits the refresh button or bookmarks a specific page to go to later, the web hosting server has no idea what to do and typically returns a 404, page not found, error. By default, Azure Static Web Apps is configured to serve the 404 error in this situation. Fortunately, this is easy to setup such that it correctly handles the React router.

# Routes.json

Azure uses fallback routes to achieve what I need to give my app control over routing. The first step is creating a file called routes.json with the following basic content.

```json
    {
        "routes": [
            {
                "route": "/*",
                "serve": "/index.html",
                "statusCode": 200
            }
        ]
    }
```

I saved mine in the root of my source as that is where most of the app configuration is.

# GitHub Workflows

After that I needed to tell Azure where to find the file by adding `routes_location: "/"` to the yml file it created in my repo that GitHub Actions uses to build and deploy the app. This file is located in .github/workflows in the root of my branch. Here is what that section looks like in my file.

```yaml
    app_location: "/" # App source code path
    api_location: "api" # Api source code path - optional
    app_artifact_location: "build" # Built app content directory - optional
    routes_location: "/"
```

# Staging

As I mentioned above, if your production environment is tied to your default branch, a pull request from another branch into the default will trigger a staging build in Azure Static Web Apps. This did not work for me at first as the release branch I was using was not the default. Once I switched release to be the default, the magic started to work.

![Environments](/assets/img/collections/posts/azure-static-web-apps/azure-static-web-apps-11.jpg "Environments")

As you can see, there are Title, Branch, Last Update Time, Status, and Browse columns listed in the Staging section of the Environments tab. The Title will come from the title you give to the pull request and the branch is the branch from which the request is coming from. After you create the request, any commits you make to the branch will trigger the build process and deploy the changes to the Staging environment for that branch. Clicking the browse link will launch the app and you can use the URL for testing in any browser and on any device connected to the Internet.

As of writing this, it only allows for a single Staging environment. I have an Azure subscription. So I don't believe this is a limitation to a free account. This may simply be a limitation of the preview status of this feature. But I do not know for sure.

# That was easy!

I now have three environments for my web apps. Development, Staging, and Production are all now easy to setup with Azure Static Web Apps. Anytime I commit code from my local development environment and create a pull request, GitHub runs my build/deploy script and moments later my changes are live in Staging. Once the pull request is merged into my default release branch, GitHub runs my script again and the changes are live in production. The above steps were super easy and straight forward. There were no command line tools to learn and I can easily apply this to any web apps I'd like to host in Azure Static Web Apps. I simply code and check in my changes. It couldn't be easier!

For more information about Azure Static Web Apps, [see the documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/).