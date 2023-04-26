# board-up
senior solo project @Codeworks 

boardup is an app that allows users to create meet-ups to play games and invite other users to play!

# User flow

Homescreen -> Login -> Userdashboard 
Options within the dashboard:
Button Attending:
Button Hosting:
Button 

# Under development

-Form input might need dummy-proof traps to prevent the user to input wrong emails, or the like.. go to the form.jsx component

-Mock user under the server> DB folder have been saved to the database using Postman
 sending json data via post request to the endpoint /newuser (see screenshots: postman) 
 since registration and authentication is not in place yet

-Missing funcionality on the join and cancel buttons under board-up.jsx (BoardUp component)

# Home site
@ URL+'/'

# How to install?
Server - Run: node index.js inside of your server folder: board-up>server

Client - Run: npm run start inside of your app folder: board-up>client>app

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
