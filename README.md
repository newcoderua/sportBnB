# SportBnB

[SportBnB Live](https://sport-bnb.herokuapp.com/#/)

SportBnB is a full-stack web application inspired by TaskRabbit simulating a site that allow users to book professional coaches(buddies) to workout with them. All styling for the web app are done from scratch using SCSS. The UI for the website are mostly original design taking some inspiration from TaskRabbit and also [MikiyakoBayashi.com](http://www.mikiyakobayashi.com/) . The Frontend utilizes ReactJS and Redux framework, efficiently updates the browser display through the use of a virtual DOM. For backend I used Ruby on Rails along with PostgreSQL.

SportBnB is a practice coding project by Vladyslav Stadnyk.

![main page](https://github.com/newcoderua/sportBnB/blob/master/app/assets/images/forproduction.png?raw=true)

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

Buddies( professional coaches ) can be filtered by categories:
* type of sport
* min rate $
* max rate $
* city (NYC and SF for now)

![buddies page](https://github.com/newcoderua/sportBnB/blob/master/app/assets/images/buddies_screenshot.png?raw=true)

Users can book buddy (send request for desirable workout ) and buddies can actually accept or decline request in profile page.

Buddies table looks like this:
* name
* sport
* zip
* rate
* best_achievement
* image_url

User may filter Buddies in real time by sending AJAX request to backend where rails server will sort buddies using filter params(it is slice of the state). The buddies controller will take the params and make SQL requests using ActiveRecords.

Also on the main page you can select type of sport you like and it will redirect you to all buddies with sport column already selected for you.

![gif_readme](https://github.com/newcoderua/sportBnB/blob/master/app/assets/images/gif.gif?raw=true)

### Reservation Form with Date dropdown menu and Location Autocompletion

The core function of the web app is for users being able to book buddies(make reservations). The reservation form is linked from both the buddy filter component as well as the buddy details component. The reservation form takes advantage of Google's Autocomplete public API to give user suggestions for the address as it is being entered. When you successfully create a reservation, it will redirect you to your profile page, where you can see all your reservations. At the same time buddy(that you booked can see incoming request for reservation).

![reservation page](https://github.com/newcoderua/sportBnB/blob/master/app/assets/images/reservation_screenshot.png?raw=true)

Reservation table contains the following columns:
* user_id
* buddy_id
* address
* date
* status
* details
* paid

Reservations index sections are ordered by date of the reservations.


### Become a buddy Form
The TaskRabbit lets users to become a taskers if they want to make money by doing some work. My web app SportBnB has the same functionality.


![become_buddy_gif](https://github.com/newcoderua/sportBnB/blob/master/app/assets/images/becomeGif.gif?raw=true)

By extending your account - you actually create new buddy instance, so after creating -  user's buddy_id column becoming buddy.id. So at the same time you are user and buddy. After you became buddy you can not see become buddy button anymore. And also your profile page rendering differently.

### Future Implementations

SportBnB is a work in progress. It has been a great learning experience, but obviously a lot is left to do.

The following features will be added in the near future:

* Buddies can actually accept and decline requests for workout.
* Users can cancel their requests for workouts.
* Users can rate buddies and leave reviews on them
