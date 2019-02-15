## DevMountain Docs Readme

This repo is the entry point for [docs.devmountain.com](https://docs.devmountain.com). DevMountain uses the free open-source github repo [Slate](https://github.com/lord/slate) for its documentation. There are multiple API's in use at the time of writing, so it became clear we needed multiple instances of the slate repo for each api. One disadvantage of slate is that there is no tabbing system built in to allow you to select between multiple APIs from one repo. This presented a unique problem in that slate produces a static build folder per instance. Since we had multiple instances of slate (multiple build folders) we had to get creative with our server. If you inspect index.js you'll notice that it has multiple instances of express.static that correspond with routes that send an index.html file back. The server has been set up such that when new documentation is added to the devmtn server, all that needs to be updated in this repo is adding a new route, express.static middleware, updating the env and adding a link on the index.html file in the assets folder. 

## Server side gotchas 

- This is not set up to automatically pull from .travis.yml as it's not a significant project and will not be updated frequently. That means that if you update this repo, you will need to ssh into the server, do a git pull and restart the pm2 process
- When adding a new api documentation folder, make sure you update the .env on the server with the corresponding build folder destination.

## New/existing documentation project FAQ's

- At this time, the server that is hosting the documentation refuses to allow bundle exec middleman build --clean to run. This is a ruby issue where the version won't match up and so it won't run. I spent a good two hours trying to use ruby/ng and apt-get ruby along with a whole host of other methods to get it to work but alas, nothing did. If you can figure it out, please update the server ruby installation and this readme. This means that you need to run the build in each individual documentation project and push it up to github, then pull down on the server for it to register changes.
- I did alter some styles and a few other files to make it devmountain branded. You will want to make the same changes listed below on each new project: 

- source/index.html.md (removed asking for dev key, added in devmountain main docs link)

```
toc_footers:
  - <a href='/' class="devmtn-link">DevMountain main docs</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>	  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>
```

- source/layouts/layout.erb (added div with class logo wrapper)


```
<div class="logo-wrapper">
      <%= image_tag "logo.png", class: 'logo' %>
</div>
```

- source/stylesheets/screen.css.scss (search for class logo and replace with below snippet)

```
.logo-wrapper {
    max-width: 100%;
    margin-bottom: $logo-margin;
    display: flex;
    justify-content: center;
    padding-top: 10px;
}

.logo {
    width: 100px;
    height: 100px;
}

.devmtn-link {
    font-size: 16px;
}
```

- Replace logo.png with devmountain logo (grab from existing documentation)