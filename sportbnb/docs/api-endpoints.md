# API Endpoints

## HTML API

### Root

- GET / - loads React web app

## JSON API

** Users **

- GET /api/user/:id
- POST /api/users
- PATCH /api/user/:id
- Chefs

GET /api/chef/:id
POST /api/chefs
PATCH /api/chefs/:id
Feedbacks

GET /api/chef/:id/feedbacks
GET /api/user/:id/feedbacks
POST /api/chef/:id/feedbacks
PATCH /api/chefs/:id/feedback/:id
Reservations

GET /api/reservations
GET /api/reservation/:id
POST /api/reservations
PATCH /api/reservation/:id
DELETE /api/reservation/:id
Creditcard_info (Bonus)

GET /api/user/:id/creditcards
POST /api/user/:id/creditcards
PATCH /api/user/:id/creditcard/:id
Invoice (Bonus)

GET /api/user/:id/invoices
GET /api/user/:id/invoice/:id
POST /api/user/:id/invoices
PATCH /api/user/:id/invoice/:id
