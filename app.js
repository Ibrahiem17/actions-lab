function login(user, pass) {
  if (user === "admin" && pass === "Secret") {
    return 200;
  }
  return 401;
}

module.exports = { login };
