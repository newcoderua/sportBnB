# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_demo = User.create({username: "Albert_Einstein", email: "Albi@yahoo.com", password: "654321"})


buddy2 = Buddy.create!(
  name: "David",
  sport: "soccer",
  rate: 234,
  image_url: "http://media.gq.com/photos/56eb1c3f1740841549748e55/3:2/w_340/david-beckham-gq-0416-2.jpg",
  best_achievement: "I am walking idol"
)
buddy3 = Buddy.create!(
  name: "Bolt",
  sport: "runnig",
  rate: 621,
  image_url: "https://s-media-cache-ak0.pinimg.com/736x/e0/ba/f4/e0baf44224f49180bb68313aa0957bd6--olympic-icons-fastest-man.jpg",
  best_achievement: "I am faster than a rocket"
)
buddy4 = Buddy.create!(
  name: "Ali",
  sport: "box",
  rate: 78,
  image_url: "https://cdn-s3.si.com/s3fs-public/images/1974-Muhammad-Ali-014473502.jpg",
  best_achievement: "I can teach you how to defend yourself"
)
buddy5 = Buddy.create!(
  name: "Dwayene",
  sport: "basketball",
  rate: 331,
  image_url: "https://cdn-s3.si.com/s3fs-public/dwyane-wade-sportsman-vaultlead.jpg",
  best_achievement: "I am tall"
)
buddy6 = Buddy.create!(
  name: "randomGuy",
  sport: "american football",
  rate: 99,
  image_url: "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/images/sportsman_manning_lead.jpg?itok=mJIUdQ1g",
  best_achievement: "You better run"
)
