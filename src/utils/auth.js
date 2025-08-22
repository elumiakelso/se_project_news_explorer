export const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token", userName: "username" });
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example,com", _id: "fake-id" },
    });
  });
};

export const register = (email, password, userName) => {
  // Pretend we did a fetch request that registered the user
  return new Promise((resolve, reject) => {
    resolve({ message: "User registered successfully", userName });
  });
};