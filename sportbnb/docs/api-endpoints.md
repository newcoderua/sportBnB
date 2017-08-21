# API Endpoints

## HTML API

### Root

- GET / - loads React web app

## JSON API

** Users **

- GET /api/user/:id - to get one user
- POST /api/users - for user sign-up
- PATCH /api/user/:id - to edit a user's profile


** Session **

- POST /api/session - to login
- DELETE /api/session - to logout

** Buddies **

- GET /api/buddy/:id
- POST /api/buddies
- PATCH /api/buddies/:id

** Feedbacks **

Feedback might be left by buddy or by regular user

- GET /api/buddy/:id/feedbacks
- GET /api/user/:id/feedbacks
- POST /api/buddy/:id/feedbacks
- PATCH /api/buddys/:id/feedback/:id

** Reservations **

- GET /api/reservations
- GET /api/reservation/:id
- POST /api/reservations
- PATCH /api/reservation/:id
- DELETE /api/reservation/:id

 ** Creditcard_info (Bonus) **

- GET /api/user/:id/creditcards
- POST /api/user/:id/creditcards
- PATCH /api/user/:id/creditcard/:id

** Invoice (Bonus) **

- GET /api/user/:id/invoices
- GET /api/user/:id/invoice/:id
- POST /api/user/:id/invoices
- PATCH /api/user/:id/invoice/:id
