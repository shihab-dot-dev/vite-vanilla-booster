# Vite - Vanilla JS Starter Pack - Shihab 

## **Features**
*  localhost served with https - for more realistic feel - using `vite-plugin-mkcert`
*  Netlify cli to deploy
*  added src alias config with intellisense working
*  netlify ci/cd pipeline config with netlify.toml file
*  or you can up the site on surge.sh config for deployment `echo <DOMINE_NAME> > CNAME` or `npm run surge --domain <DOMINE_NAME>` [`url is in the CNAME file of root directory`]
---

## TODO :
*  .env file support
* Add storybook as entry point, where you list down installation, jsdoc link, demo link and all getting started terms
* Keep it concised to CSR
* PRPL - pattern readiness
* lazy loading of component and scripts when needed
* adding a notification bar(web-component) when the network is slow
* adding notification bar when there the internet goes off and dull the screen so that user wont be able to interact with it
* Try to add SSR - server first render then initiate SPA - [ not in picture as of now]
* if possible add deploy script to heruko or netlify

## **How to Run this project**
**step 1** : Install The node modules needed

`npm install`

**Step 2** : Serve the project to do changes
### To serve localhost with https use
`npm run dev`

** OR **
### To serve localhost without https use
`npm run serve`

---
### To build
`npm run build`

### to preview the build
`npm run preview`

# common todo tasks
* add git flow to the repo
* change netlify or surge .sh configurations files