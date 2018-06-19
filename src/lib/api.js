const login = () => (
  fetch('/login').then(res => res.json())
);

const getUser = () => (
  fetch('/api/user').then(res => res.json())
);

export {
  login,
  getUser
};
