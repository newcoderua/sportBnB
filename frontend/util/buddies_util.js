export const fetchBuddies = (filters) => {
  // debugger
  return  $.ajax({
    method: 'GET',
    url: '/api/buddies',
    data: { filters }
  })
};
