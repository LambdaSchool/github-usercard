# Github User Cards

In this project we are going to be accessing the GitHub API and building a social card based on the data we get back. The goal is to create a component based on the data we get when we send a GET request to the GitHub API (requesting your own data at first). The CSS and the base HTML is already done for you, you simply need to create the component function and connect the pieces.

## Need to know

* Adding dependencies to a project:
  * Via script element
  * Using npm
* JavaScript:
  * Creating DOM components with Javascript Functions
  * Utilizing 3rd party libraries (Axios)
  * Promises, .then & .catch
  * HTTP GET requests
  * Array Methods
* DOM
  * Element selection
  * Basic DOM manipulation
  * Events and event listeners

## Set Up The Project With Git

Started it up

**Follow these steps to set up and work on your project:**

* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
* [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [ ] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**

### Project Setup

* [ ] Navigate to the root of the project with your command line.
* [ ] Run `npm install` to download any dependencies listed in the `package.json` file.
* [ ] Run `npm start` to compile your project and launch a development server.

### Axios Setup

#### Option 1 (adding Axios via script element)

* [ ] Include the script element linking the `axios` library in your HTML.
* [ ] If you do not remember the code you can find it [here](https://github.com/axios/axios).

#### Option 2 (installing Axios with npm)

* [ ] Navigate to the root of the project with your command line.
* [ ] Run `npm install axios` to download the dependency (it will be added to the `package.json` file).
* [ ] At the top of the `GitHubCard/index.js` file, type `import axios from 'axios';`

### Part 1: Requesting Data from the GitHub API

* [ ] Follow the instructions found in the `GitHubCard/index.js` file to request data from the GitHub API.

### Part 2: Create the component function

* Once you are receiving data from the GitHub API, take some time to study the data and the information it is giving you. You will create the HTML template you see in the GitHubCard/index.js file and plugging in the dynamic data you are getting from the GitHub API.
* Once you complete the component, create a component based on your profile and add it to the DOM.

### Part 3: Your Friends

* After you have successfully added your own card to the DOM, we will get a list of your followers and programmatically add cards for them as well. Follow the instructions in GitHubCard/index.js.

### Stretch Goals

* Instead of manually creating a list of followers, do it programmatically. Create a function that requests the followers data from the API after it has received your data and create a card for each of your followers. Hint: you can chain promises.

* Look into adding more info as an expanding card. You will need to create some new CSS and a button that expands and contracts the card. 

* Look into adding your GitHub contribution graph. There are a number of different ways of doing this, [this Stack Overflow discussion](https://stackoverflow.com/questions/34516592/embed-github-contributions-graph-in-website) will get you started.

Note: Just a reminder the stretch goals are just extra practice using the tools we have learned. These are not required. Only parts 1-3 are required portions of the project. If you do not get to the stretch goals, don't worry.
