export const getUser = () => {
  const userStr = localStorage.getItem("user");
  if (!userStr) return;

  let user = null;

  user = JSON.parse(userStr);
  return user.email;
};

export const isAuthenticated = () => {
  const user = localStorage.getItem("user");

  return user != null;
};
