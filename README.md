# SportBnB

[SportBnB Live](https://sport-bnb.herokuapp.com/#/)

SportBnB is a full-stack web application inspired by TaskRabbit simulating a site that allow users to book professional coaches(buddies) to workout with them. All styling for the web app are done from scratch using SCSS. The UI for the website are mostly original design taking some inspiration from TaskRabbit and also [MikiyakoBayashi.com](http://www.mikiyakobayashi.com/) . The Frontend utilizes ReactJS and Redux framework, efficiently updates the browser display through the use of a virtual DOM. For backend I used Ruby on Rails along with PostgreSQL.

SportBnB is a practice coding project by Vladyslav Stadnyk.

![alt text](https://github.com/newcoderua/sportBnB/blob/master/app/assets/images/forproduction.png?raw=true)

## Key Features

### User Signup and Authentication

Users must have an account to be able to receive the app's services. Upon signing up, the user will be redirected to their default view (the reservations page)

Users table contains the following columns:

* id
* name
* email
* image_url
* password_digest (For storing encrypted passwords)
* session_token (Used for user login authentication)
* User must be authenticated to be able to navigate majority of the web app. However a ( Guest Login) button is available for demonstration purposes.
* buddy_id
* workout_id


### Real time filtering for buddies

Buddies( professional coaches ) can be filtered in real time by categories:
* type of sport
* min rate $
* max rate $
* city (NYC and SF for now)
