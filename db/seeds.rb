# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_demo = User.create({username: "Albert_Einstein", email: "Albi@yahoo.com", password: "654321"})

Buddy.destroy_all

buddy2 = Buddy.create!(
  name: "David",
  sport: "soccer",
  rate: 234,
  image_url: "http://media.gq.com/photos/56eb1c3f1740841549748e55/3:2/w_340/david-beckham-gq-0416-2.jpg",
  best_achievement: "I am walking idol",
  zip: 10001
)
buddy3 = Buddy.create!(
  name: "Bolt",
  sport: "running",
  rate: 621,
  image_url: "https://s-media-cache-ak0.pinimg.com/736x/e0/ba/f4/e0baf44224f49180bb68313aa0957bd6--olympic-icons-fastest-man.jpg",
  best_achievement: "I am faster than a rocket",
  zip: 10001
)
buddy4 = Buddy.create!(
  name: "Ali",
  sport: "box",
  rate: 78,
  image_url: "https://cdn-s3.si.com/s3fs-public/images/1974-Muhammad-Ali-014473502.jpg",
  best_achievement: "I can teach you how to defend yourself",
  zip: 10001
)
buddy5 = Buddy.create!(
  name: "Dwayene",
  sport: "basketball",
  rate: 331,
  image_url: "https://cdn-s3.si.com/s3fs-public/dwyane-wade-sportsman-vaultlead.jpg",
  best_achievement: "I am tall",
  zip: 10001
)
buddy6 = Buddy.create!(
  name: "phelps",
  sport: "swimming",
  rate: 41,
  image_url: "http://i2.cdn.cnn.com/cnnnext/dam/assets/160630101057-michael-phelps-u-s-trials-exlarge-169.jpg",
  best_achievement: "You better run",
  zip: 10001
)
buddy7 = Buddy.create!(
  name: "Cristiano",
  sport: "soccer",
  rate: 13,
  image_url: "http://gazettereview.com/wp-content/uploads/2017/08/cristiano-ronaldo.jpg",
  best_achievement: "I am famous as hell",
  zip: 94016
)
buddy6 = Buddy.create!(
  name: "Kristen Lee",
  sport: "volleyball",
  rate: 76,
  image_url: "https://i.ytimg.com/vi/nSYd_6wZQoo/maxresdefault.jpg",
  best_achievement: "I am funny jumping bunny",
  zip: 94016
)
buddy6 = Buddy.create!(
  name: "crossfit master",
  sport: "crossfit",
  rate: 188,
  image_url: "https://cdn-s3.si.com/s3fs-public/images/726786_orig.jpg",
  best_achievement: "I can do everything",
  zip: 94016
)
buddy6 = Buddy.create!(
  name: "Tiger Woods",
  sport: "golf",
  rate: 999,
  image_url: "https://media.golfdigest.com/photos/57fc17298f2326fa63fb508a/master/pass/Tiger-Woods-Stanford-WSU-Game.jpg",
  best_achievement: "I am rich",
  zip: 94016
)
buddy6 = Buddy.create!(
  name: "PingPonger",
  sport: "pingpong",
  rate: 89,
  image_url: "https://www.getgamesgo.com/wp-content/uploads/2016/12/Ping-Pong-Tables.jpg",
  best_achievement: "I play better than Forest Gump",
  zip: 94016
)

buddy6 = Buddy.create!(
  name: "Usain Bolt",
  sport: "running",
  rate: 321,
  image_url: "http://www.konbini.com/us/files/2017/06/usainbetter.jpg",
  best_achievement: "I am an olympic champion",
  zip: 94016
)
