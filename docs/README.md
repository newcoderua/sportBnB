
# SportBnB, stands for Sport BODY and BUDDY

[Heroku link, for now dead](https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwi-6-3niOfVAhWDNiYKHbtlA1wQPAgD)

## Minimum Viable Product

SportBnB is a web application inspired by TaskRabbit built using Ruby on Rails and React/Redux.
If you like SPORT, if you want to have a good BODY - you should work frequently, but
sometimes you need some professional help, you need a BUDDY, who can work out with you.
This app provide list of professional sport mentors.


By September 8, 2017, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

Hosting on Heroku

-New account creation, login, guest/demo login

-Allow user to search for available buddies(sport trainers) by providing details

-Then book a desired person(who can help you working out efficiently)

-Allow users to leave feedbacks for the buddies

-Production README


## Design Docs

[View Wireframes](./wireframes)

[React Components](../frontend/components)

[API endpoints](./api-endpoints.md)

[DB schema](./schema/)

[Sample State](./sample-state.md/)

## Implementation Timeline

### Phase 1: Backend setup and Frontend user authentication (2 days)

Objective: Functioning rails project with front-end authentication

### Phase 2: Seed Buddies, Buddies backend, Buddies Search/Index/Index-Items/Display (2 days)

Objective: Have buddies in database. Have frontend seach index, and profile display pages for buddies

### Phase 3: Reservations Model, API, and components (2 days)

Objective: Users can make reservations with buddies selected from a list of available buddies using user provided data. Buddies should then be able to confirm, or decline the reservation.

### Phase 4: Feedbacks Model, API, and components (2 days)

Objectives Allow users to write feedbacks for buddies, allow feedbacks to show for each buddy.

### Phase 5: Bonus Features (Time remaining)

💲 Add Invoice / Billing

🏄 Become a Buddy(coach)

✉️ Built-in messaging Between Client and Buddies

😎 Enrich site content
