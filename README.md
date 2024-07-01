# YOUR PROJECT TITLE
#### Video Demo:  <https://files.fm/u/39h8uygx52>
#### Description:
The name of my project is "Systeme de gestion agricole(SGA)"
The aim of this project is to improve relations between farmers in certain key regions of Benin and the local population. To do this, I decided to create a database that would store the farmers' names, regions and telephone numbers. The three commodities chosen were tomatoes, manioc, rice, maize and beans. So we have these three crops. Buyers just have to click on the production of their choice and then analyze and choose the grower they wish to collaborate with.
My program is essentially based on an SQL database containing 6 tables. A user table (for users who will register on the website) and the other tables are for foodstuffs (rice, maize, manioc, tomato, beans).
In the public folder (there's the registration page (index.html), which allows you to register on the web page.
We also have the CSS code that ensures an interesting presentation of the different pages.
Then we have the main page (page.html), which contains the various crop images. We click on the food we want and the other pages open (rice.html, maize.html, beans.html, manioc.html, tomatoes.html). These pages present the contents of our databases (name and surname of the farmer, his production in kg per month and his contact details so that we can meet with him to purchase his crop).
There's also a statistics section enabling us to analyze the evolution of each crop and give advice to the farmer. There are links to my social networks (linkedin and github). There are also links to the main page.

The project have been develop with Express js framework and Mysql Database.
In my server.js, we can see everything we need to connect our server to our database. After that, we have a route to connect a new user.
We can also see the different requests to insert new products (cassava, corn, rice) and the requests to get all this and redirect it to our web page.

To test the project:
Lunch this command:
"node server.js".