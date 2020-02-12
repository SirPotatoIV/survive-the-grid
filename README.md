# Survive the Grid

The end goal is a 2D battle royale create with React and use Firebase for its real time database features. Currently you can create an account to play and can spectate a game if a user sends you a game id. The spectate mode is currently a way to show the ability to get realtime updates. Eventually this will turn into actual multiplayer.

## Controls
* Move: w, s, a, d
* Build Wall: e
* Shoot Projectile: spacebar

## Deployed Link
https://survive-the-grid.firebaseapp.com/

## Description 
Primary goal of app was to use React for the first time. The app takes in a set of random employees from the API Random User Generator (randomuser.me). It stores the random employees in context. The employees are mapped over and displayed in a table format. The user is able to sort the employees by first name or age by clicking on the column name. The user is also able to search by the users first name with the search input.

## Images
GIF demonstrating the game running
![animation of Employee Directory being used](./README_images/employee_directory.gif)

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Usage 
Could be used as a rough template to create other games. Could also just be used to play a silly game :).

## Credits 
A huge thank you to my instructor bcbrian (https://github.com/bcbrian) for challenging me to take on this on as my final project. Also, for all the help understanding game and React concepts, his Firebase Hook, and all the support. Also, a huge thanks to jacksonopp (https://github.com/jacksonopp) for helping me learn to navigate Firestore functionality and documentation. I watch several YouTube videos by The Net Ninja to learn about React and Firebase working together and by Maksim Ivanov about using Firebase Auth with React. Open Game Art (https://opengameart.org/) was a great resource for the little game art currently included. Certain pieces of code I used online resources for help. I have included citations in the form of comments throughout the code. Image credits are located below the image.

## Contributing 
I was the only one to work on this project, but of course I had help from my instructor, TA's, and classmates.

## Challenges
The main challenge was wrapping my head around the concept of a game loop and building out code for game logic like collisions, damage, movement, etc. Next, but in a close second was React and Firestore. Both are extremely new to me, let alone authentication and react router. Blending all these new concepts together and attempting to put out some sort of functioning product on my own in about a week and a half was rough to say the least.

## For the Future
The big goal is get actual multiplayer up and running. Along with that it's moving/rewriting code so that the whole state isn't being rerendered every game loop, AI isn't within the game loop, there is an actual end game state, etc. After that it's all the basic functionality you expect from a game including: user accounts, leaderboards, character skins, etc.

## License
[MIT](https://choosealicense.com/licenses/mit/)