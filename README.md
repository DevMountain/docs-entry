## DevMountain Docs Readme

This repo is the entry point for docs.devmountain.com. DevMountain uses the free open-source github repo slate for its documentation. There are multiple API's in use at the time of writing, so it became clear we needed multiple instances of the slate repo for each api. One disadvantage of slate is that there is no tabbing system built in to allow you to select between multiple APIs from one repo. This presented a unique problem in that slate produces a static build folder per instance. Since we had multiple instances of slate (multiple build folders) we had to get creative with our server. If you inspect index.js you'll notice that it has multiple instances of express.static that correspond with routes that send an index.html file back. The server has been set up such that when new documentation is added to the devmtn server, all that needs to be updated in this repo is adding a new route, express.static middleware, updating the env and adding a link on the index.html file in the assets folder. 

## Server side gotchas 

- This is not set up to automatically pull from .travis.yml as it's not a significant project and will not be updated frequently. That means that if you update this repo, you will need to ssh into the server, do a git pull and restart the pm2 process
- When adding a new api documentation folder, make sure you update the .env on the server with the corresponding build folder destination.
