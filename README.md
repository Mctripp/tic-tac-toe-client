# Tic-tac-toe Game Project

## Tech Used

This project uses all of the resources we have gathered from the first three weeks in the program, namely:
- JavaScript
- HTML
- CSS/SASS
- jQuery

## Wireframe

![wireframe](https://github.com/Mctripp/tic-tac-toe-client/blob/master/public/wireframe.jpg)

## User Stories

## Approach

I started by laying out the "skeletons" of each api.js, ui.js, and events.js files for both users and games: empty functions with names describing what they do.

I proceeded by filling in each empty function with their own pseudocode to make it easier to write the code out later.

The first thing I converted from pseudocode was the HTML. It made the most sense because I would need to manipulate and format the HTML in order to test my features.

I used flexbox to setup my grid, and taking some functions from the books example that we did, I put in some forms to connect to the api.js and ui.js files later.

After I got my grid and engine working, and setup events on button clicks, I debugged my way through my page development.

Once I had my page layout and navigation set, I setup the API interactions since that is what I was the least familiar with.

I added finishing touches, such as contact info at the bottom of the page, and then debugged through any issues I was having.

## Unsolved Problems

- Automatic sign-in: Have user automatically sign in after sign up. I attempted this, but the dependencies would always get tangled up.
- Multiplayer games: Look at the documentation and understand how "watch" works, allow two players to play across separate devices.
- Custom tokens: Have a way for the player to upload their desired token image, and replace the variables I use for the images currently with theirs.
- Multiple themes: Make different SASS overlay themes, and a selector in the bottom right of the screen.
- Mobile: I have no desire to do this, seems like a complete redesign of the site, or a hefty amount of CSS.
