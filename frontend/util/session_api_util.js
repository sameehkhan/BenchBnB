export const postSession = user => (
  $.ajax({
    method: 'post',
    url: '/api/session',
    data: { user }
  })
);

export const deleteSession = user => (
  $.ajax({
    method: 'delete',
    url: '/api/session',
    data: { user }
  })
);


export const postUser = user => (
  $.ajax({
    method: 'post',
    url: '/api/users',
    data: { user }
  })
);
