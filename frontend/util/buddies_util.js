export const fetchBuddies = (filters) => {
  // debugger
  return  $.ajax({
    method: 'GET',
    url: '/api/buddies',
    data: { filters }
  })
};

export const createBuddy = (buddy) => {
  // debugger
  return ($.ajax({
    method: "POST",
    url: "api/buddies",
    data: { buddy },
    })
  )
}

export const fetchBuddy = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/buddies/${id}`
  });
}

export const updateCurrBuddy = (buddy) => (
  $.ajax({
    method: "PATCH",
    url: `/api/buddies/${buddy.get('id')}`,
    data: buddy,
    processData: false,
    contentType: false,
  })
)
