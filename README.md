# board-up
boardup is an app that allows users to create meet-ups to play games and invite other users to play!

# Demo on YouTube
https://youtu.be/UnxtakAmblI

# User flow
Homescreen -> Login -> User Dashboard 
Options within the dashboard:
Button Attending -> Show boardups the user is attending
Button Hosting -> Show boardups the user is hosting
Button boardups -> Shows all 
Button Create boardup -> Redirects to the Form component which allows the user to create a boardup (check note below **)

# Needs fixing

-Form input might need dummy-proof traps to prevent the user to input wrong emails, or the like.. go to the form.jsx component

-Mock user under the server> DB folder have been saved to the database using Postman
 sending json data via post request to the endpoint /newuser (see screenshots: postman) 
 since registration and authentication is not in place yet

-Missing funcionality on the join and cancel buttons under board-up.jsx (BoardUp component)
-Missing functionality on the share button under board-up.jsx 

-**On the form, it works well and posts to the database HOWEVER ideally the username or userID should be also passed 
on to this component to record which user created this and avoid the user to join their own event

# Further Development

- Ideally when you join an event, a counter on how many players are already registered should be on and 
when the event is full (reached number of players) the event should locked (join button disabled)
- Ideally when the above is done, the number of players under the more info collapsible menu should display attending= players - 1
- Great to have: a group chat telegram service for users

# Extra Credits
- Implement the google address autocomplete API on the form so when the user types their address it autompletes the rest.
(prevents the user from mistyping the address and saves them hard work) 

# Home site
@ URL+'/'
@ URL+'/board-ups (shows all board-ups). This site is meant to be public (no auth needed)
but then the join button shouldn't really be there.

# How to run?
Server - Run: node index.js inside of your server folder: board-up>server
Client - Run: npm run start inside of your app folder: board-up>client>app

# What else to install?
npm you know the drill
React: npm install react react-dom react-scripts
Radix icons
Radix components (one by one ie. accordion, dialog)
Tailwind: npm install tailwindcss (config tailwind file contains the green accent color global for the app and some fonts)
Tailwind scrollbar hide
dotenv (!) Only on the server folder!!! FE doesnt' need this


# Tech Stack
You can see the tech stack under app>src>components>demo or by clicking on the heart <3 on the home screen

# References
Nav Bar pin
https://stackoverflow.com/questions/60169463/tailwindcss-fixed-navbar

Calendar time-date picker icon
https://stackoverflow.com/questions/73899471/how-can-i-change-the-color-of-the-calendar-icon-with-tailwind-css

XML-parser for React
*I tested a few to be able to access the following API but wasnt successful
https://boardgamegeek.com/wiki/page/BGG_XML_API2

Best board games 2023
https://www.polygon.com/tabletop-games/23551994/best-new-board-games-2023-frosthaven-thunder-road

Hide scroll bar with tailwind
https://redpixelthemes.com/blog/tailwindcss-hide-scrollbar/

Tailwind flex
https://tailwindcss.com/docs/flex
