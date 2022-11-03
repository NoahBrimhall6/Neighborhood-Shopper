# Neighborhood Shopper        
Neighborhood Shopper was created to allow users to quickly search for items for sale in their community. It allows users to Create Posts, Make Comments, and serach by zip code to find relevent goods or services in their area!

![Application Homepage](./readme%20images/homepage.PNG)


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Features](#features)
- [Contact](#questions)



## Installation
users can access the application here - https://calm-garden-83557.herokuapp.com/


## Usage
When first accessing the applications users will be directed to the homepage. This will display a search bar and random items for sale from the database.
When running a zip-code search the user will be shown results only in that zip code.
When selecting a product, users will be redirected to a product page displaying price, description, and contact information for the seller.
When accessing the "Post" page users will be prompted to sign in before making a post. if they are already signed in they will be automatically directed to the page.
When making a post the inputed information will post to the database and the item the user inputted will be displayed in searches for that Database 

## Contribution
If you Would like to contribute please reach out to the developrs of the application (contact information below)

## Video Demo

https://drive.google.com/file/d/1Ffq-NoHIbpZvN1ucfUJpNuz8iLmY4r-N/view

## Features
This application utilized bootstrap for styling, Handlebars for HTML development, an SQL database, Imgur for file to URL conversion, and password decryption for a secure user experience.

Full NPM Package Feature list 

      "bcrypt": "^5.0.0" -- For securly storing users passwords
      "connect-session-sequelize": "^7.0.4" -- To use Sequalize
      "dotenv": "^8.2.0" -- to host the SQL credentials off the page.
      "express": "^4.17.1" -- to run the server and routes
      "express-handlebars": "^5.2.0" -- to generate HTML files from information stored in the DB
      "express-session": "^1.17.1" -- to store user sessions and protect backend API's
      "handlebars": "^4.7.6" -- to generate HTML files from information stored in the DB
      "mysql2": "^2.2.5" -- to allow the server to access SQL
      "sequelize": "^6.3.5" -- to allow sequelize commands.

## Database Structure 
![DataBase Structure](./readme%20images/Data%20Structure.PNG)
## Questions
Developers: 
Noah Brimhall - noahbrimhall6@gmail.com 
Github: NoahBrimhall6

Rexx Madsen - rexxmadsen@gmail.com
Github: Avialmonanay

Clark Santos - clarkcsantos@gmail.com
Github: C78RKS

If you have any additional questions please email me at rexxmadsen@gmail.com


