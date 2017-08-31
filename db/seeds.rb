# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user_demo = User.create({username: "Albert_Einstein", email: "Albi@yahoo.com", password: "654321", buddy: false, buddy_id: 0})
user1 = User.create!({username: "vlados", email: "vlados@gmail.com", password: "password", buddy: false, buddy_id: 0})
user2 = User.create!({username: "Teddy", email: "teddy@gmail.com", password: "password", buddy: false, buddy_id: 0})

Buddy.destroy_all

buddy2 = Buddy.create!(
  name: "Alex Melnykov",
  sport: "soccer",
  rate: 27,
  image_url: "https://pp.userapi.com/c633930/v633930288/1a922/62l4NYoSVdo.jpg",
  best_achievement: "Perhaps the greatest feeling we experience in sport is freedom.",

  zip: 10001
)
buddy3 = Buddy.create!(
  name: "Daniel Fifa",
  sport: "box",
  rate: 32,
  image_url: "https://ak2.picdn.net/shutterstock/videos/20506177/thumb/1.jpg?i10c=img.resize(height:160)",
  best_achievement: "It's not whether you get knocked down; it's whether you get up.",
  zip: 10001
)
buddy4 = Buddy.create!(
  name: "Ali Jonhson",
  sport: "box",
  rate: 30,
  image_url: "https://pp.userapi.com/c419424/v419424432/23d9/Vihr7A5nB0o.jpg",
  best_achievement: "Pain is only temporary but victory is forever.",
  zip: 10001
)
buddy5 = Buddy.create!(
  name: "Tamrat Chidike",
  sport: "box",
  rate: 38,
  image_url: "http://www.insidethegames.biz/media/image/65537/o/3HWMzK1bXXcTNWbw",
  best_achievement: "Winners don't wait for chances, they take them",
  zip: 10001
)
buddy6 = Buddy.create!(
  name: "Andrew Mazok",
  sport: "soccer",
  rate: 33,
  image_url: "https://pp.userapi.com/c303415/v303415426/4090/hnjGONfJqis.jpg",
  best_achievement: "Today I will do what others won't, so tomorrow I can do what others can't",
  zip: 10001
)
buddy7 = Buddy.create!(
  name: "Chaz Ethelbert",
  sport: "soccer",
  rate: 21,
  image_url: "https://pp.userapi.com/c630231/v630231965/1d196/CIaIzVbgs4w.jpg",
  best_achievement: "Don't practice until you get it right. Practice until you can't get it wrong.l",
  zip: 94016
)

buddy8 = Buddy.create!(
  name: "Jameson Justice",
  sport: "soccer",
  rate: 34,
  image_url: "https://pp.userapi.com/c303415/v303415924/48c6/-DGULL6LWbc.jpg",
  best_achievement: "Love is playing every game as if it's your last.",
  zip: 94016
)

buddy9 = Buddy.create!(
  name: "Andrew Wojkowitz",
  sport: "crossfit",
  rate: 19,
  image_url: "https://cdn-s3.si.com/s3fs-public/images/726786_orig.jpg",
  best_achievement: "Champions train, losers complain",
  zip: 94016
)
buddy10 = Buddy.create!(
  name: "Arn Hadley",
  sport: "crossfit",
  rate: 28,
  image_url: "https://pp.userapi.com/c836323/v836323224/6ee5/ItfW-dj8Tg4.jpg",
  best_achievement: "The score never interested me, only the game.",
  zip: 94016
)
buddy11 = Buddy.create!(
  name: "Vin Colby",
  sport: "crossfit",
  rate: 30,
  image_url: "https://pp.userapi.com/c636930/v636930274/4731/UumRyubV71Y.jpg",
  best_achievement: "Never let the fear of striking out keep you from playing the game",
  zip: 94016
)

buddy12 = Buddy.create!(
  name: "Vladimir Zelinskiy",
  sport: "volleyball",
  rate: 30,
  image_url: "https://pp.userapi.com/c638529/v638529953/2430c/svijZV6RmFQ.jpg",
  best_achievement: "Have you noticed that whatever sport you're trying to learn, some earnest person is always telling you to keep your knees bent?",
  zip: 94016
)
buddy13 = Buddy.create!(
  name: "PingPonger",
  sport: "pingpong",
  rate: 21,
  image_url: "https://frangipaniprincess.files.wordpress.com/2008/08/williamhenzell.jpg",
  best_achievement: "Don't let them drag you down by rumors just go with what you believe in.",
  zip: 10001
)

buddy14 = Buddy.create!(
  name: "Alesia Morgan",
  sport: "running",
  rate: 20,
  image_url: "https://pp.userapi.com/c623919/v623919985/3a732/aBWwNQjufWA.jpg",
  best_achievement: "Stay true to yourself and listen to your inner voice. It will lead you to your dream.",
  zip: 10001
)

buddy15 = Buddy.create!(
name: "Kristen Lee",
sport: "volleyball",
rate: 76,
image_url: "https://i.ytimg.com/vi/nSYd_6wZQoo/maxresdefault.jpg",
best_achievement: "I am funny jumping bunny",
zip: 94016
)

buddy16 = Buddy.create!(
name: "Carol Sonic",
sport: "swimming",
rate: 29,
image_url: "https://pp.userapi.com/c626820/v626820736/20670/V6VFbPHimto.jpg",
best_achievement: "Champions keep playing until they get it right.",
zip: 94016
)

buddy17 = Buddy.create!(
name: "Dimitriy Hudson",
sport: "golf",
rate: 37,
image_url: "https://pp.userapi.com/c639529/v639529437/ed3d/5Ih9xekfi6k.jpg",
best_achievement: "Everything you need is already inside.",
zip: 10001
)

buddy18 = Buddy.create!(
name: "Dan Trenson",
sport: "box",
rate: 23,
image_url: "https://pp.userapi.com/c836333/v836333705/1f1/A7iY0vomLAw.jpg",
best_achievement: "Always keep an open mind and a compassionate heart.",
zip: 94016
)

buddy19 = Buddy.create!(
name: "Anthony Taylor",
sport: "volleyball",
rate: 27,
image_url: "https://pp.userapi.com/c630329/v630329174/18cd3/x0r2MZGtMBw.jpg",
best_achievement: "Build up your weaknesses until they become your strong points.",
zip: 94016
)

buddy20 = Buddy.create!(
name: "James Walker",
sport: "basktball",
rate: 19,
image_url: "http://grfx.cstv.com/photos/schools/va/sports/m-baskbl/auto_bsi_index_fifteen/12664191.jpeg",
best_achievement: "Run forest, run.",
zip: 10001
)




Workout.destroy_all

workout1 = Workout.create!(
    user_id: User.all.find_by_username("Albert_Einstein").id,
    address: "36 w 13 steet",
    sport: "volleyball",
    date: "2014-01-01",
    details: "this is first workout"
)

workout2 = Workout.create!(
    user_id: User.all.find_by_username(user2.username).id,
    address: "36 w 13 steet",
    sport: "volleyball",
    date: "2014-01-01",
    details: "this is the second workout"
)

workout3 = Workout.create!(
    user_id: User.all.find_by_username(user1.username).id,
    address: "36 w 13 steet",
    sport: "volleyball",
    date: "2014-01-01",
    details: "this is third"
)

workout4 = Workout.create!(
    user_id: User.all.find_by_username(user1.username).id,
    address: "36 w 13 steet",
    sport: "volleyball",
    date: "2014-01-01",
    details: "Forth"
)
