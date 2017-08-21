{
  currentUser: {
    id: 12,
    name: "John Doe",
    type: "client"
  },

  forms: {
    errors: []
  },

  reservations: {
    1: {
      id: 12,
      buddy: "David Beckham",
      date: 11/24/2016,
      time: "12:30",
      sport: "soccer",
      details: "I want to be cool player like you",
      status: "confirmed"
    },
    2: {
      id: 32,
      buddy: "Mike Taison",
      date: 11/25/2016,
      time: "11:30",
      sport: "box",
      details: "Teach how to knock out my haters",
      status: "pending"
    }
  },

  feedbacks: {
    1: {
      id: 32,
      body_id: 13,
      feedbacker_name: "some weirdo from internet",
      date: 08/08/2016,
      body: "I do not like you, buddy"
    }
  },

  buddies {
    1: {
      id: 2,
      name: "Zinadine Zidane",
      bio: "I am a coach in Real Madrid",
      sport: "soccer",
      best_achievement: "I won a champions league twice",
      rate: 98,
      feedbacks: {
        1: {
          id: 1,
          body_id: 2,
          feedbacker_name: "Raul"
          body: "I totally respect what you do",
          date: 06/06/2016
        },
      }
    }
  }

}
