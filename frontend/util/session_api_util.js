export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: "GET",
    url: 'api/users',
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const update = (user) => (
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.get('id')}`,
    data: user,
    processData: false,
    contentType: false,
  })
)
