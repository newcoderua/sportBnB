export const fetchBuddies = () => {
  // debugger
  return  $.ajax({
    method: 'GET',
    url: '/api/buddies'
  })
};
