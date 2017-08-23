export const searchBuddies: query => (
    $.ajax({
      url: '/buddies/search',
      dataType: 'json',
      method: 'GET',
      data: { query }
    })
  ),
